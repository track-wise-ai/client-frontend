import { Input, Label } from "@/components/ui";
import type { FC, ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  id: string;
  label?: string;
  children?: React.ReactNode;
};

const FormField: FC<Props> = ({
  id,
  label,
  type = "text",
  placeholder = "enter the value",
  children,
  ...props
}) => {
  return (
    <div className="grid gap-1 mb-3">
      {label && (
        <Label htmlFor={id} className="text-xs text-muted-foreground">{label}</Label>
      )}
      {children ? children : (
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
};

export { FormField };
