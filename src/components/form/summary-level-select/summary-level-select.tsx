import type { UserSettings } from "@/types";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui";
import { capitalize } from "@/lib";

const SummaryLevelSelect = ({
  summaryLevels,
  selectedSummaryLevel,
}: UserSettings["ai"] = {}) => (
  <Select name="summaryLevel" defaultValue={selectedSummaryLevel}>
    <SelectTrigger className="w-[280px]">
      <SelectValue placeholder="Select a model"/>
    </SelectTrigger>
    <SelectContent position="popper" align="end">
      {Object.keys(summaryLevels ?? {}).map((level) => (
        <SelectItem key={level} value={level}>
          {capitalize(level)}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export { SummaryLevelSelect };
