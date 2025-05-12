import GradientButton from "../../components/gradientButton";
import TextField from "../../components/TextField";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (password: string) => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Por favor complete todos los campos"); // TODO: HACER EN BONITO -A-
      return;
    }

    if (!validatePassword(form.password)) {
      alert("La contraseña no cumple con los requisitos mínimos.");
      return;
    }

    const response = await fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert("Usuario creado con éxito");
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.detail}`);
    }
  };

  return (
    <Grid margin={2} display="flex" flexDirection="column">
      <Grid marginTop={2}>
        <Typography variant="h3"> Crear cuenta</Typography>
      </Grid>
      <Stack marginTop={2}>
        <TextField
          onChange={handleChange}
          value={form.name}
          label="Nombre completo"
          name="name"
        ></TextField>{" "}
      </Stack>
      <Stack marginTop={2}>
        <TextField
          onChange={handleChange}
          value={form.email}
          label="Correo electronico"
          name="email"
        ></TextField>
      </Stack>
      <Stack marginTop={2}>
        <TextField
          value={form.password}
          onChange={handleChange}
          label="Contraseña"
          type="password"
          name="password" // TODO: Q SE VEA EL PW
        ></TextField>
      </Stack>

      <Grid display="flex" justifyContent="space-evenly" margin={2}>
        <Grid display="flex" justifyContent="row" alignContent="center">
          <ClearIcon />
          <Typography variant="body2">Minimo 8 caracteres</Typography>
        </Grid>

        <Grid display="flex" justifyContent="row" alignContent="center">
          <ClearIcon />
          <Typography variant="body2">1 número </Typography>
        </Grid>

        <Grid display="flex" justifyContent="row" alignContent="center">
          <ClearIcon />
          <Typography variant="body2">1 Mayúscula </Typography>
        </Grid>
        <Grid display="flex" justifyContent="row" alignContent="center">
          <ClearIcon />
          <Typography variant="body2">1 Caracter especial</Typography>
        </Grid>
      </Grid>

      <FormGroup>
        <FormControlLabel
          required
          control={<Checkbox />}
          label="Acepto los términos y condiciones"
        />
      </FormGroup>

      <Stack marginTop={2}>
        <GradientButton
          size="large"
          fullWidth
          label="Crear cuenta"
          onClick={handleSubmit}
        ></GradientButton>
      </Stack>
    </Grid>
  );
}