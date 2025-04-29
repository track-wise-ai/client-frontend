import { Outlet } from "react-router";
import { Toaster } from "@/components/ui";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Outlet />
      <Toaster richColors position="top-right" />
    </div>
  );
};

export { Root };
