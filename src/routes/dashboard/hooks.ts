import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/api";
import type { Activity, Event } from "@/types";

type UseActivities = () => {
  loading: boolean;
  activites: Activity[];
  generateActivites: (events: Event[]) => Promise<void>;
}

const parseActivities = (rawJson?: string): Activity[] => {
  let activites: Activity[] = [];

  if (Array.isArray(rawJson)) {
    return rawJson;
  }

  try {
    activites = JSON.parse(rawJson || "[]");
  } catch { /* nothing todo */ }

  try {
    const cleaned = `${rawJson}`.match(/\[[\s\S]*]/)?.[0] || "[]";
    activites = JSON.parse(cleaned);
  } catch { /* nothing todo */ }

  return activites;
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
      const parsedActivities = parseActivities(res?.data);
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
