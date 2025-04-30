import { useState, Fragment } from "react";
import { format } from "date-fns";
import { Play, LoaderCircle } from "lucide-react";
import { useSubmit, useActionData, useLoaderData, useNavigation } from "react-router";
import {
  Text,
  Card,
  Table,
  Button,
  Textarea,
  TableRow,
  TableBody,
  TableHead,
  TableHeader,
  TableCell,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui";
import { AIModelsSelect } from "@/components/form";

const Dashboard = () => {
  const { events, aiModels } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const actionData = useActionData();
  const isSubmitting = navigation.state === "submitting";
  const [aiModel, setAiModel] = useState("");

  let generatedSumary = [];

  try {
    const rawJson = (actionData?.choices || [])[0]?.message?.content || "[]";
    const cleaned = rawJson.match(/\[[\s\S]*]/)?.[0] || "[]";

    generatedSumary = JSON.parse(cleaned);
  } catch (error) {
    // nothing todo
  }

  const activities = generatedSumary.map(({ date, summary }) => (
    <Fragment key={date}>
      <Text weight="bold">{date}</Text>
      <Textarea defaultValue={summary}/>
    </Fragment>
  ));

  const onSubmitAIGenerate = (e) => {
    e.preventDefault();

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
          <div className="flex justify-end mb-6 gap-3">
            <AIModelsSelect models={aiModels} onChange={setAiModel}/>
            <Button type="button" variant="outline" disabled={isSubmitting} onClick={onSubmitAIGenerate}>
              {isSubmitting
                ? <LoaderCircle className="animate-spin" />
                : <Play/>
              }
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">Date:</TableHead>
                <TableHead className="w-80">Google Calendar</TableHead>
                <TableHead>AI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(events ?? []).map((event, idx) => {
                const startDate = new Date(event.start.dateTime || event.start.date);
                const endDate = event.end.dateTime ? new Date(event.end.dateTime) : null;

                return (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium text-right">
                      {format(startDate, "iii, dd.MM.yyyy")}<br/>
                      {format(startDate, "HH:mm")} - {endDate ? format(endDate, "HH:mm") : ".."}
                    </TableCell>
                    <TableCell>
                      {event.summary}
                      {event.description && (
                        <Text variant="muted">{event.description}</Text>
                      )}
                    </TableCell>
                    {(idx === 0) && (
                      <TableCell rowSpan={events.length} style={{ verticalAlign: "top" }}>
                        {activities}
                      </TableCell>
                    )}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
      </CardContent>
    </Card>
  );
};

export { Dashboard };
