import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/home/Home";
import ErrorMessage from "../pages/errorMessage/ErrorMessage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorMessage></ErrorMessage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
