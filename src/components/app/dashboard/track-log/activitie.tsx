import { Fragment } from "react";
import { Text, Textarea } from "@/components/ui";
import type { FC } from "react";
import type { Activitie as TActivitie } from "@/types";

type Props = {
  activitie: TActivitie
}

const Activitie: FC<Props> = ({ activitie }) => {
  return (
    <Fragment key={activitie.date}>
      <Text weight="bold">{activitie.date}</Text>
      <Textarea defaultValue={activitie.summary} />
    </Fragment>
  );
};

export { Activitie };
