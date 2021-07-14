import { Route, Redirect } from "react-router-dom";

import useGlobalStore from "../store/GlobalStore";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [{ user }] = useGlobalStore();
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user ? <RouteComponent {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
