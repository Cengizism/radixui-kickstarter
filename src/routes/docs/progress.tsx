import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { Progress } from '@/components/ui/elements/progress';
import { Separator } from '@/components/ui/elements/separator';
import { useEffect, useState } from 'react';

export const Route = createFileRoute("/docs/progress")({
  component: ProgressDemo,
});

function ProgressDemo() {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Animated progress demo
  useEffect(() => {
    if (!isAnimating) return;

    const timer = setInterval(() => {
      setAnimatedProgress((prev) => {
        if (prev >= 100) {
          setIsAnimating(false);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isAnimating]);

  // Simulated upload progress
  useEffect(() => {
    const timer = setTimeout(() => setUploadProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const startAnimation = () => {
    setAnimatedProgress(0);
    setIsAnimating(true);
  };

  const pauseAnimation = () => {
    setIsAnimating(false);
  };

  const resetAnimation = () => {
    setAnimatedProgress(0);
    setIsAnimating(false);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Progress</h1>
          <p className="text-lg text-muted-foreground">
            Displays an indicator showing the completion progress of a task,
            typically displayed as a progress bar.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Accessibility</Badge>
          <Badge variant="secondary">Progress Indicator</Badge>
          <Badge variant="secondary">ARIA Compliant</Badge>
          <Badge variant="secondary">Customizable</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            Simple progress bars showing different completion levels.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg max-w-md">
          <div className="space-y-2">
            <div className="text-sm font-medium">25% Complete</div>
            <Progress value={25} />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">50% Complete</div>
            <Progress value={50} />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">75% Complete</div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">100% Complete</div>
            <Progress value={100} />
          </div>
        </div>
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different progress bar heights for various use cases.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg max-w-md">
          <div className="space-y-2">
            <div className="text-sm font-medium">Small Progress (1px)</div>
            <Progress value={60} size="sm" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Default Progress (2px)</div>
            <Progress value={60} size="default" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Large Progress (3px)</div>
            <Progress value={60} size="lg" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">
              Extra Large Progress (4px)
            </div>
            <Progress value={60} size="xl" />
          </div>
        </div>
      </section>

      <Separator />

      {/* Shape Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Shape Variants</h2>
          <p className="text-muted-foreground">
            Different corner radius options for progress bars.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg max-w-md">
          <div className="space-y-2">
            <div className="text-sm font-medium">Rounded (Default)</div>
            <Progress value={45} variant="default" size="lg" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Square Corners</div>
            <Progress value={45} variant="square" size="lg" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Rounded Corners</div>
            <Progress value={45} variant="rounded" size="lg" />
          </div>
        </div>
      </section>

      <Separator />

      {/* Color Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Color Variants</h2>
          <p className="text-muted-foreground">
            Different colors to convey status or importance.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg max-w-md">
          <div className="space-y-2">
            <div className="text-sm font-medium">Default</div>
            <Progress value={70} color="default" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Success</div>
            <Progress value={85} color="success" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Warning</div>
            <Progress value={45} color="warning" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Danger</div>
            <Progress value={25} color="danger" />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Info</div>
            <Progress value={60} color="info" />
          </div>
        </div>
      </section>

      <Separator />

      {/* With Labels */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">With Labels</h2>
          <p className="text-muted-foreground">
            Progress bars with automatic or custom labels.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg max-w-md">
          <Progress value={42} showLabel />
          <Progress value={150} max={200} showLabel label="File Upload" />
          <Progress
            value={75}
            showLabel
            formatLabel={(value, max) => `${value}/${max} items processed`}
          />
        </div>
      </section>

      <Separator />

      {/* Animated Progress */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Animated Progress</h2>
          <p className="text-muted-foreground">
            Interactive progress bar with animation controls.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg max-w-md">
          <Progress
            value={animatedProgress}
            showLabel
            label="Processing..."
            color={animatedProgress === 100 ? "success" : "info"}
          />
          <div className="flex gap-2">
            <Button onClick={startAnimation} disabled={isAnimating} size="sm">
              <Play className="mr-2 h-3 w-3" />
              Start
            </Button>
            <Button
              onClick={pauseAnimation}
              disabled={!isAnimating}
              variant="outline"
              size="sm"
            >
              <Pause className="mr-2 h-3 w-3" />
              Pause
            </Button>
            <Button onClick={resetAnimation} variant="outline" size="sm">
              <RotateCcw className="mr-2 h-3 w-3" />
              Reset
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Indeterminate Progress */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Indeterminate Progress</h2>
          <p className="text-muted-foreground">
            Progress bars with unknown completion time showing pulsing
            animation.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg max-w-md">
          <div className="space-y-2">
            <div className="text-sm font-medium">Loading...</div>
            <Progress value={null} />
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Processing data...</div>
            <Progress value={undefined} color="info" />
          </div>
        </div>
      </section>

      <Separator />

      {/* Real-world Example */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Real-world Example</h2>
          <p className="text-muted-foreground">
            File upload simulation with animated progress.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">document.pdf</span>
              <span className="text-xs text-muted-foreground">2.4 MB</span>
            </div>
            <Progress
              value={uploadProgress}
              color={uploadProgress === 100 ? "success" : "info"}
              formatLabel={(value) => `${value}% uploaded`}
              showLabel
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete props reference for the Progress component.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Progress</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      value
                    </td>
                    <td className="border border-border p-2">
                      number | null | undefined
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      The progress value. Use null/undefined for indeterminate
                      state
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">max</td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">100</td>
                    <td className="border border-border p-2">
                      The maximum progress value
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg' | 'xl'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the height of the progress bar
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'square' | 'rounded'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the corner radius of the progress bar
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      color
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'success' | 'warning' | 'danger' | 'info' |
                      'secondary'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the color of the progress indicator
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      animated
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">true</td>
                    <td className="border border-border p-2">
                      Whether to animate progress changes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      showLabel
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Whether to show automatic percentage label
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      label
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Custom label text (overrides automatic label)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      formatLabel
                    </td>
                    <td className="border border-border p-2">
                      (value: number, max: number) {"=>"} string
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Custom function to format the label
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
