import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  Checkbox,
} from "@/components/ui";
import { Events } from "./events";
import { Activity } from "./activity";
import type { FC } from "react";
import type { Track } from "@/types";

type Props = {
  track: Track;
};

const TrackLog: FC<Props> = ({ track }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8"></TableHead>
          <TableHead className="w-1/2">Google Calendar</TableHead>
          <TableHead className="w-1/2">AI</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(track).map((dateKey) => {
          const { activity, events } = track[dateKey];
          return (
            <TableRow key={dateKey}>
              <TableCell className="align-top">
                <Checkbox name="selectedActivities" defaultChecked value={dateKey}/>
              </TableCell>
              <TableCell><Events events={events} /></TableCell>
              <TableCell>
                {activity && <Activity activity={activity} />}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  );
};

export { TrackLog };
