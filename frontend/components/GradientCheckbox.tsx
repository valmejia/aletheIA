import React from "react";
import { Checkbox, FormControlLabel, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

interface GradientCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  error?: boolean;
  disabled?: boolean;
}

const GradientCheckIcon = styled(CheckIcon)({
  color: "white", // Ícono blanco cuando está marcado
  fontWeight: "bold",
});

const GradientCheckboxStyled = styled(Checkbox)(
  ({ theme, error }: { theme?: any; error?: boolean }) => ({
    width: 24,
    height: 24,
    padding: 0,
    marginRight: 8,
    borderRadius: 4,
    color: error ? theme.palette.error.main : "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    // Borde con gradiente cuando NO está seleccionado
    "&.MuiCheckbox-root:not(.Mui-checked)": {
      border: "2px solid",
      borderImageSlice: 1,
      borderWidth: 2,
      borderImageSource: "linear-gradient(90deg, #4BCBEB, #8B37FF)",
      backgroundColor: "transparent",
    },

    // Cuando está seleccionado, fondo con gradiente
    "&.Mui-checked": {
      background: "linear-gradient(90deg, #4BCBEB, #8B37FF)",
      border: "none",
      "&:hover": {
        background: "linear-gradient(90deg, #3BB8D8, #732DE0)",
      },
    },

    // Cambiar color al icono dentro del checkbox (check)
    "&.Mui-checked .MuiSvgIcon-root": {
      color: "white",
    },

    // Error state
    ...(error && {
      borderColor: theme.palette.error.main,
      "&.MuiCheckbox-root:not(.Mui-checked)": {
        border: `2px solid ${theme.palette.error.main}`,
        borderImageSource: "none",
      },
      "&.Mui-checked": {
        background: theme.palette.error.main,
      },
    }),
  }),
);

const GradientCheckbox: React.FC<GradientCheckboxProps> = ({
  label,
  checked,
  onChange,
  name,
  error = false,
  disabled = false,
}) => {
  return (
    <FormControlLabel
      control={
        <GradientCheckboxStyled
          checked={checked}
          onChange={onChange}
          name={name}
          disabled={disabled}
          error={error}
          icon={<></>}
          checkedIcon={<GradientCheckIcon />}
        />
      }
      label={label}
      sx={{
        color: error ? "error.main" : undefined,
        userSelect: "none",
      }}
    />
  );
};

export default GradientCheckbox;