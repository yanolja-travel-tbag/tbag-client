import { ComponentProps } from "react";
import { cn } from "@/lib/utils.ts";

interface DividerProps extends ComponentProps<"div"> {}

const Divider = (props: DividerProps) => {
  return (
    <div
      className={cn(
        "w-full h-0.5 border border-y-background-deep",
        props.className
      )}
    />
  );
};

export default Divider;
