import CustomButton from "./Button";
import { Grid, ImageListItem } from "@mui/material";
import GradientButton from "./gradientButton";

const NavBar = () => {
  return (
    <Grid
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      alignContent="flex-start"
    >
      <Grid>
        <ImageListItem sx={{ width: 188, height: 44 }}>
          <img alt="aletheia logo" src="../public/img/AlétheIABlack.svg" />
        </ImageListItem>
      </Grid>

      <Grid
        display="flex"
        direction="row"
        justifyContent="space-evenly"
        alignContent="center"
        flexWrap="wrap"
      >
        <CustomButton
          labelColor="black"
          variant="text"
          label="Inicio"
        ></CustomButton>

        <CustomButton
          labelColor="black"
          variant="text"
          label="Recursos"
        ></CustomButton>

        <CustomButton
          variant="text"
          label="Preguntas Frecuentes"
          labelColor="black"
        ></CustomButton>

        <CustomButton
          labelColor="black"
          variant="text"
          label="Colaboraciones"
        ></CustomButton>
      </Grid>

      <Grid
        display="flex"
        direction="row"
        alignContent="center"
        flexWrap="wrap"
      >
        <Grid margin={1}>
          <GradientButton
            variant="outlined"
            label="Iniciar sesión"
            href="/auth/login"
          ></GradientButton>
        </Grid>
        <Grid margin={1}>
          <GradientButton
            variant="contained"
            label="Crear cuenta"
            href="/auth/signup"
          ></GradientButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default NavBar;