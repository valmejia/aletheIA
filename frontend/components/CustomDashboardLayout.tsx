import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  ImageListItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import GavelIcon from "@mui/icons-material/Gavel";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PaymentIcon from "@mui/icons-material/Payment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const collapsedWidth = 70;

interface CustomDashboardLayoutProps {
  children: React.ReactNode;
}

const CustomDashboardLayout: React.FC<CustomDashboardLayoutProps> = ({
  children,
}) => {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    console.log("Cerrar sesión");
  };

  const mainItems = [
    { label: "Página principal", icon: <HomeIcon />, route: "/home" },
    { label: "Mis análisis", icon: <AssessmentIcon />, route: "/analisis" },
    { label: "Mis casos", icon: <FolderSharedIcon />, route: "/casos" },
    { label: "Abogados", icon: <GavelIcon />, route: "/abogados" },
    { label: "Psicología", icon: <PsychologyIcon />, route: "/psicologia" },
    { label: "Pagos", icon: <PaymentIcon />, route: "/pagos" },
  ];

  const secondaryItems = [
    { label: "Soporte técnico", icon: <SupportAgentIcon />, route: "/soporte" },
    { label: "Configuración", icon: <SettingsIcon />, route: "/configuracion" },
    { label: "Mi perfil", icon: <AccountCircleIcon />, route: "/perfil" },
    { label: "Cerrar sesión", icon: <LogoutIcon />, action: handleLogout },
  ];

  return (
    <Box sx={{ display: "flex", backgroundColor: "#FFFFFF" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#FFFFFF",
          color: "#000000",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>

          <ImageListItem sx={{ width: 188, height: 44 }}>
            <img alt="aletheia logo" src="../public/img/AlétheIA.svg" />
          </ImageListItem>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : collapsedWidth,
            transition: "width 0.3s",
            overflowX: "hidden",
            boxSizing: "border-box",
            backgroundColor: "#FFFFFF",
            borderRight: "none",
            boxShadow: "none",
          },
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          {open && (
            <ImageListItem sx={{ width: 188, height: 44 }}>
              <img alt="aletheia logo" src="/img/AlétheIABlack.svg" />
            </ImageListItem>
          )}
        </Toolbar>
        <Divider />

        {/* Navegación principal */}
        <List>
          {mainItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => navigate(item.route)}
              sx={{ justifyContent: open ? "flex-start" : "center", px: 2 }}
            >
              <ListItemIcon
                sx={{
                  color: "#000000",
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.label} />}
            </ListItem>
          ))}
        </List>

        <Divider sx={{ mt: "auto" }} />

        <List>
          {secondaryItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() =>
                item.route ? navigate(item.route) : item.action?.()
              }
              sx={{ justifyContent: open ? "flex-start" : "center", px: 2 }}
            >
              <ListItemIcon
                sx={{
                  color: "#000000",
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.label} />}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          backgroundColor: "#FFFFFF",
          minHeight: "100vh",
          transition: "margin 0.3s",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CustomDashboardLayout;