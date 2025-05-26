import { useKeycloak } from "@react-keycloak/web";
import { Grid } from "@mui/material";

export default function Home() {
  const { keycloak } = useKeycloak();

  return (
    <Grid>
      <h1>Bienvenido a la página de inicio</h1>
    </Grid>
  );
}