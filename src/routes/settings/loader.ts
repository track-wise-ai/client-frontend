import { toast } from "sonner";
import { api } from "@/api";
import type { LoaderFunction } from "react-router";
import type { GoogleCalendarSettings, UserSettings } from "@/types";

const loader: LoaderFunction = async () => {
  try {
    const { data: googleSettings } = await api.get<GoogleCalendarSettings>("/google/settings");
    const { data: userSettings } = await api.get<UserSettings>("/settings");

    return {
      google: { ...googleSettings, ...userSettings.google },
      jira: userSettings.jira,
      ai: { connect: false },
    };
  } catch (error) {
    toast.error(error?.message ?? error?.toString());
  }
};

export { loader };
