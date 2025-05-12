import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "aletheia",
  clientId: "aletheia-user",
});

const initOptions = {
  onLoad: "login-required",
  redirectUri: "http://localhost:3000",
};