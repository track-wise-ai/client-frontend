// import { useEffect } from "react";
import Cookies from "js-cookie";
import { decodeJwt } from "jose";
import { TOKEN_KEY } from "@/constants";

type UseAuth = () => {
  getUser: () => object|null;
  logout: () => void;
};

const useAuth: UseAuth = () => {
  const getUser = () => {
    let user = null;
    const token = Cookies.get(TOKEN_KEY);

    if (token) {
      try {
        const data = decodeJwt(token);

        if (data?.payload) {
          user = data.payload;
        }
      } catch (error) {
        // do nothimg
      }
    }

    return user;
  };

  const login = (token: string) => {
    Cookies.set(TOKEN_KEY, res.data.token, {
      path: "/",
      expires: TOKEN_EXPIRES,
      secure: !import.meta.env.DEV,
    });
  };

  const logout = () => {
    Cookies.remove(TOKEN_KEY, { path: "/", secure: !import.meta.env.DEV });
  };

  return { getUser, logout, login };
};

export { useAuth };
