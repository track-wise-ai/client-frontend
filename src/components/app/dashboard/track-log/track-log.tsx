import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui";
import { Event } from "./event";
import { Activitie } from "./activitie";
import type { FC } from "react";
import type { Event as TEvent, Activitie as TActivitie } from "@/types";

type Props = {
  events: TEvent[];
  activities: TActivitie[];
};

const TrackLog: FC<Props> = ({ events, activities }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-32">Date:</TableHead>
          <TableHead className="w-80">Google Calendar</TableHead>
          <TableHead>AI</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(events ?? []).map((event, idx) => (
          <Event key={idx} event={event} activities={
            (idx === 0) && (
              <TableCell rowSpan={events.length} style={{ verticalAlign: "top" }}>
                {activities.map((activitie) => (
                  <Activitie key={activitie.date} activitie={activitie}/>
                ))}
              </TableCell>
            )
          } />
        ))}
      </TableBody>
    </Table>
  );
};

export { TrackLog };
