import { toast } from "sonner";
import { api } from "@/api";
import type { ActionFunction } from "react-router";

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const aiData = {
    model: formData.get("aiModel"),
    events: formData.get("events"),
  };

  try {
    const { data } = await api("/ai", { method: "POST", data: aiData });
    return data;
  } catch (error) {
    console.error(error);
    toast.error("Failed to save settings. Please try again.");
  }
};

export { action };
