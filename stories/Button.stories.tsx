import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/button/button";
import TagButton from "@/components/button/tag-button";
import CountButton from "@/components/button/count-button";
import SortButton from "@/components/button/sort-button";

const meta = {
  title: "Button",
  component: Button,
  subcomponents: { TagButton, CountButton, SortButton },
  args: {
    children: "Button",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    variant: "purple",
  },
};

export const Tag: Story = {
  render: (args) => <TagButton {...args}>UX</TagButton>,
};

export const Count: Story = {
  render: (args) => <CountButton {...args} />,
};

export const Sort: Story = {
  render: (args) => <SortButton {...args} />,
};
