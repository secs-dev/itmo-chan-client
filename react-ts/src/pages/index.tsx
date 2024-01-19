import { Route } from "atomic-router-react";
import { routes } from "@/shared/routing";
import { Home } from "./home";

export const Pages = () => (
  <>
    <Route route={routes.home} view={Home}/>
  </>
);
