import { Fragment } from "react";
import { Text, Textarea } from "@/components/ui";
import type { FC } from "react";
import type { Activity as TActivity } from "@/types";

type Props = {
  activity: TActivity
}

const Activity: FC<Props> = ({ activity }) => {
  return (
    <Fragment key={activity.date}>
      <Text weight="bold">{activity.date}</Text>
      <Textarea name={activity.date} defaultValue={activity.summary} />
    </Fragment>
  );
};

export { Activity };
