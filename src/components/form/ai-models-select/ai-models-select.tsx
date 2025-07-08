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
import type { UserSettings } from "@/types";

type Props = UserSettings['ai'];

const AIModelsSelect: FC<Props> = ({ models = {}, selectedModel, selectedProvider } = {}) => {
  const providers = Object.keys(models);
  const selectedValue = (selectedModel && selectedProvider)
    ? JSON.stringify({ model: selectedModel, provider: selectedProvider })
    : undefined;

  return (
    <Select name="aiModel" defaultValue={selectedValue}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a model"/>
      </SelectTrigger>
      <SelectContent position="popper" align="end">
        {(providers.length > 0)
          ? Object.keys(models).map((provider) => (
            <SelectGroup key={provider}>
              <SelectLabel>{models[provider]["title"]}</SelectLabel>
              {models[provider]["models"].map((model) => (
                <SelectItem key={model} value={JSON.stringify({ model, provider })}>{model}</SelectItem>
              ))}
            </SelectGroup>
          ))
          : (
            <SelectGroup>
              <SelectLabel>No items</SelectLabel>
            </SelectGroup>
          )
        }
      </SelectContent>
    </Select>
  );
};

export { AIModelsSelect };
