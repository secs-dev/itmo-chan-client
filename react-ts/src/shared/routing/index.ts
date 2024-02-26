import { createHistoryRouter, createRoute } from "atomic-router";
import { createBrowserHistory } from "history";

export const routes = {
  home: createRoute(),
  topicByTopicId: createRoute<{topicId: number}>(),
  login: createRoute(),
};

export const routesMap = [
  { path: "/", route: routes.home },
  { path: "/topic/:topicId", route: routes.topicByTopicId},
  { path: "/login", route: routes.login},
];

const history =  createBrowserHistory();

export const router = createHistoryRouter({ routes: routesMap });

router.setHistory(history);