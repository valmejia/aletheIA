import { fn } from "@storybook/test";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
};

export const Text = {
  args: {
    label: "Button",
    variant: "text",
  },
};
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

export const Primary = {
  args: {
    color: "primary",
    label: "Button",
  },
};

export const Secondary = {
  args: {
    color: "secondary",
    label: "Button",
  },
};