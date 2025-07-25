import { toast } from "sonner";
import { api } from "@/api";
import type { ActionFunction } from "react-router";

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const worklog = formData.get("trackLog");

  try {
    // todo: fix this worst approach
    await api.post("/jira/worklog", { worklog: JSON.parse(`${worklog}` || '[]') });
    toast.success("Jira synced successfully.");
  } catch (error) {
    console.error(error);
    toast.error("Failed to sync Jira. Please try again.");
  }
};

export { action };
