import React from "react";
import { Button, ButtonProps as MuiButtonProps, Grid } from "@mui/material";

interface CustomButtonProps extends MuiButtonProps {
  label: string;
  labelColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  size,
  color,
  labelColor,
  ...props
}) => {
  return (
    <Grid>
      <Button
        variant="contained"
        size={size}
        sx={{ color: labelColor || "primary" }}
        {...props}
      >
        {label}
      </Button>
    </Grid>
  );
};

export default CustomButton;