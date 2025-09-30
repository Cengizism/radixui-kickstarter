import { AppHeader } from '@/components/AppHeader';
import { createFileRoute } from '@tanstack/react-router';
import { Label } from '@/components/ui/elements/label';
import { Slider } from '@/components/ui/elements/slider';
import { useState } from 'react';

export const Route = createFileRoute("/docs/slider")({
  component: SliderRoute,
});

function SliderRoute() {
  const [value, setValue] = useState([50]);

  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Slider</h1>
          <p className="text-muted-foreground mb-8">
            An input where the user selects a value from within a given range.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Default</h2>
              <div className="space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label>Volume: {value[0]}</Label>
                  <Slider
                    value={value}
                    onValueChange={setValue}
                    max={100}
                    step={1}
                    className="w-full max-w-sm"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Range</h2>
              <div className="space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label>Price Range</Label>
                  <Slider
                    defaultValue={[20, 80]}
                    max={100}
                    step={1}
                    className="w-full max-w-sm"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Disabled</h2>
              <div className="space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label>Disabled</Label>
                  <Slider
                    defaultValue={[50]}
                    disabled
                    className="w-full max-w-sm"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
