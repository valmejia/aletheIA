import { useKeycloak } from "@react-keycloak/web";
import { Grid } from "@mui/material";
import HomeNavbar from "../../components/HomeNavbar";

export default function Home() {
  const { keycloak } = useKeycloak();

  return (
    <Grid>
      <HomeNavbar />
    </Grid>
  );
}