import React from "react";
import { IconButton } from "@mui/material";

const CustomIconButton: React.FC = ({ children, ...props }) => {
  return <IconButton {...props}>{children}</IconButton>;
};

export default CustomIconButton;