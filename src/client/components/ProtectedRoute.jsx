import { Navigate } from "react-router-dom";
import { useAuth } from "../state-management/AuthProvider";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
