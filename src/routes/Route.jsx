import { createBrowserRouter} from "react-router";
import Root from "../pages/root/Root";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>
  },
]);
