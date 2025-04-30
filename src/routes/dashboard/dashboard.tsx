import { useState } from "react";
import { formatISO } from "date-fns";
import {
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
import { AIModelAction, TrackLog, CalendarRange } from "@/components/app/dashboard";
import type { DateRange } from "react-day-picker"

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const actionData = useActionData();
  const isSubmitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";
  const [aiModel, setAiModel] = useState("");
  const [range, setRange] = useState<DateRange|null>(null);

  const events = loaderData.events || [];
  const aiModels = loaderData.aiModels || [];
  const activites = isSubmitting ? [] : actionData?.activites || [];

  const onSubmitAIGenerate = () => {
    if (!aiModel || isSubmitting) return;

    const preparedEvents = events.map((event) => ({
      id: event.id,
      end: event.end,
      start: event.start,
      summary: event.summary,
      description: event.description,
    }));

    const formData = new FormData();
    formData.append("aiModel", aiModel);
    formData.append("events", JSON.stringify(preparedEvents));
    submit(formData, { method: "post" });
  };

  const onFetchEvents = () => {
    if (!range?.from || !range?.to) return;

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("start", formatISO(range.from, { representation: 'date' }));
    newSearchParams.set("end", formatISO(range.to, { representation: 'date' }));

    navigate(`?${newSearchParams.toString()}`, { replace: true });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>TrackWise Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <CalendarRange
            onChange={setRange}
            onClick={onFetchEvents}
            loading={isLoading}
          />

          <AIModelAction
            loading={isSubmitting}
            models={aiModels}
            onChange={setAiModel}
            onClickAction={onSubmitAIGenerate}
          />
        </div>
        <TrackLog activities={activites} events={events} />
      </CardContent>
    </Card>
  );
};

export { Dashboard };
