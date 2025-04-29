import { Root, AuthLayout, AppLayout, ErrorBoundary } from "./root";
import { Login, action as loginAction } from "./login";
import { Signup, action as signupAction } from "./signup";
import { Logout } from "./logout";
import {
  Dashboard,
  action as dashboardAction,
  loader as dashboardLoader,
} from "./dashboard";
import {
  Settings,
  action as settingsAction,
  loader as settingsLoader,
} from "./settings";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    ErrorBoundary: ErrorBoundary,
    children: [
      { path: "/logout", Component: Logout },
      {
        Component: AuthLayout,
        children: [
          { path: "/login", action: loginAction, Component: Login },
          { path: "/signup", action: signupAction, Component: Signup },
        ],
      },
      {
        Component: AppLayout,
        children: [
          {
            index: true,
            action: dashboardAction,
            loader: dashboardLoader,
            Component: Dashboard,
          },
          {
            path: "/settings",
            action: settingsAction,
            loader: settingsLoader,
            Component: Settings,
          },
        ],
      },
    ],
  },
];

export { routes };
