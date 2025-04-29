import { toast } from "sonner";
import { api } from "@/api";
import type { LoaderFunction } from "react-router";

const loader: LoaderFunction = async () => {
  try {
    const { data: googleData } = await api("/google/settings");
    // const { data: aiData } = await api("/ai/settings");

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
