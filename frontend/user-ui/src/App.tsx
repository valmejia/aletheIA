import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";
import Home from "../Pages/Home";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import LandingPage from "../../components/LandingPage";
import Analize from "../Pages/Analize";

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <Routes>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/login" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/analisis" element={<Analize />} />
        </Routes>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;