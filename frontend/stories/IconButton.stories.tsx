import { fn } from "@storybook/test";
import CustomIconButton from "../components/CustomIconButton";
import { CloudUpload } from "@mui/icons-material";

export default {
  title: "Components/IconButton",
  component: CustomIconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
};

export const Default = {
  args: {
    children: <CloudUpload />,
  },
};

export const Small = {
  args: {
    children: <CloudUpload fontSize="small" />,
  },
};
export const Large = {
  args: {
    size: "large",
    children: <CloudUpload fontSize="inherit" />,
  },
};
export const Primary = {
  args: {
    color: "primary",
    children: <CloudUpload />,
  },
};

export const Secondary = {
  args: {
    color: "secondary",
    children: <CloudUpload />,
  },
};