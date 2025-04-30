"use client"

import * as React from "react"
import { format, startOfWeek, endOfWeek } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type Value = {
  from: Date
  to: Date
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
  defaultValue?: Partial<Value>;
  onChange?: (value: DateRange | undefined) => void
};

export function DatePickerWithRange({
  className, onChange, defaultValue,
}: Props) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: defaultValue?.from || startOfWeek(new Date(), { weekStartsOn: 1 }), // Monday as start of week,
    to: defaultValue?.to || endOfWeek(new Date(), { weekStartsOn: 1 }), // Sunday as end of week,
  });

  React.useEffect(() => {
    if (onChange) {
      onChange(date);
    }
  }, [date, onChange]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
