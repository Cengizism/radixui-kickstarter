import { Button } from './button';
import { Checkbox } from '../checkbox';
import { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A control that allows the user to toggle between checked and unchecked states. Supports indeterminate state and full keyboard navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size of the checkbox",
    },
    variant: {
      control: "select",
      options: ["default", "destructive", "outline"],
      description: "The visual variant of the checkbox",
    },
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
      description: "The checked state of the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the checkbox is required",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
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

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="small" size="sm" defaultChecked />
        <label htmlFor="small" className="text-sm font-medium">
          Small checkbox
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="default-size" size="default" defaultChecked />
        <label htmlFor="default-size" className="text-sm font-medium">
          Default checkbox
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="large" size="lg" defaultChecked />
        <label htmlFor="large" className="text-sm font-medium">
          Large checkbox
        </label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different checkbox sizes for various use cases.",
      },
    },
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="default-variant" variant="default" defaultChecked />
        <label htmlFor="default-variant" className="text-sm font-medium">
          Default variant
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="destructive-variant"
          variant="destructive"
          defaultChecked
        />
        <label htmlFor="destructive-variant" className="text-sm font-medium">
          Destructive variant
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="outline-variant" variant="outline" defaultChecked />
        <label htmlFor="outline-variant" className="text-sm font-medium">
          Outline variant
        </label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different visual styles for different contexts.",
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-3">
        <h4 className="font-medium">Unchecked States</h4>
        <div className="flex items-center space-x-2">
          <Checkbox id="unchecked-enabled" />
          <label htmlFor="unchecked-enabled" className="text-sm">
            Unchecked enabled
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="unchecked-disabled" disabled />
          <label
            htmlFor="unchecked-disabled"
            className="text-sm text-muted-foreground"
          >
            Unchecked disabled
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium">Checked States</h4>
        <div className="flex items-center space-x-2">
          <Checkbox id="checked-enabled" defaultChecked />
          <label htmlFor="checked-enabled" className="text-sm">
            Checked enabled
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="checked-disabled" defaultChecked disabled />
          <label
            htmlFor="checked-disabled"
            className="text-sm text-muted-foreground"
          >
            Checked disabled
          </label>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different checkbox states including disabled and various combinations.",
      },
    },
  },
};

// Indeterminate state
export const Indeterminate: Story = {
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
export const SelectAllPattern: Story = {
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
export const FormIntegration: Story = {
  render: () => (
    <form className="space-y-6 w-80">
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
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkboxes properly integrated with forms and validation.",
      },
    },
  },
};

// Keyboard navigation
export const KeyboardNavigation: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="bg-muted/50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Keyboard Navigation</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Use{" "}
          <kbd className="bg-muted px-1.5 py-0.5 rounded text-xs">Space</kbd> to
          toggle checkboxes.
        </p>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="kb-nav-1" />
            <label htmlFor="kb-nav-1" className="text-sm">
              First checkbox
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="kb-nav-2" />
            <label htmlFor="kb-nav-2" className="text-sm">
              Second checkbox
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="kb-nav-3" />
            <label htmlFor="kb-nav-3" className="text-sm">
              Third checkbox
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <h5 className="font-medium mb-1">✅ WCAG Features</h5>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Keyboard accessible</li>
            <li>• Screen reader friendly</li>
            <li>• Focus indicators</li>
            <li>• Proper ARIA attributes</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-1">✅ Supports</h5>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Indeterminate state</li>
            <li>• Controlled/uncontrolled</li>
            <li>• Form integration</li>
            <li>• Custom styling</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Checkboxes with proper accessibility patterns and keyboard navigation.",
      },
    },
  },
};
