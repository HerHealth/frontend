import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Login from "./assets/components/layouts/LoginScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);
