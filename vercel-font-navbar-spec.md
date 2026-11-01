# Vercel Font Page Navbar: Reverse-Engineering & Implementation Guide

This document breaks down the navigation bar on [vercel.com/font](https://vercel.com/font) extracted via static inspection and runtime structure analysis, providing full specifications and drop-in code for implementation in React / Tailwind CSS / Vanilla web stacks.

---

## 1. Architectural Anatomy & Layout

The navbar consists of three main zones distributed horizontally across a constrained width container:

```
+----------------------------------------------------------------------------------------------------------------------+
| [ Vercel Logo ]                         [  Sans  |  Serif  |  Mono  |  Pixel  ]                         [ Get It v ] |
| (Left-aligned, link)                    (Center-pinned pill, segmented radio)                 (Right-aligned CTA pill) |
+----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Layout Blueprint
- **Outer Header Wrapper**:
  - `position: relative`
  - `z-index: 200`
  - Max-width: `min(1608px, 100%)`
  - Height: Responsive stepped scale:
    - Desktop (`> 960px`): `120px` (or `h-[120px]`)
    - Tablet (`<= 960px`): `80px` (`h-20`)
    - Mobile (`<= 600px`): `64px` (`h-16`)
  - Padding: `padding: 0 24px` (or container margins `mx-auto`)
  - Inner row: `flex flex-row items-center justify-between w-full`

- **Left Zone (Logo)**:
  - Vercel triangular SVG glyph (`viewBox="0 0 75 65"`, height ~22px).
  - Hover / focus-visible ring styles.

- **Center Zone (Floating Segmented Tab / Font Switcher)**:
  - Key layout trick: **`position: fixed; top: 40px; left: 50%; transform: translateX(-50%);`** (Responsive `top`: `40px` on desktop, `22px` on `<=960px`, `14px` on `<=600px`).
  - Stays pinned at the top center even on scroll, or integrates smoothly within the header.
  - Role: `role="radiogroup"` with `aria-label="Toggle font family"`.
  - CSS Grid with CSS variable: `grid-template-columns: repeat(var(--font-family-count, 4), 1fr);`.
  - Capsule / Pill styling: `border: 1px solid var(--border-color); background: var(--bg-surface); border-radius: 128px; padding: 4px; gap: 4px;`.
  - Sliding active pill background: A single backdrop element (`aria-hidden="true"`) absolutely or grid-positioned that translates across the 4 slots: `transform: translateX(calc(100% * index + index * gap))`.

- **Right Zone (CTA Button)**:
  - Pill button: `border-radius: 9999px;` (fully rounded).
  - High-contrast primary inverted color (`bg-black text-white` in light mode, `bg-white text-black` in dark mode).
  - Responsive collapse: On mobile (`<=600px`), text "Get It" hides, collapsing into an icon-only circular button (`w-10 h-10` / `rounded-full`).

---

## 2. Interactive Behavior & State Mechanics

### 2.1 Segmented Control (Pill Switcher)
1. **Underlying Semantics**:
   - Implemented with native `<input type="radio" name="fontFamily" class="sr-only" />` inside `<label>` elements.
   - Ensures full keyboard navigability (Arrow Left/Right, Tab, Space).
   - Each label has a custom font family matching its label (`font-sans` for Sans, `font-serif` for Serif, `font-mono` for Mono, `font-pixel` for Pixel).

2. **Sliding Indicator Physics**:
   - The indicator is rendered as a shared indicator div behind the labels:
     ```css
     grid-column: 1;
     grid-row: 1;
     transform: translateX(calc(100% * var(--active-index) + var(--active-index) * 4px));
     transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
     ```
   - In React / Framer Motion, this can also be achieved with `layoutId="active-pill"`.

3. **Active Font Propagation**:
   - Changing the radio updates a document or page-level class or CSS custom property:
     - e.g., updates `data-font="sans|serif|mono|pixel"` on the root/preview container.

---

## 3. Design Tokens & Styling Details

| Property | Desktop (>960px) | Tablet (601px - 960px) | Mobile (<=600px) |
| :--- | :--- | :--- | :--- |
| **Header Height** | 120px | 80px | 64px |
| **Switcher Top** | `top: 40px` | `top: 22px` | `top: 14px` |
| **Switcher Pill Radius** | `128px` (Pill) | `128px` | `128px` |
| **Pill Item Height / Line Height** | `30px` | `26px` | `26px` |
| **Pill Font Size** | `16px` | `14px` | `14px` |
| **Pill Padding** | `px-4` (`16px`) | `px-3` (`12px`) | `px-2.5` |
| **CTA Button** | Height 40px, `px-4`, text + icon | Height 36px, `px-3.5` | Height 36px, `w-9`, icon only |

### Color Palette (Tailwind equivalent)
- Light Mode:
  - Surface Border: `border-black/[0.08]` or `border-gray-200`
  - Switcher Background: `bg-white/90 backdrop-blur-md`
  - Inactive Item Text: `text-zinc-600 hover:text-zinc-900`
  - Active Item Background: `bg-zinc-900 text-white`
  - Box Shadow: `0 1px 2px 0 rgba(0, 0, 0, 0.04)`
- Dark Mode:
  - Surface Border: `border-white/[0.12]`
  - Switcher Background: `bg-zinc-950/90`
  - Inactive Item Text: `text-zinc-400 hover:text-zinc-100`
  - Active Item Background: `bg-white text-zinc-950`

---

## 4. Production Implementation (React + Tailwind CSS)

Below is the standalone, ready-to-copy React component:

```tsx
'use client';

import React, { useState } from 'react';

const FONTS = [
  { id: 'sans', label: 'Sans', fontClass: 'font-sans' },
  { id: 'serif', label: 'Serif', fontClass: 'font-serif' },
  { id: 'mono', label: 'Mono', fontClass: 'font-mono' },
  { id: 'pixel', label: 'Pixel', fontClass: 'font-mono tracking-widest' },
] as const;

export type FontId = (typeof FONTS)[number]['id'];

interface VercelFontNavbarProps {
  activeFont?: FontId;
  onFontChange?: (font: FontId) => void;
  ctaHref?: string;
}

export function VercelFontNavbar({
  activeFont: controlledFont,
  onFontChange,
  ctaHref = '#get',
}: VercelFontNavbarProps) {
  const [internalFont, setInternalFont] = useState<FontId>('sans');
  const activeFont = controlledFont ?? internalFont;

  const handleSelect = (id: FontId) => {
    setInternalFont(id);
    onFontChange?.(id);
  };

  const activeIndex = FONTS.findIndex((f) => f.id === activeFont);

  return (
    <header className="relative z-50 mx-auto flex h-16 w-full max-w-[1608px] items-center justify-between px-4 sm:px-8 md:h-20 lg:h-[120px]">
      {/* 1. Left: Brand Logo */}
      <div className="flex items-center">
        <a
          href="https://vercel.com"
          aria-label="Vercel homepage"
          className="text-zinc-900 dark:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-md p-1 -m-1 transition-opacity hover:opacity-80"
        >
          <svg
            aria-label="Vercel logo"
            viewBox="0 0 75 65"
            fill="currentColor"
            className="h-[20px] w-auto md:h-[22px]"
          >
            <path d="M37.59.25l36.95 64H.64l36.95-64z" />
          </svg>
        </a>
      </div>

      {/* 2. Center: Pinned Segmented Font Family Switcher */}
      <div
        role="radiogroup"
        aria-label="Toggle font family"
        style={{ '--font-count': FONTS.length } as React.CSSProperties}
        className="fixed top-3.5 md:top-[22px] lg:top-10 left-1/2 -translate-x-1/2 grid grid-cols-[repeat(var(--font-count),1fr)] gap-1 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-1 shadow-[0_1px_2px_rgba(0,0,0,0.05)] select-none z-50"
      >
        {/* Animated Active Background Pill */}
        <div
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 self-stretch rounded-full bg-zinc-950 dark:bg-white transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`,
          }}
        />

        {/* Radio Items */}
        {FONTS.map((font, idx) => {
          const isSelected = activeFont === font.id;
          return (
            <label
              key={font.id}
              style={{ gridColumn: idx + 1, gridRow: 1 }}
              className={`relative z-10 flex cursor-pointer items-center justify-center rounded-full px-3 py-1 md:px-4 text-[13px] md:text-[15px] font-medium leading-[24px] md:leading-[28px] transition-colors duration-150 ${font.fontClass} ${
                isSelected
                  ? 'text-white dark:text-zinc-950'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]'
              }`}
            >
              <input
                type="radio"
                name="fontFamily"
                value={font.id}
                checked={isSelected}
                onChange={() => handleSelect(font.id)}
                className="sr-only"
              />
              <span>{font.label}</span>
            </label>
          );
        })}
      </div>

      {/* 3. Right: CTA Button */}
      <div className="flex items-center">
        <a
          href={ctaHref}
          className="group relative inline-flex items-center justify-center gap-1.5 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-3.5 h-9 md:h-10 md:px-4 text-[13px] md:text-[14px] font-medium transition-all duration-150 hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          <span className="hidden sm:inline">Get It</span>
          <svg
            viewBox="0 0 16 16"
            className="h-4 w-4 shrink-0 transition-transform group-hover:translate-y-0.5"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.75 5.25V4.5h-1.5v4.94L5.78 7.97l-.53-.53L4.19 8.5l.53.53 2.75 2.75c.3.3.77.3 1.06 0l2.75-2.75.53-.53-1.06-1.06-.53.53-1.47 1.47zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
```

---

## 5. Instructions for Another AI Model or Developer to Imply / Implement

When instructing an LLM or implementing this elsewhere:
1. **Preserve the `fixed` centering trick**: The font selector is not merely flex-centered inside the flow—it uses `fixed top-X left-1/2 -translate-x-1/2` so it remains locked at the optical top center regardless of logo or CTA widths.
2. **Accessible Radio Semantics**: Use native `<input type="radio" className="sr-only" />` inside labels so keyboard users can navigate with arrow keys naturally.
3. **Typography Sample per Tab**: Each tab should apply its corresponding font family class (`font-sans`, `font-serif`, `font-mono`) directly to its label so the user previews the typeface even before clicking.
4. **Fluid Indicator**: Implement the sliding indicator using CSS Grid `col-start-1 row-start-1` and `translateX(calc(100% * i + i * gap))` to avoid measuring DOM elements with JavaScript.
