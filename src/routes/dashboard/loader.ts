import { toast } from "sonner";
import { api } from "@/api";
import type { LoaderFunction } from "react-router";
import type { Event } from "@/types";

const loader: LoaderFunction = async ({ request }) => {
  try {
    const { data: google } = await api.get(`/google${new URL(request.url).search}`);

    return {
      events: (google?.events ?? []).filter(({ eventType }: Event) => eventType !== "birthday"),
    };
  } catch (error) {
    toast.error(error?.message ?? error?.toString());
    throw error;
  }
};

export { loader };
