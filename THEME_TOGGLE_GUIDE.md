# Theme Toggle Implementation in Dashboard

This document explains how the theme toggle functionality has been implemented in the dashboard page template.

## 🎨 Overview

The theme toggle system provides users with three theme options:

- **Light Theme**: Traditional light background with dark text
- **Dark Theme**: Dark background with light text  
- **System Theme**: Automatically follows the user's OS theme preference

## 🏗️ Implementation Components

### 1. Theme Provider (`theme-provider.tsx`)

The foundation component that wraps the application and provides theme context:

```tsx
import { ThemeProvider } from "@/components/theme-provider"

// Wrap your app
<ThemeProvider>
  <YourApp />
</ThemeProvider>
```

**Features:**

- System theme detection
- Local storage persistence
- SSR-safe hydration
- Smooth theme transitions

### 2. Theme Toggle Components (`theme-toggle.tsx`)

Two variants available for different use cases:

#### Dropdown Theme Toggle

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

<ThemeToggle />
```

- Shows all theme options in a dropdown
- Best for topbar/header areas
- Provides clear visual feedback

#### Simple Theme Toggle

```tsx
import { SimpleThemeToggle } from "@/components/theme-toggle"

<SimpleThemeToggle />
```

- Cycles through themes on click
- Compact design for sidebar/footer
- Perfect for collapsed navigation

### 3. Dashboard Layout (`dashboard-layout.tsx`)

Complete dashboard with integrated theme toggle:

```tsx
import { DashboardLayout } from "@/components/layout/dashboard-layout"

<DashboardLayout title="My Dashboard" showThemeToggle={true}>
  <YourContent />
</DashboardLayout>
```

## 📍 Theme Toggle Placement

The dashboard template includes theme toggles in **two strategic locations**:

### 1. Topbar (Header Area)

- **Component**: `ThemeToggle` (dropdown style)
- **Location**: Right side of the topbar actions
- **Best for**: Primary theme switching with full visibility of options

### 2. Sidebar Footer

- **Component**: `SimpleThemeToggle` (button style)  
- **Location**: Bottom of the navigation sidebar
- **Best for**: Quick theme cycling, especially when sidebar is collapsed

## 🎯 Usage Examples

### Basic Implementation

```tsx
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Header } from "@/components/layout/header/header"

export function MyDashboard() {
  return (
    <DashboardLayout title="My App">
      <Header 
        title="Welcome back!" 
        description="Your dashboard overview"
      />
      {/* Your content here */}
    </DashboardLayout>
  )
}
```

### Custom Theme Integration

```tsx
import { useDashboardTheme } from "@/hooks/use-dashboard-theme"

export function CustomComponent() {
  const { theme, setTheme, getThemeLabel } = useDashboardTheme()
  
  return (
    <div>
      <p>Current theme: {getThemeLabel()}</p>
      <button onClick={() => setTheme("dark")}>
        Switch to Dark
      </button>
    </div>
  )
}
```

### Conditional Styling Based on Theme

```tsx
import { useIsDark } from "@/hooks/use-dashboard-theme"

export function ThemeAwareComponent() {
  const isDark = useIsDark()
  
  return (
    <div className={isDark ? "dark-specific-styles" : "light-specific-styles"}>
      Content that adapts to theme
    </div>
  )
}
```

## 🎨 CSS Variables & Theming

The theme system uses CSS custom properties defined in `src/index.css`:

### Light Theme Variables

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

### Dark Theme Variables

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  /* ... more variables */
}
```

These variables are automatically applied to Tailwind CSS classes like `bg-background`, `text-foreground`, etc.

## 🔧 Customization Options

### Disable Theme Toggle

```tsx
<DashboardLayout showThemeToggle={false}>
  {/* Content without theme toggle */}
</DashboardLayout>
```

### Custom Theme Configuration

```tsx
import { useDashboardTheme } from "@/hooks/use-dashboard-theme"

const { theme, setTheme } = useDashboardTheme({
  themes: ["light", "dark"], // Exclude system theme
  defaultTheme: "light"
})
```

### Custom Theme Toggle Styling

```tsx
// Override theme toggle styles
<ThemeToggle className="custom-theme-toggle-styles" />
```

## 🚀 Storybook Integration

The theme toggle is fully integrated with Storybook:

1. **Theme Toggle Stories**: `/src/components/theme-toggle.stories.tsx`
2. **Dashboard Layout Stories**: `/src/components/layout/dashboard-layout.stories.tsx`  
3. **Dashboard Template Stories**: `/src/stories/templates/dashboard.stories.tsx`

### View in Storybook

```bash
npm run storybook
```

Navigate to:

- `Components/ThemeToggle` - Theme toggle component examples
- `Layout/DashboardLayout` - Complete dashboard with theme toggle
- `Templates/Dashboard` - Dashboard page templates

## ⚡ Performance Considerations

### Hydration Safety

- Theme provider prevents hydration mismatches
- Uses `mounted` state to ensure client-side only rendering
- Fallback handling for SSR scenarios

### Storage Optimization

- Theme preference stored in `localStorage`
- Automatic cleanup of invalid theme values
- Minimal bundle impact with tree-shaking

### Animation Performance

- CSS transitions for smooth theme changes
- GPU-accelerated animations where possible
- Optional `disableTransitionOnChange` for instant switching

## 🧪 Testing the Implementation

1. **Start Development Server**:

   ```bash
   npm run dev
   ```

2. **Test Theme Switching**:
   - Click the dropdown theme toggle in topbar
   - Use the simple toggle in sidebar
   - Verify system theme detection
   - Check theme persistence after page reload

3. **Test in Storybook**:

   ```bash
   npm run storybook
   ```

   - Navigate to dashboard stories
   - Test theme switching in isolated environment
   - Verify theme toggle variants

## 🔄 Theme Toggle Behavior

### Theme Cycle Order

1. **Light** → Dark → System → Light (repeats)
2. **System** automatically detects OS preference
3. **Persistence** remembers user choice across sessions

### Visual Feedback

- **Icons change** based on current theme (Sun/Moon)
- **Smooth transitions** between theme states  
- **Tooltip guidance** for user clarity
- **Dropdown labels** show current selection

## 📱 Responsive Behavior

### Desktop

- Full dropdown theme toggle in topbar
- Icon + label in expanded sidebar
- Tooltips for additional context

### Mobile/Collapsed Sidebar

- Simple toggle buttons only
- Tooltips for space-efficient labeling
- Touch-optimized interaction areas

This implementation provides a complete, production-ready theme switching system that enhances user experience while maintaining accessibility and performance standards.
