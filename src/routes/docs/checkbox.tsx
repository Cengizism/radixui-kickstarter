import * as React from 'react';
import { AppHeader } from '@/components/AppHeader';
import { Button } from '@/components/ui/elements/button';
import { Checkbox } from '@/components/ui/elements/checkbox';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/docs/checkbox")({
  component: CheckboxRoute,
});

function CheckboxRoute() {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(
    "indeterminate"
  );
  const [todoItems, setTodoItems] = React.useState([
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
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Checkbox</h1>
          <p className="text-muted-foreground mb-8">
            A control that allows the user to toggle between checked and
            unchecked states. Supports indeterminate state and full keyboard
            navigation.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Simple checkbox with label, as shown in the official RadixUI
                documentation.
              </p>
              <div className="p-4 border rounded-lg max-w-md">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" defaultChecked />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Different checkbox sizes for various use cases.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="small" size="sm" defaultChecked />
                    <label htmlFor="small" className="text-sm font-medium">
                      Small checkbox
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="default" size="default" defaultChecked />
                    <label htmlFor="default" className="text-sm font-medium">
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
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Variants</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Different visual styles for different contexts.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="default-variant"
                      variant="default"
                      defaultChecked
                    />
                    <label
                      htmlFor="default-variant"
                      className="text-sm font-medium"
                    >
                      Default variant
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="destructive-variant"
                      variant="destructive"
                      defaultChecked
                    />
                    <label
                      htmlFor="destructive-variant"
                      className="text-sm font-medium"
                    >
                      Destructive variant
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="outline-variant"
                      variant="outline"
                      defaultChecked
                    />
                    <label
                      htmlFor="outline-variant"
                      className="text-sm font-medium"
                    >
                      Outline variant
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Indeterminate State
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Controlled checkbox with indeterminate state, as demonstrated in
                the official RadixUI docs.
              </p>
              <div className="p-4 border rounded-lg">
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
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Select All Pattern
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Common pattern using indeterminate state for "select all"
                functionality.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 pb-2 border-b">
                    <Checkbox
                      id="select-all"
                      checked={
                        allChecked
                          ? true
                          : someChecked
                            ? "indeterminate"
                            : false
                      }
                      onCheckedChange={handleSelectAll}
                    />
                    <label
                      htmlFor="select-all"
                      className="text-sm font-semibold"
                    >
                      Select All ({checkedCount}/{todoItems.length})
                    </label>
                  </div>

                  <div className="space-y-3">
                    {todoItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-2 ml-4"
                      >
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
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">States</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Different checkbox states including disabled and various
                combinations.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Form Integration</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Checkboxes properly integrated with forms and validation.
              </p>
              <div className="p-4 border rounded-lg">
                <form className="space-y-4 max-w-md">
                  <fieldset className="space-y-3">
                    <legend className="text-sm font-semibold">
                      Newsletter Preferences
                    </legend>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="weekly-newsletter"
                        name="newsletter"
                        value="weekly"
                      />
                      <label htmlFor="weekly-newsletter" className="text-sm">
                        Weekly newsletter
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="product-updates"
                        name="newsletter"
                        value="product"
                      />
                      <label htmlFor="product-updates" className="text-sm">
                        Product updates
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="marketing-emails"
                        name="newsletter"
                        value="marketing"
                      />
                      <label htmlFor="marketing-emails" className="text-sm">
                        Marketing emails
                      </label>
                    </div>
                  </fieldset>

                  <fieldset className="space-y-3 pt-4 border-t">
                    <legend className="text-sm font-semibold">
                      Account Settings
                    </legend>

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
                      <span className="text-primary underline">
                        terms and conditions
                      </span>{" "}
                      *
                    </label>
                  </div>

                  <Button type="submit" className="w-full">
                    Save Preferences
                  </Button>
                </form>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Accessibility Features
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Checkboxes with proper accessibility patterns and keyboard
                navigation.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Keyboard Navigation</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use{" "}
                      <kbd className="bg-muted px-1.5 py-0.5 rounded text-xs">
                        Space
                      </kbd>{" "}
                      to toggle checkboxes.
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
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
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
