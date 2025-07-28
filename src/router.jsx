import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./RootLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/login/Login";
import ForgotPass from "./pages/Auth/ForgotPass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      // { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPass />
  }
]);
