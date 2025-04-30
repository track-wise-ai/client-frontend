import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { decodeJwt } from "jose";
import { TOKEN_KEY } from "@/constants";

type UseAuth = () => void;

const useAuth: UseAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get(TOKEN_KEY);
    try {
      if (!token) {
        setUser(null);
        return;
      }

      const data = decodeJwt(token);

      if (data?.payload) {
        setUser(data.payload);
      }
    } catch (error) {
      setUser(null);
    }
  }, []);

  return { user };
};

export { useAuth };
