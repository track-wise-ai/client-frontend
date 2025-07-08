import { toast } from "sonner";
import { isRouteErrorResponse } from "react-router";
import { api } from "@/api";
import { DEFAULT_ERROR } from '@/constants';
import type { LoaderFunction } from "react-router";
import type { UserSettings } from "@/types";

const loader: LoaderFunction = async () => {
  try {
    const { data: googleSettings } = await api.get("/google/auth-link");
    const { data: userSettings } = await api.get<UserSettings>("/settings");
    const { data: calendars } = await api.get("/google/calendars")
      .catch(() => {
        toast.error("Failed to fetch calendars.");
        return { data: [] };
      });

    return {
      google: { ...googleSettings, ...userSettings.google, calendars },
      jira: userSettings?.jira ?? {},
      ai: userSettings?.ai ?? {},
    };
  } catch (error) {
    if (isRouteErrorResponse(error) && error?.status === 401) {
      throw error;
    }

    const errorMsg = error instanceof Error ? error.message : DEFAULT_ERROR;
    console.error(error);
    toast.error(errorMsg);
  }
};

export { loader };
