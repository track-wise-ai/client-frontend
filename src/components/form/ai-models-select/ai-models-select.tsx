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

type Model = {
  title: string,
  models: string[],
};
type Props = {
  models: Record<string, Model>;
  onChange: (value: string) => void;
};

const AIModelsSelect: FC<Props> = ({ models, onChange }) => {
  return (
    <Select name="aiModel" onValueChange={onChange}>
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
