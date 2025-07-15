# 🍦 IceCreamBorder Component

A delicious 3D ice cream dripping border component for React + Tailwind CSS projects. Perfect for wrapping content with sweet, animated borders!

## Features

- ✨ **3D Visual Effects**: Multiple depth layers with shadows and gradients
- 🎨 **5 Flavors**: Strawberry, Chocolate, Vanilla, Mint, and Blueberry
- 💧 **3 Drip Intensities**: Light, Medium, and Heavy dripping effects
- 🌈 **Animated Sprinkles**: Optional falling colorful sprinkles
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 🔧 **Fully Customizable**: Easy to configure and extend

## Installation

The component uses the following dependencies (already included in your project):
- React
- Framer Motion
- Tailwind CSS

## Basic Usage

```jsx
import IceCreamBorder from './components/IceCreamBorder';

function MyComponent() {
  return (
    <IceCreamBorder flavor="strawberry">
      <h1>Your content here!</h1>
      <p>This will be wrapped in a delicious ice cream border.</p>
    </IceCreamBorder>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Content to be wrapped by the border |
| `flavor` | string | `'strawberry'` | Ice cream flavor: `'strawberry'`, `'chocolate'`, `'vanilla'`, `'mint'`, `'blueberry'` |
| `intensity` | string | `'medium'` | Drip intensity: `'light'`, `'medium'`, `'heavy'` |
| `animated` | boolean | `true` | Enable/disable animations |
| `className` | string | `''` | Additional CSS classes |
| `borderWidth` | number | `8` | Border thickness (1-16) |
| `showSprinkles` | boolean | `true` | Show/hide falling sprinkles animation |

## Examples

### Different Flavors

```jsx
// Strawberry (default)
<IceCreamBorder flavor="strawberry">
  <YourContent />
</IceCreamBorder>

// Chocolate
<IceCreamBorder flavor="chocolate">
  <YourContent />
</IceCreamBorder>

// Mint
<IceCreamBorder flavor="mint">
  <YourContent />
</IceCreamBorder>
```

### Drip Intensities

```jsx
// Light dripping
<IceCreamBorder flavor="vanilla" intensity="light">
  <YourContent />
</IceCreamBorder>

// Heavy dripping
<IceCreamBorder flavor="blueberry" intensity="heavy">
  <YourContent />
</IceCreamBorder>
```

### Static (No Animation)

```jsx
<IceCreamBorder 
  flavor="chocolate" 
  animated={false} 
  showSprinkles={false}
>
  <YourContent />
</IceCreamBorder>
```

### Custom Styling

```jsx
<IceCreamBorder 
  flavor="mint"
  intensity="medium"
  borderWidth={12}
  className="my-8 mx-auto max-w-4xl"
>
  <YourContent />
</IceCreamBorder>
```

## Use Cases

Perfect for:
- 🎯 **Call-to-Action Sections**: Make important content stand out
- 🛍️ **Product Cards**: Highlight featured items
- 📢 **Notifications**: Create eye-catching alerts
- 🎉 **Special Announcements**: Draw attention to important messages
- 📊 **Stats & Metrics**: Make numbers pop
- 🎨 **Hero Sections**: Create memorable first impressions

## Flavor Color Schemes

Each flavor comes with carefully crafted color palettes:

- **Strawberry**: Pink gradients with warm highlights
- **Chocolate**: Rich amber and brown tones
- **Vanilla**: Soft yellow and cream colors
- **Mint**: Fresh green gradients
- **Blueberry**: Cool blue tones

## Performance Notes

- Uses CSS transforms and GPU acceleration for smooth animations
- Framer Motion optimizes animation performance
- SVG paths are lightweight and scalable
- Minimal impact on bundle size

## Browser Support

Compatible with all modern browsers that support:
- CSS transforms and gradients
- SVG animations
- ES6+ JavaScript features

## Tips

1. **Content Padding**: The component automatically adds padding, but you can adjust it with the `borderWidth` prop
2. **Responsive Design**: Works great on all screen sizes thanks to Tailwind's responsive utilities
3. **Accessibility**: Animations respect user's motion preferences
4. **Performance**: Disable animations on mobile if needed for better performance

## Demo

Check out `IceCreamBorderDemo.jsx` for a complete interactive example with all features showcased!