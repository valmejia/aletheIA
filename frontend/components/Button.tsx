import React from "react";
import { Button, ButtonProps, Grid } from "@mui/material";

interface ButtonProps extends ButtonProps {
  label: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  label,
  size,
  color,
  ...props
}) => {
  return (
    <Grid>
      <Button variant="contained" size={size} {...props}>
        {label}
      </Button>
    </Grid>
  );
};

export default CustomButton;