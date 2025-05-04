import { AIModelsSelect } from "@/components/form";
import type { FC } from "react";
import type { UserSettings } from "@/types";

type Props = {
  ai: UserSettings["ai"];
};

const AIFields: FC<Props> = ({ ai }) => {
  return (
    <section>
      <AIModelsSelect
        models={ai.models}
        selectedModel={ai.selectedModel}
      />
    </section>
  );
};

export { AIFields };
