import { format } from "date-fns";
import { Text } from "@/components/ui";
import type { FC } from "react";
import type { Event as TEvent } from "@/types";

type Props = {
  event: TEvent;
};

const Event: FC<Props> = ({ event }) => {
  const startDate = new Date(event.start.dateTime || event.start.date);
  const endDate = event.end.dateTime ? new Date(event.end.dateTime) : null;

  return (
    <>
      <Text variant="muted" className="my-0">
        {format(startDate, "iii, dd MMM")},{" "}
        {format(startDate, "HH:mm")} - {endDate ? format(endDate, "HH:mm") : ".."}
      </Text>
      <Text className="text-wrap text-clip">{event.summary}</Text>
      {event.description && (
        <Text variant="muted" className="overflow-hidden text-ellipsis">{event.description}</Text>
      )}
    </>
  )
};

export { Event };
