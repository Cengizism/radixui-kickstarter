import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A control that allows the user to toggle between checked and not checked.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // State Props
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
      description:
        "The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.",
      table: {
        category: "State Props",
        type: { summary: "boolean | 'indeterminate'" },
        defaultValue: { summary: "undefined" },
      },
    },
    defaultChecked: {
      control: "select",
      options: [true, false, "indeterminate"],
      description:
        "The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.",
      table: {
        category: "State Props",
        type: { summary: "boolean | 'indeterminate'" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the checkbox.",
      table: {
        category: "State Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description:
        "When true, indicates that the user must check the checkbox before the owning form can be submitted.",
      table: {
        category: "State Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Form Props
    name: {
      control: "text",
      description:
        "The name of the checkbox. Submitted with its owning form as part of a name/value pair.",
      table: {
        category: "Form Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    value: {
      control: "text",
      description: "The value given as data when submitted with a name.",
      table: {
        category: "Form Props",
        type: { summary: "string" },
        defaultValue: { summary: "on" },
      },
    },
    id: {
      control: "text",
      description:
        "The id attribute of the checkbox for labeling and accessibility.",
      table: {
        category: "Form Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Appearance Props
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description:
        "The size variant of the checkbox. Controls dimensions and spacing.",
      table: {
        category: "Appearance Props",
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    variant: {
      control: "select",
      options: ["default", "destructive", "outline"],
      description:
        "The visual variant of the checkbox. Controls color scheme and styling.",
      table: {
        category: "Appearance Props",
        type: { summary: '"default" | "destructive" | "outline"' },
        defaultValue: { summary: '"default"' },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the checkbox.",
      table: {
        category: "Appearance Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Content Props
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Event Handlers
    onCheckedChange: {
      action: "onCheckedChange",
      description:
        "Event handler called when the checked state of the checkbox changes.",
      table: {
        category: "Event Handlers",
        type: { summary: "(checked: boolean | 'indeterminate') => void" },
        defaultValue: { summary: "undefined" },
      },
    },
    onFocus: {
      action: "onFocus",
      description: "Event handler called when the checkbox receives focus.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.FocusEvent<HTMLButtonElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onBlur: {
      action: "onBlur",
      description: "Event handler called when the checkbox loses focus.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.FocusEvent<HTMLButtonElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="default" defaultChecked />
      <label
        htmlFor="default"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

// Interactive playground
export const Playground: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
    required: false,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="playground" {...args} />
      <label
        htmlFor="playground"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

// Indeterminate state
export const Indeterminate = {
  render: function IndeterminateExample() {
    const [checked, setChecked] = useState<boolean | "indeterminate">(
      "indeterminate"
    );

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="indeterminate-checkbox"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <label
            htmlFor="indeterminate-checkbox"
            className="text-sm font-medium"
          >
            Indeterminate checkbox: {String(checked)}
          </label>
        </div>
        <Button
          onClick={() =>
            setChecked((prev) =>
              prev === "indeterminate" ? false : "indeterminate"
            )
          }
          variant="outline"
          size="sm"
        >
          Toggle indeterminate
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Controlled checkbox with indeterminate state, as demonstrated in the official RadixUI docs.",
      },
    },
  },
};

// Select all pattern
export const SelectAllPattern = {
  render: function SelectAllExample() {
    const [todoItems, setTodoItems] = useState([
      { id: 1, text: "Review pull request", checked: true },
      { id: 2, text: "Update documentation", checked: false },
      { id: 3, text: "Fix bug in authentication", checked: true },
      { id: 4, text: "Deploy to staging", checked: false },
    ]);

    const checkedCount = todoItems.filter((item) => item.checked).length;
    const allChecked = checkedCount === todoItems.length;
    const someChecked = checkedCount > 0 && checkedCount < todoItems.length;

    const handleSelectAll = (value: boolean | "indeterminate") => {
      if (value === true) {
        setTodoItems((items) =>
          items.map((item) => ({ ...item, checked: true }))
        );
      } else {
        setTodoItems((items) =>
          items.map((item) => ({ ...item, checked: false }))
        );
      }
    };

    const handleItemToggle = (id: number) => {
      setTodoItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      );
    };

    return (
      <div className="w-80 space-y-4">
        <div className="flex items-center space-x-2 pb-2 border-b">
          <Checkbox
            id="select-all"
            checked={allChecked ? true : someChecked ? "indeterminate" : false}
            onCheckedChange={handleSelectAll}
          />
          <label htmlFor="select-all" className="text-sm font-semibold">
            Select All ({checkedCount}/{todoItems.length})
          </label>
        </div>

        <div className="space-y-3">
          {todoItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 ml-4">
              <Checkbox
                id={`todo-${item.id}`}
                checked={item.checked}
                onCheckedChange={() => handleItemToggle(item.id)}
              />
              <label
                htmlFor={`todo-${item.id}`}
                className={`text-sm ${item.checked ? "line-through text-muted-foreground" : ""}`}
              >
                {item.text}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Common pattern using indeterminate state for "select all" functionality.',
      },
    },
  },
};

// Form integration
export const FormIntegration = {
  render: () => (
    <Form className="space-y-6 w-80">
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold">
          Newsletter Preferences
        </legend>

        <div className="flex items-center space-x-2">
          <Checkbox id="weekly-newsletter" name="newsletter" value="weekly" />
          <label htmlFor="weekly-newsletter" className="text-sm">
            Weekly newsletter
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="product-updates" name="newsletter" value="product" />
          <label htmlFor="product-updates" className="text-sm">
            Product updates
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="marketing-emails" name="newsletter" value="marketing" />
          <label htmlFor="marketing-emails" className="text-sm">
            Marketing emails
          </label>
        </div>
      </fieldset>

      <fieldset className="space-y-3 pt-4 border-t">
        <legend className="text-sm font-semibold">Account Settings</legend>

        <div className="flex items-center space-x-2">
          <Checkbox id="two-factor" name="security" value="2fa" />
          <label htmlFor="two-factor" className="text-sm">
            Enable two-factor authentication
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="login-notifications"
            name="security"
            value="login-alerts"
            defaultChecked
          />
          <label htmlFor="login-notifications" className="text-sm">
            Login notifications
          </label>
        </div>
      </fieldset>

      <div className="flex items-center space-x-2 pt-4 border-t">
        <Checkbox
          id="terms-agreement"
          name="agreement"
          value="terms"
          required
        />
        <label htmlFor="terms-agreement" className="text-sm">
          I agree to the{" "}
          <span className="text-primary underline">terms and conditions</span> *
        </label>
      </div>

      <Button type="submit" className="w-full">
        Save Preferences
      </Button>
    </Form>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkboxes properly integrated with forms and validation.",
      },
    },
  },
};

// Controlled checkbox example
export const ControlledCheckbox = {
  render: function ControlledExample() {
    const [checked, setChecked] = useState<boolean | "indeterminate">(false);
    const [disabled, setDisabled] = useState(false);

    return (
      <div className="space-y-4 w-full max-w-md">
        <div className="space-y-2">
          <label className="text-sm font-medium">Controls:</label>
          <div className="flex gap-2">
            <Button
              onClick={() => setChecked(false)}
              variant="outline"
              size="sm"
              disabled={disabled}
            >
              Uncheck
            </Button>
            <Button
              onClick={() => setChecked("indeterminate")}
              variant="outline"
              size="sm"
              disabled={disabled}
            >
              Indeterminate
            </Button>
            <Button
              onClick={() => setChecked(true)}
              variant="outline"
              size="sm"
              disabled={disabled}
            >
              Check
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="disable-control"
              checked={disabled}
              onCheckedChange={(checked) => setDisabled(checked === true)}
            />
            <label htmlFor="disable-control" className="text-sm">
              Disable checkbox
            </label>
          </div>
        </div>

        <div className="flex items-center space-x-2 p-4 border rounded-lg bg-muted/20">
          <Checkbox
            id="controlled-checkbox"
            checked={checked}
            onCheckedChange={setChecked}
            disabled={disabled}
          />
          <label htmlFor="controlled-checkbox" className="text-sm font-medium">
            Controlled checkbox: {String(checked)}
          </label>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fully controlled checkbox with external state management and controls.",
      },
    },
  },
};

// Indicator customization
