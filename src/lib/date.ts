import { startOfWeek, endOfWeek } from "date-fns"

// Monday as start of week,
const getStartOfWeek = () => startOfWeek(new Date(), { weekStartsOn: 1 });

// Sunday as end of week,
const getEndOfWeek = () => endOfWeek(new Date(), { weekStartsOn: 1 });

export { getStartOfWeek, getEndOfWeek };
