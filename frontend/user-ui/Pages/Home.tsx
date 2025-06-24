import { useKeycloak } from "@react-keycloak/web";
import { Grid } from "@mui/material";
import CustomDashboardLayout from "../../components/CustomDashboardLayout";

export default function Home() {
  const { keycloak } = useKeycloak();

  return (
    <Grid>
      <CustomDashboardLayout />
    </Grid>
  );
}