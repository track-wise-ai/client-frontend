import { toast } from "sonner";
import { api } from "@/api";
import type { LoaderFunction } from "react-router";
import type { GoogleCalendarSettings } from "@/types";

const loader: LoaderFunction = async () => {
  try {
    const { data: googleData } = await api.get<GoogleCalendarSettings>("/google/settings");

    return {
      google: googleData,
      chatgpt: { connect: false },
      jira: { connect: false },
    };
  } catch (error) {
    toast.error(error?.message ?? error?.toString());
  }
};

export { loader };
