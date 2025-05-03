import { LoaderCircle, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui";
import { AIModelsSelect } from "@/components/form";
import type { FC } from "react";
import type { AIModels, AIModel } from "@/types";

type Props = {
  models: AIModels;
  loading: boolean;
  onChange: (value: AIModel["title"]) => void;
  onClickAction: () => void;
};

const AIModelAction: FC<Props> = ({ loading, models, onChange, onClickAction }) => {
  return (
    <div className="flex justify-end gap-3">
      <AIModelsSelect models={models} onChange={onChange} />
      <Button type="button" variant="outline" disabled={loading} onClick={onClickAction}>
        {loading
          ? <LoaderCircle className="animate-spin" />
          : <WandSparkles />
        }
      </Button>
    </div>
  );
};

export { AIModelAction };
