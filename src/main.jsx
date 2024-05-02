import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dogfacts from "./components/Dogfacts.jsx";
import FLags from "./components/FLags.jsx";
const router = createBrowserRouter([
  {
    path: "/Flags",
    element: (
      <>
        <FLags/>
      </>
    ),
  },
  {
    path: "/Dogfacts",
    element: (
      <>
        <Dogfacts />
      </>
    ),
  },
  {
    path: "/",
    element: <><App/></>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
