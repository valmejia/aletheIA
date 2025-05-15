import GradientButton from "../../components/gradientButton";
import TextField from "../../components/TextField";
import {
  Checkbox,
  FormControlLabel,
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

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const validatePassword = (password: string) => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      alert("Por favor complete todos los campos");
      return;
    }

    if (!form.termsAccepted) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }

    if (!validatePassword(form.password)) {
      alert("La contraseña no cumple con los requisitos mínimos.");
      return;
    }

    setLoading(true); // Activa loading

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
        alert("Usuario creado con éxito");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      alert("Ocurrió un error al crear la cuenta.");
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
    <Grid margin={2} display="flex" flexDirection="column">
      <Grid marginTop={2}>
        <Typography variant="h3">Crear cuenta</Typography>
      </Grid>
      <Stack marginTop={2}>
        <TextField
          onChange={handleChange}
          value={form.firstName}
          label="Nombre"
          name="firstName"
        />
      </Stack>
      <Stack marginTop={2}>
        <TextField
          onChange={handleChange}
          value={form.lastName}
          label="Apellidos"
          name="lastName"
        />
      </Stack>
      <Stack marginTop={2}>
        <TextField
          onChange={handleChange}
          value={form.email}
          label="Correo electrónico"
          name="email"
        />
      </Stack>
      <Stack marginTop={2}>
        <TextField
          value={form.password}
          onChange={handleChange}
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          name="password"
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
        <FormControlLabel
          required
          control={
            <Checkbox
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleCheckboxChange}
            />
          }
          label="Acepto los términos y condiciones"
        />
      </FormGroup>

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