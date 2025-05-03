import CustomButton from "./Button";
import { Grid } from "@mui/material";
import GradientButton from "./gradientButton";

const NavBar = () => {
  return (
    <Grid display="flex" direction="row" spacing={8}>
      <Grid display="flex" direction="row">
        <Grid margin={2}>
          <CustomButton variant="text" label="Inicio"></CustomButton>
        </Grid>
        <Grid margin={2}>
          <CustomButton variant="text" label="Recursos"></CustomButton>
        </Grid>
        <Grid margin={2}>
          <CustomButton
            variant="text"
            label="Preguntas Frecuentes"
          ></CustomButton>
        </Grid>

        <Grid margin={2}>
          <CustomButton variant="text" label="Colaboraciones"></CustomButton>
        </Grid>
      </Grid>

      <Grid display="flex" direction="row" marginLeft={10}>
        <Grid margin={2}>
          <GradientButton
            variant="outlined"
            label="Iniciar sesión"
          ></GradientButton>
        </Grid>
        <Grid margin={2}>
          <GradientButton
            variant="contained"
            label="Crear cuenta"
          ></GradientButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default NavBar;