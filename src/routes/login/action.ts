import { redirect } from "react-router";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { TOKEN_EXPIRES, ACCESS_TOKEN_KEY } from "@/constants";
import { api } from "@/api";
import type { ActionFunction } from "react-router";

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const res = await api("/auth/login", {
      method: "POST",
      data: credentials,
    });

    const { accessToken } = res.data || {};

    if (!accessToken) {
      throw new Error("Failed to decode authentication token");
    }

    Cookies.set(ACCESS_TOKEN_KEY, accessToken, {
      path: "/",
      expires: TOKEN_EXPIRES,
      secure: !import.meta.env.DEV,
    });

    toast("Logged in successfully.");

    return redirect("/");
  } catch (error) {
    console.error(error);
    toast.error("Login failed. Please try again.");
  }
}

export { action };
