import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { TOKEN_KEY } from "@/constants";
import { AppNavigation } from "@/components";

const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get(TOKEN_KEY);

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

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
