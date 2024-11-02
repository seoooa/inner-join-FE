import { createBrowserRouter } from "react-router-dom";
import { LoginPage, SignupPage } from "../../auth/pages";

export const ROUTES = {
  LANDING: "/",
  SIGNUP: "/signup",
  LOGIN: "/login",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.LANDING,
    element: <></>,
  },
  {
    path: ROUTES.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
]);
