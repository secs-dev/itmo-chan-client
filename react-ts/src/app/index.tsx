import React from "react";
import { router } from "@/shared/routing";
import { RouterProvider } from "atomic-router-react";
import { Pages } from "@/pages";

import "./index.css";

export const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <Pages />
      </RouterProvider>
    </React.StrictMode>
  );
};
