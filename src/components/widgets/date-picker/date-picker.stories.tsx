import { DatePicker, DateRangePicker, InlineDatePicker } from './date-picker';
import { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof DatePicker> = {
  title: "Widgets/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A comprehensive date picker widget built with react-day-picker, matching the existing Calendar Popover design. Provides single date, date range, and inline variants.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic date picker story
export const Default: Story = {
  args: {
    placeholder: "Pick a date",
  },
};

// Interactive playground
export const Playground = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Interactive Date Picker
          </h3>
          <DatePicker
            date={date}
            onSelect={setDate}
            placeholder="Select your date"
          />
          {date && (
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {date.toDateString()}
            </p>
          )}
        </div>
      </div>
    );
  },
};

// Different variants
export const Variants = {
  render: () => {
    const [date1, setDate1] = useState<Date | undefined>();
    const [date2, setDate2] = useState<Date | undefined>();
    const [date3, setDate3] = useState<Date | undefined>();
    const [date4, setDate4] = useState<Date | undefined>();

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="font-medium">Default</h4>
          <DatePicker
            date={date1}
            onSelect={setDate1}
            placeholder="Pick a date"
          />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Secondary</h4>
          <DatePicker
            variant="secondary"
            date={date2}
            onSelect={setDate2}
            placeholder="Pick a date"
          />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Ghost</h4>
          <DatePicker
            variant="ghost"
            date={date3}
            onSelect={setDate3}
            placeholder="Pick a date"
          />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Small Size</h4>
          <DatePicker
            size="sm"
            date={date4}
            onSelect={setDate4}
            placeholder="Pick a date"
          />
        </div>
      </div>
    );
  },
};

// Date range picker
export const DateRangePickerStory = {
  render: () => {
    const [dateRange, setDateRange] = useState<
      | {
          from: Date | undefined;
          to?: Date | undefined;
        }
      | undefined
    >();

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Date Range Picker</h3>
          <DateRangePicker
            dateRange={dateRange}
            onSelect={setDateRange}
            placeholder="Select date range"
          />
          {dateRange?.from && (
            <div className="text-sm text-muted-foreground mt-2 space-y-1">
              <p>From: {dateRange.from.toDateString()}</p>
              {dateRange.to && <p>To: {dateRange.to.toDateString()}</p>}
            </div>
          )}
        </div>
      </div>
    );
  },
};

// Inline date picker (no popover)
export const InlineDatePickerStory = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Inline Date Picker</h3>
          <InlineDatePicker date={date} onSelect={setDate} />
          {date && (
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {date.toDateString()}
            </p>
          )}
        </div>
      </div>
    );
  },
};

// Form integration example
export const FormIntegration = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<
      | {
          from: Date | undefined;
          to?: Date | undefined;
        }
      | undefined
    >();

    return (
      <div className="max-w-md space-y-6 p-6 border rounded-lg">
        <h3 className="text-lg font-semibold">Event Planning Form</h3>

        <div className="space-y-2">
          <label className="text-sm font-medium">Event Start Date</label>
          <DatePicker
            date={startDate}
            onSelect={setStartDate}
            placeholder="Select start date"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Event End Date</label>
          <DatePicker
            date={endDate}
            onSelect={setEndDate}
            placeholder="Select end date"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Booking Period</label>
          <DateRangePicker
            dateRange={dateRange}
            onSelect={setDateRange}
            placeholder="Select booking period"
          />
        </div>

        {(startDate || endDate || dateRange) && (
          <div className="p-4 bg-muted rounded">
            <h4 className="font-medium mb-2">Summary</h4>
            <div className="text-sm space-y-1">
              {startDate && <p>Start: {startDate.toDateString()}</p>}
              {endDate && <p>End: {endDate.toDateString()}</p>}
              {dateRange?.from && (
                <p>
                  Booking: {dateRange.from.toDateString()}
                  {dateRange.to && ` - ${dateRange.to.toDateString()}`}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  },
};

// States demonstration
export const States = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="font-medium">Normal</h4>
          <DatePicker
            date={date}
            onSelect={setDate}
            placeholder="Pick a date"
          />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Disabled</h4>
          <DatePicker
            disabled
            date={date}
            onSelect={setDate}
            placeholder="Pick a date"
          />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">With Pre-selected Date</h4>
          <DatePicker
            date={new Date()}
            onSelect={() => {}}
            placeholder="Pick a date"
          />
        </div>
      </div>
    );
  },
};
