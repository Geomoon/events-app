"use client";

import * as React from "react";
import { format } from "date-fns";
import {
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { PopoverArrow, PopoverClose } from "@radix-ui/react-popover";
import { MdCancel } from "react-icons/md";

type props = {
  onDateSelected: (date: Date) => void;
  className: string | undefined;
};

export const DatePickerDemo: React.FC<props> = ({
  onDateSelected,
  className,
}) => {
  const [date, setDate] = React.useState<Date>();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onSelect = React.useCallback(
    (date?: Date) => {
      setDate(date);
      if (date) {
        onDateSelected(date);
      }
      setIsOpen(false);
    },
    [onDateSelected]
  );

  const setOpen = () => {
    setIsOpen(true);
  };

  const setClose = () => {
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            `px-6 py-6 outline-none focus:border  hover:bg-card-bg focus:border-primary justify-start text-left bg-card-bg border border-card-bg ${className}`,
            !date && "text-muted-foreground"
          )}
          onClick={setOpen}
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-card-bg text-gray-100 border border-theme-bg shadow-2xl shadow-black">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onSelect}
          initialFocus
        />
        <PopoverClose
          className="flex justify-center items-center w-full border-t border-theme-bg"
          onClick={setClose}
        >
          <button className="flex-1 py-2 text-theme-gray text-sm" type="button">
            Cancel
          </button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};
