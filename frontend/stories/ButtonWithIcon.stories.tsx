import { fn } from "@storybook/test";
import { StoryObj } from "@storybook/react";
import ButtonWithIcon from "../components/ButtonWithIcon";
import DeleteIcon from "@mui/icons-material/Delete";

export default {
  title: "Components/ButtonWithIcon",
  component: ButtonWithIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
};

type Story = StoryObj<typeof ButtonWithIcon>;

export const WithStartIcon: Story = {
  args: {
    label: "delete",
    startIcon: <DeleteIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    label: "delete",
    endIcon: <DeleteIcon />,
  },
};