import { RefreshCw, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui";
import type { FC } from "react";

export type Props = {
  loading: boolean;
};

const SyncJira: FC<Props> = ({ loading }) => {
  return (
    <Button type="submit" variant="outline" disabled={loading}>
      {loading
        ? <LoaderCircle className="animate-spin" />
        : <><RefreshCw /> Sync</>
      }
    </Button>
  );
};

export { SyncJira };
