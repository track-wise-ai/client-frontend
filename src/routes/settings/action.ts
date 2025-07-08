import { toast } from "sonner";
import { api } from "@/api";
import type { ActionFunction } from "react-router";

const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const aiSettings = `${formData.get("aiModel") || '{}'}`;
  let aiModel = '';
  let aiProvider = '';

  try {
    const parsedAiSettings = JSON.parse(aiSettings);
    aiModel = parsedAiSettings.model;
    aiProvider = parsedAiSettings.provider;
  } catch {
    //..
  }

  const settings = {
    googleCalendars: formData.getAll("googleCalendars"),
    jiraUrl: formData.get("jiraUrl"),
    jiraApiKey: formData.get("jiraApiKey"),
    jiraIssueKey: formData.get("jiraIssueKey"),
    jiraAuthType: formData.get("jiraAuthType"),
    jiraEmail: formData.get("jiraEmail"),
    aiModel,
    aiProvider,
  };

  try {
    await api.post("/settings", settings);
    toast.success("Settings saved successfully.");
  } catch (error) {
    console.error(error);
    toast.error("Failed to save settings. Please try again.");
  }
};

export { action };
