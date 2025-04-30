import { useState } from "react";
import { useSubmit, useActionData, useLoaderData, useNavigation } from "react-router";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui";
import { AIModelAction, TrackLog } from "@/components/app/dashboard";

const Dashboard = () => {
  const { events, aiModels } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const actionData = useActionData();
  const isSubmitting = navigation.state === "submitting";
  const [aiModel, setAiModel] = useState("");

  let activites = actionData?.activites || [];

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>TrackWise Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <AIModelAction
          loading={isSubmitting}
          models={aiModels}
          onChange={setAiModel}
          onClickAction={onSubmitAIGenerate}
        />
        <TrackLog activities={activites} events={events} />
      </CardContent>
    </Card>
  );
};

export { Dashboard };
