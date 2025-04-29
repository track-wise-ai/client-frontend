import * as React from "react"
import { X, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

type Option = {
  value: string
  label: string
}

type MultiSelectProps = {
  name: string // Required for form submission
  options: Option[]
  defaultSelected?: string[]
  placeholder?: string
  className?: string
  disabled?: boolean
}

export function MultiSelect({
  options,
  defaultSelected = [],
  name,
  placeholder = "Select options...",
  className,
  disabled = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<Option[]>(() => {
    // Initialize from defaultSelected values
    return options.filter(option => defaultSelected.includes(option.value))
  })

  const handleSelect = (option: Option) => {
    const isSelected = selected.some(item => item.value === option.value)
    if (isSelected) {
      setSelected(selected.filter(item => item.value !== option.value))
    } else {
      setSelected([...selected, option])
    }
  }

  const handleRemove = (option: Option) => {
    setSelected(selected.filter(item => item.value !== option.value))
  }

  return (
    <div className="relative">
      {/* Hidden inputs for form submission */}
      {selected.map(option => (
        <input
          key={option.value}
          type="hidden"
          name={name}
          value={option.value}
        />
      ))}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button" // Important: don't submit the form when clicking this button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between",
              selected.length > 0 ? "h-auto min-h-9 py-1" : "h-9",
              className
            )}
            disabled={disabled}
          >
            <div className="flex flex-wrap gap-1">
              {selected.length > 0 ? (
                selected.map(option => (
                  <Badge
                    key={option.value}
                    variant="secondary"
                    className="flex items-center gap-1 px-1.5"
                  >
                    {option.label}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemove(option)
                      }}
                    />
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground">{placeholder}</span>
              )}
            </div>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
          <Command>
            <CommandInput placeholder="Search options..." className="h-9" />
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup className="max-h-64 overflow-auto">
              {options.map(option => {
                const isSelected = selected.some(item => item.value === option.value)
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => handleSelect(option)}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-4 w-4 items-center justify-center rounded-sm border border-primary">
                      {isSelected && <div className="h-2 w-2 rounded-sm bg-primary" />}
                    </div>
                    {option.label}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
