import React from "react";
import { Box, Button, ButtonProps } from "@mui/material";

interface GradientButtonProps extends ButtonProps {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  label,
  size,
  variant = "contained",
  startIcon,
  endIcon,
  ...props
}) => {
  const isContained = variant === "contained";

  return (
    <Box
      sx={
        !isContained
          ? {
              padding: "2px",
              borderRadius: "4px",
              background: "linear-gradient(90deg, #4BCBEB, #8B37FF)",
              display: "inline-block",
            }
          : undefined
      }
    >
      <Button
        sx={{
          ...(isContained
            ? {
                background: "linear-gradient(90deg, #4BCBEB, #8B37FF)",
                color: "white",
              }
            : {
                backgroundColor: "white",
                color: "linear-gradient(90deg, #4BCBEB, #8B37FF)",
              }),
          padding: "6px 16px",
          borderRadius: "4px",
          textTransform: "none",
          "&:hover": {
            background: isContained
              ? "linear-gradient(90deg, #3BB8D8, #732DE0)"
              : "rgba(139, 55, 255, 0.04)",
          },
        }}
        variant={isContained ? "contained" : "outlined"}
        size={size}
        {...props}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        {label}
      </Button>
    </Box>
  );
};

export default GradientButton;