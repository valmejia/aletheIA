import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

interface TextFieldSlotProps extends TextFieldProps {
  label: string;
  helperText: string;
  position?: "start" | "end";
  textStartAdornment?: React.ReactNode;
  textEndAdornment?: React.ReactNode;
}

const TextFieldSlot: React.FC<TextFieldSlotProps> = ({
  label,
  helperText,
  position,
  adornment,
  ...props
}) => {
  const slotProps =
    position && adornment
      ? {
          input: {
            [`${position}Adornment`]: (
              <InputAdornment position={position}>{adornment}</InputAdornment>
            ),
          },
        }
      : undefined;

  return (
    <TextField
      label={label}
      helperText={helperText}
      variant="outlined"
      fullWidth
      {...props}
      slotProps={slotProps}
    />
  );
};

export default TextFieldSlot;