import { formatISO } from 'date-fns';
import { toast } from "sonner";
import { createSearchParams } from 'react-router';
import { api } from "@/api";
import { DEFAULT_ERROR } from '@/constants';
import { getQueryParams, getEndOfWeek, getStartOfWeek } from '@/lib';
import type { LoaderFunction } from "react-router";
import type { Event } from "@/types";

const loader: LoaderFunction = async ({ request }) => {
  try {
    const params = getQueryParams(request.url);
    const start = params?.start || formatISO(getStartOfWeek(), { representation: 'date' });
    const end = params?.end || formatISO(getEndOfWeek(), { representation: 'date' });

    const { data: googleEvents } = await api.get(`/google/events?${createSearchParams({start, end })}`);

    return {
      events: (googleEvents ?? []).filter(({ eventType }: Event) => eventType !== "birthday"),
    };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : DEFAULT_ERROR;
    console.error(errorMsg);
    toast.error(errorMsg);
    throw error;
  }
};

export { loader };
