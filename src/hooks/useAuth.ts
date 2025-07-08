import Cookies from "js-cookie";
import { decodeJwt } from "jose";
import { TOKEN_EXPIRES, ACCESS_TOKEN_KEY } from "@/constants";
import { User } from '@/types';

type UseAuth = () => {
  getUser: () => User|null;
  logout: () => void;
};

const useAuth: UseAuth = () => {
  const getUser = () => {
    let user: User|null = null;
    const accessToken = Cookies.get(ACCESS_TOKEN_KEY);

    if (accessToken) {
      try {
        const data = decodeJwt<User|null>(accessToken);

        if (data) {
          user = data;
        }
      } catch {
        // do nothing
      }
    }

    return user;
  };

  const login = (accessToken: string) => {
    Cookies.set(ACCESS_TOKEN_KEY, accessToken, {
      path: "/",
      expires: TOKEN_EXPIRES,
      secure: !import.meta.env.DEV,
    });
  };

  const logout = () => {
    Cookies.remove(ACCESS_TOKEN_KEY, { path: "/", secure: !import.meta.env.DEV });
  };

  return { getUser, logout, login };
};

export { useAuth };
