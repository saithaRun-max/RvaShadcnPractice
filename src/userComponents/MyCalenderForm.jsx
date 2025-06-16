"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
function formatDate(date) {
  if (!date) {
    return "Birth Date";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });
}
function isValidDate(date) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

const MyCalenderForm = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date("2025-03-01"));
  const [month, setMonth] = useState("");
  const [value, setValue] = useState(formatDate(date));
  

  console.log(value);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Birth Date
        </Label>
        <div className="relative flex gap-2">
          <Input
            id="date"
            value={value}
            placeholder="June 01, 2025"
            className="bg-background pr-4 w-40"
            onChange={(e) => {
              const date = new Date(e.target.value);
              setValue(e.target.value);
              if (isValidDate(date)) {
                setDate(date);
                setMonth(date);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setOpen(true);
              }
            }}
          />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id="date-picker"
                variant="ghost"
                className="absolute top-5 right-1 size-7 -translate-y-1/2"
              >
                <CalendarIcon className="size-3.5" />
                {!date && <span className="sr-only">Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                month={month}
                // animate
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setDate(date);
                  setValue(formatDate(date));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <span className="m-8">{value}</span>
    </div>
  );
};

export default MyCalenderForm;
