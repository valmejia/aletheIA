import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import React from "react";

interface textFieldProps extends TextFieldProps {
  label: string;
}

const GradientTextField = styled(TextField)<textFieldProps>(
  ({ theme, error }) => ({
    "& .MuiOutlinedInput-root": {
      transition: "all 0.3s ease",
      borderRadius: 15,

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderWidth: 1,
        borderRadius: 15,
        borderImageSlice: 1,
        borderImageSource: error
          ? "none"
          : "linear-gradient(90deg, #4BCBEB, #8B37FF)",
      },

      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: 3,
        borderImageSlice: 1,
        borderImageSource: error
          ? "none"
          : "linear-gradient(90deg, #4BCBEB, #8B37FF)",
      },
    },
  }),
);

const CustomTextField: React.FC<textFieldProps> = ({
  label,
  helperText,
  error,
  onChange,
  ...props
}) => {
  return (
    <GradientTextField
      label={label}
      helperText={helperText}
      variant="outlined"
      fullWidth
      onChange={onChange}
      error={error}
      {...props}
    />
  );
};

export default CustomTextField;