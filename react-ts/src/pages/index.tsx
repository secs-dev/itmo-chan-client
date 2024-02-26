import { Route } from "atomic-router-react";
import { routes } from "@/shared/routing";
import { Home } from "./home";
import {Topic} from "./topic";
import {Auth} from "@/pages/login";

export const Pages = () => (
  <>
      <Route route={routes.home} view={Home}/>
      <Route route={routes.topicByTopicId} view={Topic(routes.topicByTopicId.$params.getState().topicId)}/>
      <Route route={routes.login} view={Auth}/>
  </>
);
