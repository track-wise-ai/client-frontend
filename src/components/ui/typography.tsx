// components/ui/typography.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const commonVariants = {
  intent: {
    default: "",
    error: "text-destructive",
    warning: "text-amber-500 dark:text-amber-400",
    success: "text-green-600 dark:text-green-400",
    info: "text-blue-600 dark:text-blue-400",
  }
};

// Heading variants using cva
const headingVariants = cva(
  "font-semibold tracking-tight",
  {
    variants: {
      size: {
        h1: "text-4xl lg:text-5xl scroll-m-20 font-extrabold",
        h2: "text-3xl scroll-m-20 first:mt-0",
        h3: "text-2xl scroll-m-20",
        h4: "text-xl scroll-m-20",
        h5: "text-lg scroll-m-20",
        h6: "text-base scroll-m-20",
      },
      ...commonVariants,
    },
    defaultVariants: {
      size: "h1",
      intent: "default",
    },
  }
)

// Text variants using cva
const textVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "leading-7",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",
        blockquote: "mt-6 border-l-2 pl-6 italic",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      textStyle: {
        normal: "",
        italic: "italic",
      },
      ...commonVariants,
    },
    defaultVariants: {
      variant: "default",
      weight: "normal",
      textStyle: "normal",
      intent: "default",
    },
  }
)

// Heading component
interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

function Heading({ className, size, intent, as, asChild = false, ...props }: HeadingProps) {
  const Comp = asChild ? Slot : as || size || "h1"
  return (
    <Comp
      className={cn(headingVariants({ size, intent, className }))}
      data-slot="heading"
      {...props}
    />
  )
}

// Text component
interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof textVariants> {
  asChild?: boolean
  as?: React.ElementType
}

function Text({
  className,
  variant,
  weight,
  textStyle,
  intent,
  as,
  asChild = false,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : as || "p"
  return (
    <Comp
      className={cn(textVariants({ variant, weight, textStyle, intent, className }))}
      data-slot="text"
      {...props}
    />
  )
}

// Inline components
function InlineCode(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
        props.className
      )}
      {...props}
    />
  )
}

export { Text, Heading, InlineCode }
