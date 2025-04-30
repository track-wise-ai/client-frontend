import { format } from "date-fns";
import {
  Text,
  TableRow,
  TableCell,
} from "@/components/ui";
import type { FC, ReactNode } from "react";
import type { Event as TEvent } from "@/types";

type Props = {
  event: TEvent;
  activities: ReactNode;
};

const Event: FC<Props> = ({ event, activities }) => {
  const startDate = new Date(event.start.dateTime || event.start.date);
  const endDate = event.end.dateTime ? new Date(event.end.dateTime) : null;

  return (
    <TableRow>
      <TableCell className="font-medium text-right">
        {format(startDate, "iii, dd.MM.yyyy")}<br />
        {format(startDate, "HH:mm")} - {endDate ? format(endDate, "HH:mm") : ".."}
      </TableCell>
      <TableCell className="whitespace-normal wrap-break-word">
        {event.summary}
        {event.description && (
          <Text variant="muted">{event.description}</Text>
        )}
      </TableCell>
      {activities}
    </TableRow>
  )
};

export { Event };
