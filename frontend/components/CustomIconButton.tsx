import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";

const CustomIconButton: React.FC<IconButtonProps> = ({ ...props }) => {
  return <IconButton {...props} />;
};

export default CustomIconButton;