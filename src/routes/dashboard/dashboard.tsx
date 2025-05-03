import { useState } from "react";
import { formatISO } from "date-fns";
import {
  Form,
  useSubmit,
  useNavigate,
  useActionData,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui";
import { AIModelAction, TrackLog, CalendarRange, SyncJira } from "@/components/app/dashboard";
import { useActivities } from "./hooks";
import { normalizeTrack } from "./utils";
import type { DateRange } from "react-day-picker";
import type { Event } from "@/types";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const actionData = useActionData();
  const isSubmitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";
  const { loading: isLoadingActivites, activites, generateActivites } = useActivities();
  const [aiModel, setAiModel] = useState("");
  const [range, setRange] = useState<DateRange|null>(null);
  const events = loaderData?.events || [];
  const aiModels = loaderData?.aiModels || [];
  const track = normalizeTrack(events, activites);

  const onSubmitAIGenerate = () => {
    if (!aiModel || isLoadingActivites) return;

    const preparedEvents = events.map((event: Event) => ({
      id: event.id,
      end: event.end,
      start: event.start,
      summary: event.summary,
      description: event.description,
    }));

    generateActivites(aiModel, preparedEvents);
  };

  const onFetchEvents = () => {
    if (!range?.from || !range?.to) return;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("start", formatISO(range.from, { representation: 'date' }));
    newSearchParams.set("end", formatISO(range.to, { representation: 'date' }));

    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };

  const onSubmitSyncJira = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const selectedDateKeys = formData.getAll("selectedActivities");
    const trackLogs = activites
      // filter activites by selected dates
      .filter((activity) => selectedDateKeys.includes(activity.date))
      // map selected activities, which were updated
      .map((activity) => ({
        date: activity.date,
        summary: formData.get(activity.date),
      }));

    formData.append("trackLog", JSON.stringify(trackLogs));

    submit(formData, { method: "post" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>TrackWise Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Form onSubmit={onSubmitSyncJira}>
          <div className="flex justify-between">
            <CalendarRange
              onChange={setRange}
              onClick={onFetchEvents}
              loading={isLoading}
            />

            <AIModelAction
              loading={isLoadingActivites}
              models={aiModels}
              onChange={setAiModel}
              onClickAction={onSubmitAIGenerate}
            />

            <SyncJira loading={isSubmitting} />
          </div>
          <TrackLog track={track} />
        </Form>
      </CardContent>
    </Card>
  );
};

export { Dashboard };
