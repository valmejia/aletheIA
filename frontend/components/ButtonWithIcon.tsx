import React from "react";
import { Button, ButtonProps, Grid } from "@mui/material";

interface ButtonWithIconProps extends ButtonProps {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  label,
  startIcon,
  endIcon,
  size,
  color,
  ...props
}) => {
  return (
    <Grid>
      <Button
        variant="contained"
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        {...props}
      >
        {label}
      </Button>
    </Grid>
  );
};

export default ButtonWithIcon;