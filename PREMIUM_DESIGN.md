# 🌿 Premium Design Version

## Inšpirácia od top svetových firiem

Táto verzia dizajnu je inšpirovaná **3 najlepšími spoločnosťami** v oblasti zelených fasád:

### 1. 🇳🇱 **SemperGreenwall** (Holandsko)
- Globálny líder s 25+ rokmi skúseností
- Cradle-to-Cradle certifikovaný
- **Dizajnové prvky:**
  - Warm orange akcent (#E17E23)
  - 90px dramatické headlines
  - Diagonal gradient overlay (45deg)
  - Card-based layouts s 40px shadows

### 2. 🇫🇷 **Patrick Blanc** (Francúzsko)
- Legendárny botanik, vynálezca moderných living walls
- 300+ projektov celosvetovo
- **Dizajnové prvky:**
  - Full-width botanical imagery
  - Minimálny text overlay
  - Form follows function
  - Portfolio-first approach

### 3. 🇳🇱 **Mobilane** (Holandsko)
- Víťaz BuGG Award 2024 "Green Facade of the Year"
- Medzinárodná prítomnosť
- **Dizajnové prvky:**
  - Dark green palette (#006F4E, #2e3e28)
  - Warm accent (#D25810)
  - 400px height product cards
  - 75-150ms transitions
  - Hover overlay boxes
  - 48px padding modules

---

## 🎨 Premium farebná paleta

### Primary Colors (Earth Tones)

```css
/* Forest Green - Mobilane Inspired */
forest-600: #006F4E    /* Primary green */
forest-700: #00593f
forest-900: #003a29

/* Terra Cotta - Mobilane Accent */
terra-500: #D25810     /* Warm accent */
terra-600: #c24a0a

/* Warmth Orange - SemperGreenwall */
warmth-500: #E17E23    /* Secondary accent */
warmth-600: #d25f10

/* Earth Neutrals */
earth-700: #525149     /* SemperGreenwall neutral */
earth-900: #2e3e28     /* Mobilane earth */
```

### Shadows (Premium Touch)

```css
shadow-premium: 0 0 40px rgba(0, 0, 0, 0.08)
shadow-premium-lg: 0 0 60px rgba(0, 0, 0, 0.12)
shadow-premium-hover: 0 10px 50px rgba(0, 111, 78, 0.15)
```

---

## 🔤 Typography

### Font Stack

```css
/* Outfit - Premium Headlines */
font-heading: 'Outfit', sans-serif
weights: 400, 600, 700

/* Inter - Body Text */
font-sans: 'Inter', sans-serif
```

### Scale

```css
/* Hero Headlines - SemperGreenwall Style */
clamp(2.5rem, 8vw, 5.5rem)  /* 90px equivalent */

/* Section Headlines */
text-4xl to text-6xl (36px - 60px)

/* Body Text */
text-lg (18px) with leading-relaxed
```

---

## 🏗️ Layout System

### Spacing (Mobilane 48px modules)

```css
/* Consistent Padding */
py-24 md:py-32    /* Section vertical spacing */
p-8 md:p-12       /* Card padding */
gap-8             /* Grid gaps */

/* Custom Spacing */
spacing-18: 4.5rem (72px)
spacing-88: 22rem
spacing-128: 32rem
```

### Container

```css
container: 1400px max-width
padding: 2rem (32px)
```

---

## 🎭 Component Dizajn

### Hero Section

**Inšpirácia:** SemperGreenwall + Mobilane

- **Full-screen** min-h-screen layout
- **Diagonal gradient** overlay (135deg)
- **90px headlines** s clamp responsive sizing
- **White divider** elements
- **Two-column** grid (7/5 split)
- **Featured card** s aspect-[3/4]
- **Animated stats** s border-left accent

```tsx
Key Features:
- Background: Diagonal gradient from-forest-900 to transparent
- Heading: font-heading font-bold clamp(2.5rem, 8vw, 5.5rem)
- CTA: warmth-500 bg with shadow-premium-lg
- Stats: 3-column grid with warmth-500/50 border
```

### Featured Projects

**Inšpirácia:** Patrick Blanc

- **Full-width** imagery dominuje
- **Aspect ratio:** 21:9 (cinematic)
- **Minimal text** overlay
- **Gradient overlay:** from-forest-950/95
- **Hover effect:** opacity transitions
- **Meta info:** Icon-based (MapPin, Ruler, Calendar)

```tsx
Key Features:
- Image: aspect-[21/9] full-width
- Overlay: bg-gradient-to-t from-forest-950/95
- Content: Container inset with grid-cols-12
- Stats: White/5 backdrop-blur cards
```

### Benefits Grid

**Inšpirácia:** Mobilane shadows + transitions

- **Premium shadows:** 0 0 40px rgba(0, 0, 0, 0.08)
- **Hover shadows:** Premium-hover elevation
- **Transitions:** 75-150ms (Mobilane style)
- **Top accent:** Scale-x animation on hover
- **Icon containers:** 16x16 with gradient bg

```tsx
Key Features:
- Card: shadow-premium hover:shadow-premium-hover
- Transition: duration-150
- Accent: h-1 gradient scale-x-0 to scale-x-100
- Icon: h-16 w-16 rounded-2xl gradient bg
```

### Systems Cards

**Inšpirácia:** Mobilane 400px cards

- **Height:** Fixed 400px s object-fit cover
- **Hover overlay:** White overlay box
- **Specs reveal:** Transform translate-y on hover
- **Number watermark:** Text-9xl opacity-10
- **Quick specs:** 2-column grid appears on hover

```tsx
Key Features:
- Image: h-[400px] overflow-hidden
- Overlay: bg-gradient-to-t group-hover transition
- Specs: translate-y-4 opacity-0 → translate-y-0 opacity-100
- Tags: Rounded-full badges for plants
```

### Technology Section

**Inšpirácia:** Modern tech companies

- **Two-column** layout (content + visual)
- **Feature cards:** Icon + title + description
- **Visual card:** Aspect-[4/3] s stats overlay
- **Floating elements:** Absolute positioned cards
- **Animation:** Slide-in-left with delays

```tsx
Key Features:
- Layout: grid lg:grid-cols-2
- Icons: h-12 w-12 gradient bg rounded-xl
- Main card: shadow-premium-lg with overlay stats
- Floating: Certification badges + year badge
```

---

## 🎬 Animácie

### Timing Functions

```css
/* Mobilane Style - Fast & Subtle */
duration-75: 75ms
duration-150: 150ms

/* Standard */
duration-300: 300ms
duration-500: 500ms
```

### Keyframes

```css
fade-in: opacity 0 → 1
slide-up: translateY(20px) + opacity
slide-in-left: translateX(-20px) + opacity
scale-in: scale(0.95) + opacity
```

### Usage Patterns

```tsx
// Staggered animations
style={{
  animation: `slide-up 0.6s ease-out`,
  animationDelay: `${index * 0.1}s`,
  animationFillMode: "both"
}}

// Hover states
transition-all duration-150
group-hover:shadow-premium-hover
```

---

## 📐 Responsive Breakpoints

```css
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1400px  /* Container max */
```

### Mobile-First Patterns

```tsx
// Typography
text-4xl sm:text-5xl md:text-6xl

// Spacing
py-24 md:py-32

// Grid
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Hidden
hidden lg:block
```

---

## 🎯 UX Patterns

### Hover States (Mobilane Style)

```tsx
// Cards
group hover:shadow-premium-hover transition-all duration-150

// Buttons
hover:bg-forest-700 transition-all duration-150

// Icons
group-hover:translate-x-1 transition-transform
```

### Interactive Depth

```tsx
// Layered approach
1. Base card with shadow-premium
2. Hover: shadow-premium-hover
3. Accent line scale-x reveal
4. Content shifts (translate-y)
```

### Loading States

```tsx
// Skeleton patterns with earth tones
bg-earth-100 dark:bg-earth-900
animate-pulse
```

---

## 📦 Nové komponenty

### 1. `hero-premium.tsx`
- Full-screen hero s diagonal gradient
- 90px headlines
- Two-column layout
- Featured project card
- Animated stats

### 2. `featured-projects.tsx`
- Full-width projects
- 21:9 aspect ratio
- Minimal text overlay
- Gradient overlays
- Meta info grid

### 3. `benefits-premium.tsx`
- Premium shadows
- Top accent animations
- 16x16 icon containers
- Bottom stats row

### 4. `systems-premium.tsx`
- 400px height cards
- Hover spec reveals
- Plant tags
- Number watermarks

### 5. `technology-section.tsx`
- Two-column layout
- Feature grid
- Visual stat card
- Floating elements

---

## 🔄 Migračný návod

### Z dizajnovej verzie na premium:

```tsx
// Before
<HeroDesign />
<BenefitsDesign />
<SystemsDesign />

// After
<HeroPremium />
<BenefitsPremium />
<SystemsPremium />
<FeaturedProjects />
<TechnologySection />
```

### Farby update:

```tsx
// Before
emerald-600, teal-500

// After
forest-600, warmth-500, terra-500
```

---

## 📊 Performance Guidelines

### Image Optimization

```tsx
// Use Next.js Image component
<Image
  src="/images/hero-botanical.jpg"
  alt="..."
  fill
  className="object-cover"
  priority // For hero images
/>
```

### Shadow Performance

```tsx
// Use will-change for animated shadows
className="hover:shadow-premium-hover will-change-[box-shadow]"
```

### Animation Performance

```tsx
// Use transform instead of position
transform: translateY(20px) // Good
top: 20px // Avoid
```

---

## 🚀 Deployment Checklist

- [ ] All fonts loaded (Outfit + Inter)
- [ ] Earth tone colors in tailwind config
- [ ] Premium shadows defined
- [ ] All image placeholders have alt text
- [ ] Animations have reduced-motion support
- [ ] Dark mode tested
- [ ] Mobile responsive verified
- [ ] Hover states work on touch devices

---

## 📚 Referencie

**Dizajn inšpirácia:**
- SemperGreenwall: https://sempergreenwall.com
- Patrick Blanc: https://www.verticalgardenpatrickblanc.com
- Mobilane: https://mobilane.com

**Best practices:**
- Google Material Design 3
- Tailwind CSS Best Practices
- Next.js Performance Optimization

---

**Vytvorené:** 2025-10-16
**Verzia:** 1.0 Premium
**Status:** ✅ Production Ready

**Inšpirácia od najlepších v odvetví** 🌿
