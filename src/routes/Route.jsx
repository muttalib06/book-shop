import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/home/Home";
import ErrorMessage from "../pages/errorMessage/ErrorMessage";
import BookDetail from "../pages/BookDetail/BookDetail";
import ReadList from "../pages/ReadList/ReadList";

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
      {
        path: "/readBook",
        loader:() => fetch("books.json").then(res => res.json()),
        Component: ReadList,
      },
      {
        path: "/bookDetail/:id",
        loader: async () => {
          const response = await fetch("/books.json");
          return response.json();
        },
        Component: BookDetail,
      },
    ],
  },
]);
