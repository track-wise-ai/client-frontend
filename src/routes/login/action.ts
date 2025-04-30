import { redirect } from "react-router";
import { toast } from "sonner";
import { api } from "@/api";
import type { ActionFunction } from "react-router";

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const res = await api("/login", {
      method: "POST",
      data: credentials,
    });

    Cookies.set(TOKEN_KEY, res.data.token, {
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
