import { fn } from "@storybook/test";
import GradientButton from "../components/gradientButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { StoryObj } from "@storybook/react";
import ButtonWithIcon from "../components/ButtonWithIcon";

export default {
  title: "Components/GradientButton",
  component: GradientButton,
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

export const Outlined = {
  args: {
    label: "Button",
    variant: "outlined",
  },
};

export const Contained = {
  args: {
    label: "Button",
    variant: "contained",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
export const Medium = {
  args: {
    size: "medium",
    label: "Button",
  },
};
export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

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

export const WithStartIconOutlined: Story = {
  args: {
    label: "delete",
    variant: "outlined",
    startIcon: <DeleteIcon />,
  },
};

export const WithEndIconOutlined: Story = {
  args: {
    label: "delete",
    variant: "outlined",
    endIcon: <DeleteIcon />,
  },
};