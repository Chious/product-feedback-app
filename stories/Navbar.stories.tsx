import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "@/components/navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
  args: {
    children: "Navbar",
  },
} satisfies Meta;

type Story = StoryObj<typeof Navbar>;

export const Template: Story = {
  args: {
    children: "",
  },
};

export default meta;
