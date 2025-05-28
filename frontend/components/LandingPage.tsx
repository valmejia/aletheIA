import NavBar from "./NavBar";
import Footer from "./Footer";
import { Grid, ImageListItem, Typography } from "@mui/material";
import React from "react";
import GradientButton from "./gradientButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PaidIcon from "@mui/icons-material/Paid";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

const LandingPage = () => {
  return (
    <Grid>
      <NavBar></NavBar>
      <Grid
        sx={{
          marginTop: "10vh",
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Grid>
            <ImageListItem sx={{ width: "30vw", height: "30vh" }}>
              <img alt="aletheia logo" src="/img/AletheIA.svg" />
            </ImageListItem>
          </Grid>
          <Grid>
            <Typography variant="h2">
              Linea de accion ante la violencia digital{" "}
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h5" style={{ color: "grey" }}>
              Cuidamos tu historia. Respetamos tu privacidad. Defendemos tu
              libertad.
            </Typography>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              marginTop: "5vh",
            }}
          >
            <Grid>
              <Grid margin={1}>
                <GradientButton
                  variant="contained"
                  label="Eliminar contenido"
                  endIcon={<ArrowForwardIcon />}
                  size="small"
                ></GradientButton>
              </Grid>
            </Grid>

            <Grid>
              <Grid margin={1}>
                <GradientButton
                  variant="outlined"
                  label="Se parte del cambio"
                ></GradientButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Grid>
            <ImageListItem sx={{ width: "30vw", height: "30vh" }}>
              <img alt="aletheia logo" src="../public/img/escudo.jpeg" />
            </ImageListItem>
          </Grid>
        </Grid>
      </Grid>
      {/*Segundo grid*/}
      <Grid
        sx={{
          marginTop: "10vh",
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ImageListItem sx={{ width: "40vw", height: "30vh" }}>
            <img alt="aletheia logo" src="../public/img/sola.jpeg" />
          </ImageListItem>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            maxWidth: "50vw",
          }}
        >
          <Typography variant="h2">
            ¿Alguien compartió tus fotos íntimas sin tu consentimiento?
          </Typography>
          <Typography variant="h5" sx={{ color: "grey" }}>
            Estamos aquí para ayudarte. Rápido y seguro.
          </Typography>

          <Grid sx={{ display: "flex", justifyContent: "flex-start" }}>
            <GradientButton
              variant="contained"
              label="Eliminar contenido"
              endIcon={<ArrowForwardIcon />}
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
      {/*Tercer grid*/}
      <Grid
        sx={{
          marginTop: "10vh",
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 5,
        }}
      >
        {/* Contenedor del texto */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3,
          }}
        >
          <Typography variant="h2">Estamos contigo </Typography>
          <Typography variant="h5" sx={{ color: "grey", textAlign: "left" }}>
            En AletheIA sabemos lo doloroso y confuso que puede ser enfrentarse
            a la <br />
            difusión de contenido íntimo sin consentimiento. Por eso, creamos
            una <br />
            herramienta segura y empática que te acompaña paso a paso: desde la
            detección <br />
            hasta la eliminación, con apoyo legal y emocional.
          </Typography>
        </Grid>

        {/* Contenedor de la imagen */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ImageListItem sx={{ width: "40vw", height: "30vh" }}>
            <img alt="aletheia logo" src="../public/img/amigas.jpeg" />
          </ImageListItem>
        </Grid>
      </Grid>
      {/*Cuarto grid*/}
      <Grid
        sx={{
          marginTop: "10vh",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        {/* Título de la sección */}
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          ¿Cómo funciona?
        </Typography>
        <Typography variant="h5" sx={{ color: "grey", textAlign: "center" }}>
          Actuar a tiempo puede hacer la diferencia. En aletheIA te ofrecemos un
          proceso confidencial, automatizado y acompañado por profesionales.
        </Typography>

        {/* Contenedor de los pasos */}
        <Grid
          sx={{
            marginTop: "10vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Contenedor izquierdo (puntos 1 y 3) */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 4,
              maxWidth: "45%",
            }}
          >
            {/* Paso 1 */}
            <Grid sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "#1976D2" }}
                >
                  1.
                </Typography>
                <Typography variant="h5">
                  Puedes subir el contenido o dejar que lo identifiquemos por
                  ti.
                </Typography>
              </Grid>
              <Typography variant="h5" sx={{ color: "grey" }}>
                Si cuentas con los enlaces de las publicaciones, agrégalos en la
                plataforma. Si aún no estás segura(o) de ser víctima, realizamos
                una búsqueda completa en las principales plataformas digitales
                para ayudarte a verificarlo.
              </Typography>
            </Grid>

            {/* Paso 3 */}
            <Grid sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "#1976D2" }}
                >
                  3.
                </Typography>
                <Typography variant="h5">Analizamos el contenido</Typography>
              </Grid>
              <Typography variant="h5" sx={{ color: "grey" }}>
                Nuestra IA analiza el contenido de forma rápida y precisa para
                determinar si corresponde a material explícito no consensuado.
              </Typography>
            </Grid>
          </Grid>

          {/* Contenedor derecho (puntos 2 y 4) */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex",
              gap: 4,
              maxWidth: "45%",
            }}
          >
            {/* Paso 2 */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#1976D2" }}
              >
                2.
              </Typography>
              <Typography variant="h5">
                Activamos el protocolo de eliminación
              </Typography>
            </Grid>
            <Typography variant="h5" sx={{ color: "grey" }}>
              Si se confirma la detección, activamos nuestro protocolo para
              retirar el contenido de espacios públicos y lo almacenamos de
              forma segura y cifrada.
            </Typography>

            {/* Paso 4 */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#1976D2" }}
              >
                4.
              </Typography>
              <Typography variant="h5">
                Te brindamos asesoria legal y terapia psicologica
              </Typography>
            </Grid>
            <Typography variant="h5" sx={{ color: "grey" }}>
              Nuestro equipo legal puede brindarte asesoría básica para realizar
              tu denuncia y, si lo necesitas, también puede acompañarte durante
              todo el proceso legal. Además, nuestro equipo de psicología está
              disponible para ofrecerte apoyo emocional y sesiones de terapia.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/*Quinto grid*/}

      <Grid
        sx={{
          marginTop: "10vh",
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 5,
        }}
      >
        {/* Contenedor del texto */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3,
          }}
        >
          <Typography variant="h2">Construyamos el cambio juntos </Typography>
          <Typography variant="h5" sx={{ color: "grey", textAlign: "left" }}>
            Únete a la comunidad de AlethéIA y ayudanos a actuar ante la <br />
            violencia digital. Incluso la contribución más pequeña puede cambiar{" "}
            <br />
            la vida de alguien
          </Typography>
        </Grid>

        {/* Contenedor de la imagen */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ImageListItem sx={{ width: "40vw", height: "30vh" }}>
            <img alt="aletheia logo" src="../public/img/grupo.jpeg" />
          </ImageListItem>
        </Grid>
      </Grid>

      <Grid
        sx={{
          marginTop: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
          marginBottom: "20vh",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            maxWidth: "30%",
          }}
        >
          <FavoriteIcon sx={{ fontSize: "80px", color: "red" }} />
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Hazte voluntario hoy
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", textAlign: "center" }}>
            Tu ayuda puede marcar la diferencia.
          </Typography>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            maxWidth: "30%",
          }}
        >
          <PaidIcon sx={{ fontSize: "80px", color: "green" }} />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Dona y marca la diferencia
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", textAlign: "center" }}>
            Tu donación puede ayudarnos a dar servicio a más personas.
          </Typography>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            maxWidth: "30%",
          }}
        >
          <CorporateFareIcon sx={{ fontSize: "80px", color: "blue" }} />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Organizaciones
          </Typography>
          <Typography variant="h6" sx={{ color: "grey", textAlign: "center" }}>
            Haz que tu organización sea parte de la solución.
          </Typography>
        </Grid>
      </Grid>

      <Footer></Footer>
    </Grid>
  );
};

export default LandingPage;