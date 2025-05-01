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
  authUrl: string;
  calendars: GoogleCalendar[];
};

export type UserSettings = {
  google: {
    connect: boolean;
    selectedCalendars: Array<GoogleCalendar["id"]>;
  },
  jira: {
    url: string;
    apiKey: string;
    issueKey: string;
  },
};

export type Settings = {
  google: GoogleCalendarSettings & UserSettings["google"];
  jira: UserSettings["jira"];
};
