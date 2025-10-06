import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/home/Home";
import ErrorMessage from "../pages/errorMessage/ErrorMessage";
import ListedBook from "../pages/ListedBook/ListedBook";
import BookDetail from "../pages/BookDetail/BookDetail";

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
        path: "/listedBook",
        Component: ListedBook,
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
