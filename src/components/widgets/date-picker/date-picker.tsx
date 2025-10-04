import { Button } from '@/components/ui/button/button';
import { cn } from '@/lib/utils';
import { DayPicker } from 'react-day-picker';
import { Separator } from '@/components/ui/separator/separator';
import { useState } from 'react';
import 'react-day-picker/dist/style.css';
("use client");

import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover/popover";

// Simple date formatting function
const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatDateShort = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export interface DatePickerProps {
  /** The selected date */
  date?: Date;
  /** Callback when date is selected */
  // eslint-disable-next-line no-unused-vars
  onSelect?: (date: Date | undefined) => void;
  /** Placeholder text when no date is selected */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Button variant */
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  /** Button size */
  size?: "default" | "sm" | "lg" | "icon";
  /** Custom className for the trigger button */
  className?: string;
}

// Main DatePicker component - matches CalendarPopover style
export function DatePicker({
  date,
  onSelect,
  placeholder = "Pick a date",
  disabled = false,
  variant = "outline",
  size = "default",
  className,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={cn(
            "justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {date ? formatDate(date) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-3 pt-0 space-y-3">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={onSelect}
            classNames={{
              months:
                "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-start pt-1 relative items-center",
              caption_label: "font-medium",
              nav: "space-x-1 flex items-center",
              nav_button: cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
              ),
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell:
                "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] flex-1 text-center",
              row: "flex w-full mt-2",
              cell: "flex-1 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
              ),
              day_selected:
                "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
              day_today: "bg-accent text-accent-foreground",
              day_outside: "text-muted-foreground opacity-50",
              day_disabled: "text-muted-foreground opacity-50",
              day_range_middle:
                "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
            }}
            components={{
              IconLeft: () => <ChevronLeft className="h-4 w-4" />,
              IconRight: () => <ChevronRight className="h-4 w-4" />,
            }}
          />

          <Separator />

          <div className="flex justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onSelect?.(new Date());
                setOpen(false);
              }}
            >
              Today
            </Button>
            <PopoverClose asChild>
              <Button size="sm">Select</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export interface DateRangePickerProps {
  /** The selected date range */
  dateRange?: { from: Date | undefined; to?: Date | undefined };
  /** Callback when date range is selected */
  onSelect?: (
    // eslint-disable-next-line no-unused-vars
    range: { from: Date | undefined; to?: Date | undefined } | undefined
  ) => void;
  /** Placeholder text when no dates are selected */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Button variant */
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  /** Button size */
  size?: "default" | "sm" | "lg" | "icon";
  /** Custom className for the trigger button */
  className?: string;
}

// Date range picker component
export function DateRangePicker({
  dateRange,
  onSelect,
  placeholder = "Pick a date range",
  disabled = false,
  variant = "outline",
  size = "default",
  className,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);

  const formatDateRange = () => {
    if (dateRange?.from) {
      if (dateRange.to) {
        return `${formatDateShort(dateRange.from)} - ${formatDateShort(dateRange.to)}`;
      }
      return formatDateShort(dateRange.from);
    }
    return placeholder;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={cn(
            "justify-start text-left font-normal",
            !dateRange?.from && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {formatDateRange()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-3 pt-0 space-y-3">
          <DayPicker
            mode="range"
            selected={dateRange}
            onSelect={onSelect}
            numberOfMonths={2}
            classNames={{
              months:
                "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-start pt-1 relative items-center",
              caption_label: "font-medium",
              nav: "space-x-1 flex items-center",
              nav_button: cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
              ),
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell:
                "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] flex-1 text-center",
              row: "flex w-full mt-2",
              cell: "flex-1 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
              ),
              day_selected:
                "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
              day_today: "bg-accent text-accent-foreground",
              day_outside: "text-muted-foreground opacity-50",
              day_disabled: "text-muted-foreground opacity-50",
              day_range_middle:
                "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
            }}
            components={{
              IconLeft: () => <ChevronLeft className="h-4 w-4" />,
              IconRight: () => <ChevronRight className="h-4 w-4" />,
            }}
          />

          <Separator />

          <div className="flex justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onSelect?.({ from: new Date(), to: undefined });
                setOpen(false);
              }}
            >
              Today
            </Button>
            <PopoverClose asChild>
              <Button size="sm">Select</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export interface InlineDatePickerProps {
  /** The selected date */
  date?: Date;
  /** Callback when date is selected */
  // eslint-disable-next-line no-unused-vars
  onSelect?: (date: Date | undefined) => void;
  /** Custom className */
  className?: string;
}

// Inline date picker (no popover) - matches the calendar grid style
export function InlineDatePicker({
  date,
  onSelect,
  className,
}: InlineDatePickerProps) {
  return (
    <div className={cn("p-3 pt-0 space-y-3 border rounded-md", className)}>
      <DayPicker
        mode="single"
        selected={date}
        onSelect={onSelect}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-start pt-1 relative items-center",
          caption_label: "font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] flex-1 text-center",
          row: "flex w-full mt-2",
          cell: "flex-1 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn(
            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
          ),
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
        }}
        components={{
          IconLeft: () => <ChevronLeft className="h-4 w-4" />,
          IconRight: () => <ChevronRight className="h-4 w-4" />,
        }}
      />

      <Separator />

      <div className="flex justify-start">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onSelect?.(new Date())}
        >
          Today
        </Button>
      </div>
    </div>
  );
}
