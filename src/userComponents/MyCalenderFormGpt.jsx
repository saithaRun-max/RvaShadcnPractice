"use client";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getDate, getMonth, getYear } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MyCalenderFormGpt = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const startYear = getYear(new Date()) - 100;
  const endYear = getYear(new Date());

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );

  // console.log(endYear);

  const handleMonthChange = (month) => {
    const newDate = setMonth(date, months.indexOf(month));
    setDate(newDate);
  };

  const handleyearChange = (year) => {
    const newYear = setYear(date, year);
    setDate(newYear);
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-32 justify-between font-normal"
            >
              {date ? getDate(date) : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <div>
              <Select
                // onValueChange={() => handleMonthChange()}
                value={months[getMonth(date)]}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem value={month} key={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                onValueChange={(e) => console.log(e)}
                value={getYear(date)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem value={year} key={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown-buttons"
              fromYear={1960}
              toYear={2030}
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor="time" className="px-1">
          Time
        </Label>
        <Input
          type="time"
          id="time"
          step="1"
          defaultValue="10:30:00"
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  );
};

export default MyCalenderFormGpt;
