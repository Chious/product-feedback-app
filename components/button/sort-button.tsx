"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { IoChevronDown, IoChevronUp, IoCheckmark } from "react-icons/io5";

export default function SortButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["Upvotes", "Newest", "Oldest"];
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-gray-blue text-white rounded-md p-2 flex items-center gap-2"
      >
        <p className="body-1 text-gray">
          Sort by: <span className="text-gray-light">{selectedOption}</span>
        </p>{" "}
        <SelectedIcon isSelected={open} />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => {
              handleClose();
              setSelectedOption(option);
            }}
            className="w-[200px] hover:text-purple"
          >
            <ListItemText>{option}</ListItemText>
            {selectedOption === option && (
              <Typography variant="body2" className=" text-purple">
                <IoCheckmark />
              </Typography>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

function SelectedIcon({ isSelected }: { isSelected: boolean }) {
  return isSelected ? <IoChevronUp /> : <IoChevronDown />;
}
