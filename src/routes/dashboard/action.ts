import { toast } from "sonner";
import { api } from "@/api";
import type { ActionFunction } from "react-router";

const action: ActionFunction = async ({ request }) => {
  let activites = [];
  const formData = await request.formData();
  const aiData = {
    model: formData.get("aiModel"),
    events: formData.get("events"),
  };

  try {
    const { data } = await api("/ai", { method: "POST", data: aiData });

    try {
      const rawJson = (data?.choices || [])[0]?.message?.content || "[]";
      const cleaned = rawJson.match(/\[[\s\S]*]/)?.[0] || "[]";
      activites = JSON.parse(cleaned);
    } catch (error) {
      // nothing todo
    }

    return { activites };
  } catch (error) {
    console.error(error);
    toast.error("Failed to save settings. Please try again.");
  }
};

export { action };
