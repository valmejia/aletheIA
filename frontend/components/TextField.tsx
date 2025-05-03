import TextField, { TextFieldProps } from "@mui/material/TextField";
import React from "react";

interface textFieldProps extends TextFieldProps {
  label: string;
}

const textField: React.FC<textFieldProps> = ({
  label,
  helperText,
  ...props
}) => {
  return (
    <TextField
      label={label}
      helperText={helperText}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
};

export default textField;