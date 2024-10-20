import { createBrowserRouter } from "react-router-dom";

export const ROUTES = {
  SIGNUP: "/signup",
  LOGIN: "/login",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.SIGNUP,
    element: <></>,
  },
  {
    path: ROUTES.LOGIN,
    element: <></>,
  },
]);
