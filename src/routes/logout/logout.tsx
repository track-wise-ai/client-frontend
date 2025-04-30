import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return null;
};

export { Logout };
