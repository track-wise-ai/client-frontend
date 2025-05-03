import { toast } from "sonner";
import { api } from "@/api";
import type { ActionFunction } from "react-router";

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const trackLog = formData.get("trackLog");

  try {
    await api.post("/jira/sync", { trackLog });
    toast.success("Jira synced successfully.");
  } catch (error) {
    console.error(error);
    toast.error("Failed to sync Jira. Please try again.");
  }
};

export { action };
