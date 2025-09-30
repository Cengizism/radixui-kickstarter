import { AppHeader } from '@/components/AppHeader';
import { createFileRoute } from '@tanstack/react-router';
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Route = createFileRoute("/docs/aspect-ratio")({
  component: AspectRatioRoute,
});

function AspectRatioRoute() {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Aspect Ratio</h1>
          <p className="text-muted-foreground mb-8">
            Displays content within a desired ratio. Perfect for responsive images, videos, and embedded content.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
              <p className="text-sm text-muted-foreground mb-4">
                A simple 16:9 aspect ratio container with an image.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="max-w-md">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=500&auto=format"
                      alt="Landscape photograph by Tobias Tullius"
                      className="rounded-md object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Common Ratios</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Predefined aspect ratios for common use cases.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Square (1:1)</h4>
                    <AspectRatio ratio="1:1" className="bg-muted">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-sm text-muted-foreground">1:1</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Traditional (4:3)</h4>
                    <AspectRatio ratio="4:3" className="bg-muted">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-sm text-muted-foreground">4:3</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Widescreen (16:9)</h4>
                    <AspectRatio ratio="16:9" className="bg-muted">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-sm text-muted-foreground">16:9</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Classic Photo (3:2)</h4>
                    <AspectRatio ratio="3:2" className="bg-muted">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-sm text-muted-foreground">3:2</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Ultrawide (21:9)</h4>
                    <AspectRatio ratio="21:9" className="bg-muted">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-sm text-muted-foreground">21:9</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Portrait (9:16)</h4>
                    <AspectRatio ratio="9:16" className="bg-muted">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-sm text-muted-foreground">9:16</span>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Custom Ratios</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Use numeric values for custom aspect ratios.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Golden Ratio (1.618:1)</h4>
                    <AspectRatio ratio={1.618} className="bg-gradient-to-br from-yellow-100 to-yellow-200">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-sm text-yellow-800">φ = 1.618</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Cinema (2.35:1)</h4>
                    <AspectRatio ratio={2.35} className="bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-sm text-gray-800">2.35:1</span>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Rounded Corners</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Add rounded corners to aspect ratio containers.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2">None</h5>
                    <AspectRatio ratio="1:1" rounded="none" className="bg-blue-100">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs text-blue-700">None</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium mb-2">Small</h5>
                    <AspectRatio ratio="1:1" rounded="sm" className="bg-green-100">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs text-green-700">Small</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium mb-2">Default</h5>
                    <AspectRatio ratio="1:1" rounded="default" className="bg-purple-100">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs text-purple-700">Default</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium mb-2">Large</h5>
                    <AspectRatio ratio="1:1" rounded="lg" className="bg-pink-100">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs text-pink-700">Large</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium mb-2">Extra Large</h5>
                    <AspectRatio ratio="1:1" rounded="xl" className="bg-indigo-100">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs text-indigo-700">XL</span>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h5 className="text-sm font-medium mb-2">Full</h5>
                    <AspectRatio ratio="1:1" rounded="full" className="bg-orange-100">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs text-orange-700">Full</span>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Create consistent image galleries with aspect ratios.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300",
                    "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=300",
                    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300",
                    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300",
                    "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=300",
                    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300",
                    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300",
                  ].map((src, index) => (
                    <AspectRatio key={index} ratio="1:1" rounded="lg" className="overflow-hidden">
                      <img
                        src={`${src}&auto=format`}
                        alt={`Gallery image ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
                      />
                    </AspectRatio>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Video Embeds</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Perfect for responsive video embeds and media content.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="max-w-2xl">
                  <AspectRatio ratio="16:9" rounded="lg" className="bg-black">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-sm">Video Player</p>
                        <p className="text-xs text-white/60">16:9 Aspect Ratio</p>
                      </div>
                    </div>
                  </AspectRatio>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Card Layouts</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Use aspect ratios in card designs for consistent layouts.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      title: "Mountain Landscape", 
                      description: "Beautiful mountain scenery",
                      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
                    },
                    { 
                      title: "Ocean Waves", 
                      description: "Peaceful ocean views",
                      image: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=400"
                    },
                    { 
                      title: "Forest Path", 
                      description: "Serene forest walkway",
                      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400"
                    },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <AspectRatio ratio="16:9">
                        <img
                          src={`${item.image}&auto=format`}
                          alt={item.title}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <div className="p-4">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Placeholder Content</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Use aspect ratios for loading states and placeholder content.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Loading State</h4>
                    <AspectRatio ratio="16:9" className="bg-muted animate-pulse rounded-lg">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-muted-foreground rounded-full animate-spin mx-auto mb-2"></div>
                          <span className="text-sm text-muted-foreground">Loading...</span>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Empty State</h4>
                    <AspectRatio ratio="16:9" className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-muted-foreground/20 rounded mx-auto mb-2"></div>
                          <span className="text-sm text-muted-foreground">No content</span>
                        </div>
                      </div>
                    </AspectRatio>
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