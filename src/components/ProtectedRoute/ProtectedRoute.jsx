import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("usuario");

  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Se estiver autenticado, renderiza a rota protegida
  return children;
}

export default ProtectedRoute;
