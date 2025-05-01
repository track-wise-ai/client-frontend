export type AIModel = {
  title: string,
  models: string[],
};

export type AIModels = Record<string, AIModel>;

export type Event = {
  id: string;
  start: { dateTime?: string, date: string };
  end: { dateTime?: string, date: string };
  summary: string;
  description: string;
};

export type Activitie = {
  date: string;
  summary: string;
};

export type GoogleCalendar = {
  id: string;
  summary: string;
};

export type GoogleCalendarSettings = {
  connect: boolean;
  authUrl: string;
  calendars: GoogleCalendar[];
  selectedCalendars: Array<GoogleCalendar["id"]>;
};
