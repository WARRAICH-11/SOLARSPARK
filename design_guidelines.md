# Design Guidelines: Solar Electric Pakistan

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium solar companies like Tesla Solar and SunPower, combined with modern SaaS aesthetics (Stripe's clean professionalism). This is an experience-focused, lead-generation website where trust and visual appeal drive conversions.

## Color Palette
- **Primary**: Deep Navy Blue (#1B3A5C) - Trust and professionalism
- **Accent**: Solar Yellow/Gold (#FFB700) - Energy and optimism
- **Base**: Clean White (#FFFFFF) - Minimalism and clarity
- **Supporting**: Light Gray (#F5F5F5) for backgrounds, Dark Gray (#333333) for text

## Typography
**Font Stack**: 
- **Headlines**: Inter Bold/ExtraBold (Google Fonts) - Modern, commanding
- **Body**: Inter Regular/Medium - Clean readability
- **Sizes**: h1: 3.5rem/2.5rem mobile, h2: 2.5rem/1.75rem mobile, h3: 1.75rem/1.25rem mobile, body: 1rem/0.9375rem mobile

## Layout System
**Spacing**: Use Tailwind units of 4, 8, 12, 16, 20, 24, and 32 for consistent rhythm
- Section padding: py-20 desktop, py-12 mobile
- Container: max-w-7xl with px-8 desktop, px-4 mobile
- Card spacing: gap-8 desktop, gap-6 mobile

## Page Structure

### 1. Hero Section (Full viewport)
High-resolution background video of Pakistani home with solar panels (with fallback image of modern solar installation). Overlay with subtle gradient (navy to transparent). Center-aligned content with headline "Empowering Your Future with Clean Energy", sub-headline, and large gold CTA button "Get a Free Quote". WhatsApp widget persistent bottom-right.

### 2. Why Choose Us (3-column grid)
Three cards with icons (sun for Quality Materials, wrench for Expert Engineers, headset for Support). Cards with subtle shadows, hover lift effect. Icons in gold circles.

### 3. Installation Plans (Pricing Table)
Three-column responsive grid (stacks on mobile). Cards with navy headers, white bodies. "Starting from..." pricing emphasis. Gold CTA buttons. Prominent disclaimer: "All prices negotiable - Connect on WhatsApp for custom discount."

### 4. Interactive Solar Calculator
Single-column centered form. Input field for monthly bill (PKR), calculate button, animated results showing savings with bar chart visualization. Navy background section with white text.

### 5. Product Showcase Gallery
Two sub-sections: Solar Panels and Inverters. 4-column grid (2 on tablet, 1 mobile) with product cards showing brand logos, specifications. Hover reveals "Learn More" overlay.

### 6. Our Process Timeline
Horizontal timeline (vertical on mobile) with 4 steps: Survey → Design → Install → Net Metering. Connected with gold lines, numbered circles, icons for each step.

### 7. Service Areas
Interactive grid of 8 cities (Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Gujrat, Gujranwala, Sialkot) with map pin icons. Hover highlights city card.

### 8. Testimonials Slider
Auto-rotating carousel with customer photo, 5-star rating, quote, name, and city. Navigation dots in gold.

### 9. Footer
Three-column layout: Quick Links, Contact Info (with form), Location Map. Form fields: Name, Phone, City (dropdown with 8 cities), Monthly Bill (PKR), Property Type (radio: Residential/Commercial). Navy background with white/gold text.

## Component Library
- **Buttons**: Rounded corners (rounded-lg), solid fills, uppercase text, generous padding (px-8 py-4), hover scale effect
- **Cards**: White backgrounds, subtle shadows (shadow-lg), rounded-xl, border on hover
- **Forms**: Outlined inputs with focus states (gold border), labels above fields, required field indicators
- **Icons**: Hero Icons via CDN, 24px standard size

## Images
Hero: Full-width video/image of Pakistani solar installation
Product Showcase: Brand logos (Longi, Jinko, Canadian Solar, JA Solar, Inverex, Knox, GoodWe, Huawei)
Testimonials: Customer photos with installations
Why Choose Us: Icon graphics for three pillars

## Interactions
Scroll-triggered fade-in animations for sections (subtle, 300ms). Hover effects on cards (lift 4px). WhatsApp widget pulse animation every 5 seconds. Calculator result animation (slide down). Minimal, professional - no excessive motion.

## Mobile Optimization
Hamburger menu, stacked sections, touch-friendly buttons (min 48px height), optimized images, priority loading for above-fold content.