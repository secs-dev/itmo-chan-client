import { createHistoryRouter, createRoute } from "atomic-router";
import { createBrowserHistory } from "history";

export const routes = {
  home: createRoute(),
};

export const routesMap = [
  { path: "/", route: routes.home },
];

const history =  createBrowserHistory();

export const router = createHistoryRouter({ routes: routesMap });

router.setHistory(history);