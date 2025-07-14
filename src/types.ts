export type User = {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

export type AIModel = {
  title: string,
  models: string[],
};

export type AIModels = Record<string, AIModel>;

export type Event = {
  id: string;
  eventType: string;
  start: { dateTime?: string, date: string };
  end: { dateTime?: string, date: string };
  summary: string;
  description: string;
};

export type Activity = {
  date: string;
  summary: string;
};

export type GoogleCalendar = {
  id: string;
  summary: string;
};

export type GoogleCalendarSettings = {
  authUrl?: string;
  calendars?: GoogleCalendar[];
};

export type UserSettings = Partial<{
  google: {
    connect?: boolean;
    selectedCalendars?: Array<GoogleCalendar["id"]>;
  },
  jira: {
    url?: string;
    issueKey?: string;
    authType?: "bearer" | "basic";
    email?: string;
    apiKey?: string;
  },
  ai: {
    models?: AIModels;
    selectedModel?: string;
    selectedProvider?: string;
    fineTuning?: string;
  },
}>;

export type Settings = Partial<{
  google: GoogleCalendarSettings & UserSettings["google"];
  jira: UserSettings["jira"];
  ai: UserSettings["ai"];
}>;

export type DateKey = string; // YYYY-MM-DD

export type TrackItem = {
  date: Date;
  events: Event[];
  activity: Activity|null;
};

export type Track = Record<DateKey, TrackItem>;
