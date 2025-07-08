import { redirect } from "react-router";
import { toast } from "sonner";
import { api } from "@/api";
import type { ActionFunction } from "react-router";

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const userData = {
    firstName: formData.get("firstname"),
    lastName: formData.get("lastname"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    await api("/auth/signup", { method: "POST", data: userData });

    toast("Signup successfully. Now you can login.");

    return redirect("/login");
  } catch (error) {
    console.error(error);
    toast.error("Signup failed. Please try again.");
  }
}

export { action };
