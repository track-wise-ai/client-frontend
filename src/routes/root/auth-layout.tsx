import { Outlet } from "react-router";
import { AuthNavigation } from "@/components";

const AuthLayout = () => {
  return (
    <>
      <AuthNavigation />
      <Outlet />
    </>
  )
};

export { AuthLayout };
