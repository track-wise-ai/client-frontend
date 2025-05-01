import { Input, Label } from "@/components/ui";
import type { FC, ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  id: string;
  label: string;
};

const FormField: FC<Props> = ({
  id,
  label,
  type = "text",
  placeholder = "enter the value",
  ...props
}) => {
  return (
    <div className="grid gap-1 mb-3">
      <Label htmlFor={id} className="text-xs text-muted-foreground">{label}</Label>
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
