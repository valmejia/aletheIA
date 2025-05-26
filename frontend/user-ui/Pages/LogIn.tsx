import {
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRef, useState } from "react";
import GradientButton from "../../components/gradientButton";
import TextField from "../../components/TextField";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const didCheckSession = useRef(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    setLoading(true);

    try {
      const sessionRes = await fetch(
        "http://localhost:8000/auth/check-session",
        {
          credentials: "include",
        },
      );

      if (sessionRes.ok) {
        navigate("/home");
        return;
      }

      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      });

      console.log("Respuesta del login:", response.status);

      if (response.ok) {
        navigate("/home");
      } else {
        const data = await response.json();
        alert(data.detail || "Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      alert("Error al intentar iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid margin={2} display="flex" flexDirection="column">
      <Grid marginTop={2}>
        <Typography variant="h3">Iniciar sesión</Typography>
      </Grid>

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
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack marginTop={2}>
        <GradientButton
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={handleSubmit}
          disabled={loading}
          label={loading ? "Ingresando..." : "Iniciar sesión"}
        />
      </Stack>
    </Grid>
  );
}