import { LoaderCircle, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui";
import type { FC } from "react";

type Props = {
  loading: boolean;
  onClickAction: () => void;
};

const AIModelAction: FC<Props> = ({ loading, onClickAction }) => {
  return (
    <div className="flex justify-end gap-3">
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
