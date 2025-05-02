import { Event } from "./event"
import type { FC } from "react";
import type { Event as TEvent } from "@/types";

type Props = {
  events: TEvent[];
};

const Events: FC<Props> = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      )
      )}
    </ul>
  );
};

export { Events };
