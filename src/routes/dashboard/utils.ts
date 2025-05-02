import { format } from "date-fns";
import type { Event, Activity, Track, DateKey } from "@/types";

type NormalizeTrack = (
  events: Event[],
  activites: Activity[]
) => Track;

const DATE_KEY_PATTERN = "yyyy-MM-dd";

const normalizeTrack: NormalizeTrack = (events, activites) => {
  const groupedEvents = events.reduce((acc, event) => {
    const startDate = new Date(event.start.dateTime || event.start.date);
    const dateKey: DateKey = format(startDate, DATE_KEY_PATTERN);

    if (!acc[dateKey]) {
      acc[dateKey] = {
        date: startDate,
        activity: null,
        events: [],
      }
    }

    acc[dateKey].events.push(event);

    return acc;
  }, {});

  activites.forEach((activity) => {
    const dateKey: DateKey = activity.date;
    groupedEvents[dateKey].activity = activity;
  });

  return groupedEvents;
};

export { normalizeTrack };
