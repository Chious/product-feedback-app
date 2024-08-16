import Image from "next/image";
import photo from "@/public/user-images/image-anne.jpg";
import Button from "../button/button";
import { StaticImageData } from "next/image";

type CommentItemProps = {
  username: string;
  account: string;
  comment: string;
  image?: StaticImageData;
};

export default function CommentItem({
  username,
  account,
  comment,
  image,
}: CommentItemProps) {
  return (
    <div className="p-2 flex gap-4 flex-col">
      <div className="head flex justify-between gap-4">
        <Image
          src={image || photo}
          width={40}
          height={40}
          alt="annie's photo"
          className="rounded-full"
        />
        <div className="flex text-start flex-col flex-1">
          <h4>{username}</h4>
          <h4>{account}</h4>
        </div>
        <button className=" text-blue">Reply</button>
      </div>
      <p>{comment}</p>
    </div>
  );
}
