"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-sans font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 active:scale-[0.98]",
        secondary:
          "bg-secondary-500 text-neutral-900 hover:bg-secondary-600 shadow-lg shadow-secondary-500/20 hover:shadow-secondary-500/30 active:scale-[0.98]",
        outline:
          "border border-white/20 text-white hover:bg-white/10 active:scale-[0.98]",
        ghost:
          "text-neutral-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
        dark: "bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 active:scale-[0.98]",
        link: "text-primary-400 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs gap-1.5",
        md: "h-11 px-6 text-sm gap-2",
        lg: "h-13 px-8 text-base gap-2.5",
        xl: "h-14 px-10 text-base gap-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
