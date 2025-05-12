import TextField from "../../components/TextField";
import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function LogIn() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Por favor complete todos los campos"); // TODO: HACER EN BONITO -A-
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
        <Typography variant="h3">Iniciar sesion</Typography>
      </Grid>

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
    </Grid>
  );
}