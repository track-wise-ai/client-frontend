import { Play, LoaderCircle } from "lucide-react";
import { Button, DatePickerWithRange, Props as DatePickerWithRangeProps } from "@/components/ui";
import type { FC } from "react";

export type Props = DatePickerWithRangeProps & {
  loading: boolean;
  onClick: () => void;
};

const CalendarRange: FC<Props> = ({ loading, onClick, ...props }) => {
  return (
    <div className="flex justify-end gap-3">
      <DatePickerWithRange {...props}/>
      <Button type="button" variant="outline" disabled={loading} onClick={onClick}>
        {loading
          ? <LoaderCircle className="animate-spin" />
          : <Play />
        }
      </Button>
    </div>
  );
};

export { CalendarRange };
