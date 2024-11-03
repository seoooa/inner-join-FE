import { createBrowserRouter } from "react-router-dom";
import DocEvaluate from "../../manager/pages/DocEvaluate";
import { GlobalStyle } from "../styles/GlobalStyles";
import ResultShare from "../../manager/pages/ResultShare";

export const ROUTES = {
  SIGNUP: "/signup",
  LOGIN: "/login",
  DOCEVALUATE: "/doc-eval",
  RESULTSHARE: "/result",
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
  {
    path: ROUTES.DOCEVALUATE,
    element: (
      <div>
        <GlobalStyle />
        <DocEvaluate />
      </div>
    ),
  },
  {
    path: ROUTES.RESULTSHARE,
    element: (
      <div>
        <GlobalStyle />
        <ResultShare />
      </div>
    ),
  },
]);
