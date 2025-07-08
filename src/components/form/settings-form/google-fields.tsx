import { Earth, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui";
import { MultiSelect } from "@/components/form";
import type { FC } from "react";
import type { Settings } from "@/types";

type Props = { google?: Settings['google'] };

const ConnectService: FC<{ connect: boolean, link: string }> = ({ connect, link }) => {
  return connect ? (
    <Button type="button" asChild variant="success" disabled>
      <a href={link ?? ""} target="_blank" aria-disabled><CheckCheck /> Connected</a>
    </Button>
  ) : (
    <Button type="button" asChild variant="destructive">
      <a href={link ?? ""} target="_blank"><Earth /> Connect</a>
    </Button>
  )
};

const GoogleFields: FC<Props> = ({ google = {} }) => {
  const {
    connect = false,
    authUrl = '',
    calendars = [],
    selectedCalendars = [],
  } = google;
  const options = (calendars || []).map((calendar) => ({
    value: calendar.id,
    label: calendar.summary,
  }));

  return (
    <section className="flex flex-col items-start gap-1">
      <ConnectService connect={connect} link={authUrl} />
      <MultiSelect
        name="googleCalendars"
        options={options}
        defaultSelected={selectedCalendars || []}
      />
    </section>
  );
};

export { GoogleFields };
