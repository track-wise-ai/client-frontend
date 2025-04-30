import { toast } from "sonner";
import { api } from "@/api";
import type { LoaderFunction } from "react-router";

const loader: LoaderFunction = async () => {
  try {
    const { data: google } = await api("/google");
    const { data: ai } = await api("/ai");

    return {
      events: (google?.events ?? []).filter(({ eventType }) => eventType !== "birthday"),
      aiModels: ai?.models ?? {},
    };
  } catch (error) {
    toast.error(error?.message ?? error?.toString());
    throw error;
  }
};

export { loader };
