import { createBrowserRouter } from "react-router-dom";
import Explore from "../pages/explore";
import Home from "../pages/home";
import MainLayout from "../layouts/main";
import { Children } from "react";
import Bookmarks from "~/pages/bookmarks";
import Messages from "~/pages/mesages";
import Lists from "~/pages/lists";
import Profile from "~/pages/profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: ":slug",
        element: <Profile />,
      },
    ],
  },
]);

export default routes;
