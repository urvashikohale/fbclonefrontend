import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./core/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
export default router;
