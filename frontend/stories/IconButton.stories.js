import { fn } from "@storybook/test";
import CustomIconButton from "../components/CustomIconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default {
  title: "Components/IconButton",
  component: CustomIconButton,
  parameters: {
    layout: "centered",
  },

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
};

export const Small = {
  args: {
    size: "small",
    children: <DeleteIcon />,
  },
};

export const Medium = {
  args: {
    size: "medium",
    children: <DeleteIcon />,
  },
};
export const Large = {
  args: {
    size: "large",
    children: <DeleteIcon />,
  },
};

export const Primary = {
  args: {
    color: "primary",
    children: <DeleteIcon />,
  },
};

export const Secondary = {
  args: {
    color: "secondary",
    children: <DeleteIcon />,
  },
};