import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import FoodeliDesign from "pages/FoodeliDesign";
import Subscription from "pages/Subscription";
import LoginPage from "pages/LoginPage";
import Cart from "pages/Cart";
import Signup from "pages/Signup";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "foodelidesign",
      element: <FoodeliDesign />,
    },
    {
      path: "subscription",
      element: <Subscription />,
    },
    {
      path: "loginpage",
      element: <LoginPage />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
