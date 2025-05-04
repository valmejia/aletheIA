import CustomButton from "./Button";
import { Grid, ImageListItem } from "@mui/material";
import GradientButton from "./gradientButton";

const NavBar = () => {
  return (
    <Grid display="flex" direction="row" spacing={8}>
      <Grid>
        <ImageListItem
          sx={{ width: 188, height: 44, margin: 1, marginRight: 13 }}
        >
          <img alt="aletheia logo" src="../public/img/AlétheIABlack.svg" />
        </ImageListItem>
      </Grid>
      <Grid display="flex" direction="row">
        <Grid margin={2}>
          <CustomButton
            labelColor="black"
            variant="text"
            label="Inicio"
          ></CustomButton>
        </Grid>
        <Grid margin={2}>
          <CustomButton
            labelColor="black"
            variant="text"
            label="Recursos"
          ></CustomButton>
        </Grid>
        <Grid margin={2}>
          <CustomButton
            variant="text"
            label="Preguntas Frecuentes"
            labelColor="black"
          ></CustomButton>
        </Grid>

        <Grid margin={2}>
          <CustomButton
            labelColor="black"
            variant="text"
            label="Colaboraciones"
          ></CustomButton>
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