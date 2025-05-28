import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
}