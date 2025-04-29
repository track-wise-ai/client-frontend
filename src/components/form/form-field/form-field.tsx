import { Input, Label } from "@/components/ui";
import type { FC, ComponentProps } from "react";

type Props = {
  id: string;
  label: string;
  type: ComponentProps<"input">["type"];
  placeholder?: ComponentProps<"input">["placeholder"];
};

const FormField: FC<Props> = ({
  id,
  label,
  type = "text",
  placeholder = "enter the value",
  ...props
}) => {
  return (
    <div className="grid gap-3">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export { FormField };
