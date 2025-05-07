import { CalendarRange, type Props as CalendarRangeProps } from "./calendar-range";
import { AIModelAction, type Props as AIModelActionProps } from "./ai-model-action";
import { SyncJira } from "./sync-jira";
import type { FC } from "react";

type Props = {
  onChangeRange: CalendarRangeProps['onChange'];
  onFetchEvents: CalendarRangeProps['onClick'];
  onSubmitAIGenerate: AIModelActionProps['onClickAction'];
  isLoading: boolean;
  isLoadingActivites: boolean;
  isSubmitting: boolean;
};

const Actions: FC<Props> = ({
  onChangeRange,
  onFetchEvents,
  isLoading,
  isLoadingActivites,
  onSubmitAIGenerate,
  isSubmitting,
}) => {
  return (
    <div className="flex justify-between">
      <CalendarRange
        onChange={onChangeRange}
        onClick={onFetchEvents}
        loading={isLoading}
      />

      <AIModelAction
        loading={isLoadingActivites}
        onClickAction={onSubmitAIGenerate}
      />

      <SyncJira loading={isSubmitting} />
    </div>
  );
};

export { Actions };
