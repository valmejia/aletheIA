import GradientButton from "../../components/gradientButton";
import TextField from "../../components/TextField";
import {
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GradientCheckbox from "../../components/GradientCheckbox";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Quitar error si el usuario escribe algo
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const validatePassword = (password: string) => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = async () => {
    setServerError(null);

    const newErrors = {
      firstName: !form.firstName,
      lastName: !form.lastName,
      email: !form.email,
      password: !form.password,
      termsAccepted: !form.termsAccepted,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) return;

    if (!validatePassword(form.password)) {
      setErrors((prev) => ({ ...prev, password: true }));
      return;
    }

    setLoading(true);

    try {
      const payload = {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        password: form.password,
        username: form.email,
      };

      const response = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setServerError(null);
        navigate("/home");
      } else {
        const errorData = await response.json();
        setServerError(errorData.detail || "Error desconocido");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      setServerError("Ocurrió un error al crear la cuenta.");
    } finally {
      setLoading(false);
    }
  };

  const passwordChecks = {
    length: form.password.length >= 8,
    number: /\d/.test(form.password),
    uppercase: /[A-Z]/.test(form.password),
    specialChar: /[!@#$%^&*()_+]/.test(form.password),
  };

  return (
    <Grid margin={2} display="flex" flexDirection="column" container>
      <Grid marginTop={2}>
        <Typography variant="h3">Crear cuenta</Typography>
      </Grid>
      <Stack marginTop={2}>
        <TextField
          onChange={handleChange}
          value={form.firstName}
          label="Nombre"
          name="firstName"
          error={errors.firstName}
          helperText={errors.firstName && "El nombre es obligatorio"}
        />
      </Stack>
      <Stack marginTop={2}>
        <TextField
          onChange={handleChange}
          value={form.lastName}
          label="Apellidos"
          name="lastName"
          error={errors.lastName}
          helperText={errors.lastName && "El apellido es obligatorio"}
        />
      </Stack>
      <Stack marginTop={2}>
        <TextField
          onChange={handleChange}
          value={form.email}
          label="Correo electrónico"
          name="email"
          error={errors.email}
          helperText={errors.email && "El correo electrónico es obligatorio"}
        />
      </Stack>
      <Stack marginTop={2}>
        <TextField
          value={form.password}
          onChange={handleChange}
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          name="password"
          error={errors.password}
          helperText={
            errors.password
              ? "La contraseña no cumple con los requisitos mínimos"
              : ""
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Grid container spacing={1} marginY={2}>
        {[
          { label: "Mínimo 8 caracteres", valid: passwordChecks.length },
          { label: "1 número", valid: passwordChecks.number },
          { label: "1 mayúscula", valid: passwordChecks.uppercase },
          { label: "1 caracter especial", valid: passwordChecks.specialChar },
        ].map(({ label, valid }) => (
          <Grid item xs={6} key={label} display="flex" alignItems="center">
            {valid ? (
              <CheckIcon color="success" />
            ) : (
              <ClearIcon color="error" />
            )}
            <Typography variant="body2" marginLeft={1}>
              {label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <FormGroup>
        <GradientCheckbox
          name="termsAccepted"
          checked={form.termsAccepted}
          onChange={handleCheckboxChange}
          label="Acepto los términos y condiciones*"
          error={errors.termsAccepted}
          disabled={loading}
        />
        {errors.termsAccepted && (
          <Typography variant="caption" color="error" sx={{ marginLeft: 1 }}>
            Debe aceptar los términos y condiciones
          </Typography>
        )}
      </FormGroup>

      {serverError && (
        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
          {serverError}
        </Typography>
      )}

      <Stack marginTop={2}>
        <GradientButton
          size="large"
          fullWidth
          label={loading ? "Creando cuenta..." : "Crear cuenta"}
          onClick={handleSubmit}
          disabled={loading}
        />
      </Stack>
    </Grid>
  );
}