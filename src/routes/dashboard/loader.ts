import { toast } from "sonner";
import { api } from "@/api";
import type { LoaderFunction } from "react-router";

const loader: LoaderFunction = async ({ request }) => {
  try {
    const { data: google } = await api(`/google${new URL(request.url).search}`);
    const { data: ai } = await api.get("/ai");

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
