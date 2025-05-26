import { Grid, ImageListItem } from "@mui/material";

const HomeNavbar = () => {
  return (
    <Grid>
      <Grid>
        <ImageListItem sx={{ width: 188, height: 44 }}>
          <img alt="aletheia logo" src="../public/img/AlétheIABlack.svg" />
        </ImageListItem>
      </Grid>

      <Grid></Grid>
    </Grid>
  );
};

export default HomeNavbar;