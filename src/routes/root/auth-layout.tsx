import { Outlet } from "react-router";
import { AuthNavigation } from "@/components/app";

const AuthLayout = () => {
  return (
    <>
      <AuthNavigation />
      <Outlet />
    </>
  )
};

export { AuthLayout };
