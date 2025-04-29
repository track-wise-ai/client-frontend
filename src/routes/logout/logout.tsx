import { useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie"
import { TOKEN_KEY } from "@/constants";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Cookies.remove(TOKEN_KEY, { path: "/", secure: !import.meta.env.DEV });
    navigate("/login");
  }, [navigate]);

  return null;
};

export { Logout };
