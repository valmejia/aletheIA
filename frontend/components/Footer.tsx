import React from "react";
import CustomButton from "./Button";
import {Grid, ImageListItem, Stack, Typography} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GradientButton from "./gradientButton";

/* TODO: href buttons */
const Footer = () => {
  return (
    <Stack display={"flex"} direction="row" spacing={5}>
      <Grid direction="column" spacing={5} margin={5}>
        <Grid>
          <ImageListItem sx={{ width: 188, height: 44 }}>
            <img alt="AletheIA Logo" src="../public/img/AletheIA.svg" />
          </ImageListItem>
        </Grid>
        <Grid marginTop={3}>
          <Typography variant="body1">
            Cuidamos tu historia. Respetamos tu privacidad. Defendemos tu
            libertad.
          </Typography>
        </Grid>
        <Grid marginTop={3}>
          <GradientButton
            label="Eliminar contenido"
            endIcon={<ArrowForwardIcon />}
            size="small"
            href="/auth/login"
          />
        </Grid>
      </Grid>

      <Grid display={"flex"} direction="row">
        <Stack direction="column" spacing={5} margin={7}>
          <Grid direction="column">
            <Grid container>
              <CustomButton
                variant="text"
                label="Preguntas frecuentes"
                labelColor="black"
              ></CustomButton>
            </Grid>
            <Grid marginLeft={1}>
              <Typography variant="body2">
                Respuestas claras a dudas comunes sobre el funcionamiento y el
                uso de aletheIA.
              </Typography>
            </Grid>
          </Grid>

          <Grid direction="column">
            <Grid>
              <CustomButton
                variant="text"
                label="Soporte técnico"
                labelColor="black"
              ></CustomButton>
            </Grid>
            <Grid>
              <Typography variant="body2" marginLeft={1}>
                Asistencia personalizada para resolver problemas técnicos o de
                acceso.
              </Typography>
            </Grid>
          </Grid>
        </Stack>

        <Stack direction="column" spacing={5} margin={7}>
          <Grid direction="column">
            <Grid>
              <CustomButton
                variant="text"
                label="¿Quiénes somos?"
                labelColor="black"
              ></CustomButton>
            </Grid>
            <Grid>
              <Typography variant="body2" marginLeft={1}>
                Conoce el origen, propósito y enfoque ético de nuestra
                iniciativa.
              </Typography>
            </Grid>
          </Grid>

          <Grid direction="column">
            <Grid>
              <CustomButton
                labelColor="black"
                variant="text"
                label="Misión"
              ></CustomButton>
            </Grid>
            <Grid marginLeft={1}>
              <Typography variant="body2">
                Descubre más acerca de lo que nos impulsa cada dia.
              </Typography>
            </Grid>
          </Grid>
        </Stack>

        <Stack direction="column" spacing={5} margin={7}>
          <Grid direction="column">
            <Grid direction="column">
              <CustomButton
                labelColor="black"
                variant="text"
                label="Nuestro blog"
              ></CustomButton>
            </Grid>
            <Grid marginLeft={1}>
              <Typography variant="body2">
                Actualizaciones, reflexiones y noticias escritas por nuestro
                equipo
              </Typography>
            </Grid>
          </Grid>

          <Grid direction="column">
            <Grid>
              <CustomButton
                labelColor="black"
                variant="text"
                label="Nuestro equipo"
              ></CustomButton>
            </Grid>
            <Grid marginLeft={1}>
              <Typography variant="body2">
                Profesionales multidisciplinarios comprometidos con la justicia
                digital y la innovación.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Stack>
  );
};

export default Footer;
