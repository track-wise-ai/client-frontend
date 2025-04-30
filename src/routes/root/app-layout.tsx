import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "@/hooks";
import { AppNavigation } from "@/components/app";

const AppLayout = () => {
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const user = getUser();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <header className="m-6">
        <AppNavigation/>
      </header>
      <article className="m-6">
        <Outlet />
      </article>
    </>
  );
};

export { AppLayout };
