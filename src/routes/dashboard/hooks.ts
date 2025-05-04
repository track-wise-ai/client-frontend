import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/api";
import type { Activity, Event } from "@/types";

type UseActivities = () => {
  loading: boolean;
  activites: Activity[];
  generateActivites: (events: Event[]) => Promise<void>;
}

const useActivities: UseActivities = () => {
  const [activites, setActivites] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(false);

  const generateActivites = async (events: Event[]) => {
    setActivites([]);
    setLoading(true);
    let res = null;

    try {
      res = await api.post("/ai", { events });
    } catch (error) {
      console.error(error);
      toast.error("Failed to save generated activites. Please try again.");
    }

    try {
      const rawJson = (res?.data?.choices || [])[0]?.message?.content || "[]";
      const cleaned = rawJson.match(/\[[\s\S]*]/)?.[0] || "[]";
      const parsedActivities = JSON.parse(cleaned);
      setActivites(parsedActivities);
    } catch (error) {
      console.error(error);
      toast.error("Failed to parse generated activites. Please try again.");
    }

    setLoading(false);
  };

  return { loading, activites, generateActivites };
};

export { useActivities };
