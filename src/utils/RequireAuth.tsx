import { Navigate } from "react-router-dom";

import useGlobalStore from "../store/GlobalStore";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const [{ user }] = useGlobalStore();
  if (!user) return <Navigate to="/" replace />;

  return children;
};
