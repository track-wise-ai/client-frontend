import {
  Select,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from "@/components/ui";
import type { FC } from "react";
import type { AIModels } from "@/types";

type Props = {
  models: AIModels;
  selectedModel: string;
};

const AIModelsSelect: FC<Props> = ({ models, selectedModel }) => {
  return (
    <Select name="aiModel" defaultValue={selectedModel}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a model"/>
      </SelectTrigger>
      <SelectContent position="popper" align="end">
        {Object.keys(models).map((provider) => (
          <SelectGroup key={provider}>
            <SelectLabel>{models[provider]["title"]}</SelectLabel>
            {models[provider]["models"].map((model) => (
              <SelectItem key={model} value={model}>{model}</SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};

export { AIModelsSelect };
