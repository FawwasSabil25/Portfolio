# Portfolio Website Template & Design System Plan

> **Positioning:** Web Developer (Primary) | System Analysis & QA / Usability Testing (Secondary)  
> **Audience:** Technical Recruiters & Engineering Hiring Managers (10–15s initial scanning window)  
> **Visual Archetype:** *Modern Engineer — Editorial Minimalist Dark*  
> **Status:** Planning & Architectural Blueprint (Awaiting Approval)

---

## 1. Executive Summary & Design Philosophy

This document defines the template, design token architecture, component inventory, and layout blueprint for the personal portfolio.

### The Problem with Reference & Standard Developer Portfolios
- **The Reference:** `portfolio-fathir-iota.vercel.app` achieves strong atmospheric depth (dark base, cyan neon accent, 3-layer background), but relies heavily on terminal clichés (`cat`, `ls ./projects`, blinking carets, raw index numbers) and a heavy Three.js canvas (3D wireframes + 600 particles + scene fog). For an internship application, terminal costumes distract from actual craftsmanship, and 3D canvases impose heavy battery/CPU penalties on laptops and mobile devices.
- **Generic AI Portfolios:** Uninspired card grids, template "About Me" blurbs, fake statistics (`99.9% Uptime`), and identical hero layouts.

### Our Solution: *Modern Engineer — Editorial Minimalist Dark*
1. **Atmospheric & Technical, Not Costume:** Retain the deep obsidian canvas (`#090a10`), high-contrast slate hierarchy, and restrained electric cyan accent (`#06b6d4` / `#22d3ee`).
2. **Performance-First Lightweight Backdrop:** Zero Three.js runtime overhead. Pure CSS radial ambient glows + an ultra-lightweight SVG dot/hairline grid + vignette overlay. 60 FPS across all devices.
3. **Information Architecture Tailored to Internships:** Highlights problem-solving, real technical contribution, system analysis, and quality assurance right in the project and skills narrative.
4. **Accessible & Responsive:** Meets WCAG 2.1 AA standards (minimum 4.5:1 text contrast), 44px minimum tap targets, full keyboard navigability with visible focus indicators.

---

## 2. Layout & Container Architecture

### 2.1 Page Width & Grid System
- **Viewport Frame:** Fluid full-width viewport with fixed horizontal gutters:
  - Mobile (`< 640px`): `16px` padding
  - Tablet (`640px – 1023px`): `24px` padding
  - Desktop (`>= 1024px`): `32px` padding
- **Max Container Measure:** `--container-max: 1120px` (centered via `margin-inline: auto`).
- **Section Vertical Rhythm:**
  - Mobile: `64px` to `80px` padding block
  - Desktop: `104px` to `128px` padding block
  - Consistent vertical whitespace between major sections to prevent clutter and allow the eye to rest.

### 2.2 Global Structural Composition
```
┌─────────────────────────────────────────────────────────────┐
│ [Sticky Header]  Logo / Name    Nav Anchors    [Resume CTA] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ [Hero Section]                                              │
│   - Editorial Status Pill: "Seeking Summer/Fall Internship" │
│   - 2-line Crisp H1: Role + Impact Focus                    │
│   - Value Statement: Web Dev + QA / System Analysis         │
│   - Action Row: Primary Action + Direct Links (GH / LI)     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ [Featured Projects] (2–3 Flagship Case Studies)             │
│   - Asymmetrical editorial layout (not a 3-box clone)       │
│   - Problem Context -> Architecture/Role -> Outcomes        │
│   - Stack Tags & Verified Links (Code / Demo)               │
├─────────────────────────────────────────────────────────────┤
│ [Technical Core & QA Strengths]                             │
│   - Frontend & Web Development                              │
│   - System Analysis, Testing & QA Methodologies             │
│   - Core Tools & Academic Foundations                       │
├─────────────────────────────────────────────────────────────┤
│ [Experience & Academic Milestones]                          │
│   - Clean chronological flow (Internships / Labs / Projects)│
│   - Evidence-driven bullet points                           │
├─────────────────────────────────────────────────────────────┤
│ [Contact / Direct Communication]                            │
│   - Primary Mailto + LinkedIn + Scheduling                  │
│   - Timezone & Availability notice                          │
├─────────────────────────────────────────────────────────────┤
│ [Footer]  Name/Wordmark   Copyright   Source Link           │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Design System & Token Architecture

All styles are powered by standard CSS Custom Properties without heavy third-party CSS dependencies.

### 3.1 Color Tokens
| Token | Value | Semantic Purpose |
| :--- | :--- | :--- |
| `--bg-base` | `#08090d` | Deep obsidian backdrop with slight cool undertone |
| `--bg-surface` | `#0f1118` | Elevated card & panel surface |
| `--bg-surface-hover` | `#151822` | Surface hover state |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Hairline structural card and section boundaries |
| `--border-strong` | `rgba(255, 255, 255, 0.16)` | Focused and active borders |
| `--fg-primary` | `#f8fafc` | Maximum contrast heading and primary copy (Contrast > 15:1) |
| `--fg-secondary` | `#94a3b8` | Muted cool slate for body paragraphs and descriptions |
| `--fg-muted` | `#64748b` | Subdued metadata, dates, and labels |
| `--accent` | `#06b6d4` | Electric cyan brand accent (links, active indicators) |
| `--accent-hover` | `#22d3ee` | Interactive highlight cyan |
| `--accent-subtle` | `rgba(6, 182, 212, 0.12)` | Badge and chip background tint |
| `--accent-glow` | `rgba(6, 182, 212, 0.25)` | Restrained glow for focus rings and hero spotlight |

### 3.2 Typography System
To balance modern editorial readability with an authentic technical voice:
- **Body & Headlines (Primary Sans):** `Inter`, `Plus Jakarta Sans`, or native system fallback (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`).
  - H1 Display: `clamp(2.25rem, 5vw, 3.5rem)`, weight 700, line-height 1.15, letter-spacing `-0.025em`.
  - H2 Section: `clamp(1.75rem, 3.5vw, 2.25rem)`, weight 600, line-height 1.25, letter-spacing `-0.02em`.
  - H3 Card Title: `1.25rem` (`20px`), weight 600, line-height 1.35.
  - Body Copy: `1rem` (`16px`), line-height 1.6, weight 400 (`--fg-secondary`).
- **Code & Metadata (Technical Monospace):** `JetBrains Mono`, `ui-monospace`, `monospace`.
  - Used strictly for: Stack badges, commit/date tags, technical metrics, and code snippets.
  - Size: `0.8125rem` (`13px`), weight 500, letter-spacing `0.02em`.
  - *No oversized monospace headings or decorative fake commands.*

### 3.3 Border & Radius System
- `--radius-sm`: `4px` (Tags, stack badges, inline code)
- `--radius-md`: `8px` (Buttons, inputs, dropdown items)
- `--radius-lg`: `12px` (Cards, panels, modal containers)
- `--radius-full`: `9999px` (Status indicators and pill badges only)
- *Rationale:* Avoids the excessive all-pill aesthetic while maintaining crisp, professional corner radiuses.

### 3.4 Depth, Elevation & Glow Rules
- Restrained elevation: Background tone steps (`#08090d` to `#0f1118`) rather than muddy drop-shadows.
- Dose cap on glow: Only **one** ambient glow behind the hero and a subtle `0 0 12px var(--accent-subtle)` on active/hovered primary CTAs. No glow on every border or text element.

---

## 4. Background Implementation (Lightweight & 60 FPS)

Instead of bundle-heavy WebGL/Three.js runtimes (which drain battery and inflate bundle size by 600KB+), we use a high-performance, GPU-accelerated 3-layer CSS solution:

1. **Layer 1: Canvas Base**
   - Deep solid tone: `background-color: var(--bg-base);`
2. **Layer 2: Ambient Spotlight (Radial Aurora)**
   - Top-centered subtle radial gradient:
     ```css
     background-image: radial-gradient(circle at 50% -10%, rgba(6, 182, 212, 0.15) 0%, rgba(8, 9, 13, 0) 65%);
     ```
3. **Layer 3: Subtle Micro-Grid Pattern (SVG Data URI / CSS repeating pattern)**
   - Ultra-low opacity (3%–5%) SVG grid (24px × 24px) providing subtle engineering texture without visual noise or contrast degradation.
4. **Layer 4: Peripheral Vignette**
   - Soft radial gradient around screen perimeters to focus attention on central editorial content.

*Performance Impact:* Zero JavaScript execution, zero animation CPU cycles at rest, instant paint (0ms TBT).

---

## 5. Reusable Component Inventory (Template Scope)

The template consists of clean, accessible semantic building blocks:

1. **SiteHeader / Navbar**
   - Brand Wordmark (Name / Initials).
   - Anchor links (`#projects`, `#skills`, `#experience`, `#contact`).
   - Availability Badge: Animated emerald/cyan live status dot (`Available for Internship`).
   - Resume Download CTA.
   - Mobile Hamburger Menu with full keyboard trap and Escape dismiss.

2. **Button & Link Primitives**
   - `ButtonPrimary`: High-contrast solid accent or high-visibility button with accessible focus ring.
   - `ButtonSecondary`: Subtle bordered outline with smooth background fill transition on hover.
   - `LinkExternal`: Text link with inline SVG arrow that respects screen-readers (`aria-label`).

3. **SectionHeader**
   - Eyebrow indicator: Monospace category marker (`01 // PROJECTS` or `TECHNICAL CAPABILITIES`).
   - H2 Section Title.
   - Optional 1-sentence context blurb explaining relevance to hiring managers.

4. **ProjectCard (Flagship Layout)**
   - Asymmetric composition: 2-column on desktop (Media/Preview on one side, context on the other).
   - Problem & Solution summary.
   - "My Technical Role" badge (highlighting Web Dev or QA/Testing contributions).
   - Tech Stack Tag cloud (`Tag` component).
   - Real action links (`View Code`, `Live Preview`, or `Architecture Notes`).

5. **SkillMatrix / CompetencyBlock**
   - Distinct categorization:
     1. *Core Web Engineering* (Modern frameworks, responsive layout, APIs).
     2. *System Analysis & Architecture* (Flow diagrams, requirement modeling, DB design).
     3. *Quality Assurance & Testing* (Test cases, usability testing, performance audits).
   - Pill chips with subtle borders (`--border-subtle`) and crisp typography.

6. **TimelineItem (Experience & Academic)**
   - Clean linear track with subtle node indicators.
   - Role / Degree, Organization / University, Date span.
   - Key demonstrable achievements in clear, scannable bullet points.

7. **ContactPanel**
   - Direct clickable email (`mailto:`) with pre-filled subject template.
   - LinkedIn & GitHub external links.
   - Availability and response-time note.

8. **Empty / Loading / Error Fallback States**
   - Reusable card wrappers supporting clean placeholder / state transitions per quality guidelines.

---

## 6. Responsive Adaptation & Accessibility Strategy

### 6.1 Breakpoint Strategy
- **Mobile (`< 640px`):** Single-column stacked layouts, navigation collapses into accessible drawer/sheet, all buttons stretch to full width or min 44px height for touch targets.
- **Tablet (`640px – 1023px`):** 2-column project cards, navigation links visible, generous touch padding.
- **Desktop (`>= 1024px`):** Full editorial spacing, side-by-side flagship project showcases, sticky header with backdrop filter.

### 6.2 Accessibility Locks (WCAG 2.1 AA)
- Contrast ratio between text and surface strictly `>= 4.5:1`.
- Keyboard navigation: All interactive buttons and links have visible focus outlines (`outline: 2px solid var(--accent); outline-offset: 2px;`).
- Native semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- Motion safety: All CSS transitions and animations wrapped inside `@media (prefers-reduced-motion: no-preference)`.

---

## 7. Content Separation & Implementation Boundary

To ensure no fake content or unauthorized claims are introduced, the template strictly separates **scaffolding** from **data**:

| Element | Template Scope (Can Be Built Now) | Personal Content Scope (To Be Injected Later) |
| :--- | :--- | :--- |
| **Theme & Tokens** | Complete CSS token files, reset, container system, background layers | None |
| **Components** | Structural HTML/React components, props interfaces, accessible states | None |
| **Data Models** | TypeScript interfaces (`Project`, `SkillCategory`, `ExperienceItem`) | None |
| **Hero** | Typography scales, layout grid, social button wrappers | Candidate name, specific title, personal bio |
| **Projects** | Card template, layout variants, responsive tags, link slots | Specific project titles, screenshots, GitHub URLs |
| **Skills** | Category cards, badge chips, layout grouping | Specific list of mastered technologies & coursework |
| **Experience** | Timeline track, date styling, bullet list formatting | Specific employment history, university name, dates |
| **Contact** | Contact block layout, mailto triggers, social link grid | Candidate email address, LinkedIn profile URL |

---

## 8. Proposed Project & Directory Structure

Recommended lightweight, modern stack: **Vite + React (or Vanilla HTML/CSS) + TypeScript**.
*(Zero unnecessary bloated dependencies; no heavy 3D canvas libraries).*

```
new-porto/
├── docs/
│   ├── REFERENCE_RESEARCH.md
│   └── PORTFOLIO_TEMPLATE_PLAN.md
├── src/
│   ├── assets/               # Local icons, SVG graphics, profile picture
│   ├── styles/
│   │   ├── tokens.css        # Color palette, spacing, typography scales
│   │   ├── reset.css         # Modern baseline reset
│   │   ├── background.css    # Multi-layer ambient background (CSS-only)
│   │   └── global.css        # Utility classes and layout container rules
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── SkillsSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       └── ContactSection.tsx
│   ├── types/
│   │   └── portfolio.ts      # Type definitions for projects, skills, experience
│   ├── data/
│   │   └── portfolioData.ts  # Clean configuration file holding verified user content
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── tsconfig.json
```

---

## 9. Implementation Sequence for the Builder Agent

Once approved, the implementation proceeds through the following disciplined phases:

1. **Phase 1: Project Scaffolding & Design Foundation**
   - Initialize Vite + React + TypeScript in `New Porto`.
   - Setup `tokens.css` with the verified obsidian-cyan color palette, typography scales, and responsive spacing tokens.
   - Implement the lightweight multi-layer CSS background (no Three.js).

2. **Phase 2: Core Primitives & Layout Shell**
   - Build `Container`, `Navbar`, and `Footer`.
   - Implement `Button`, `Badge`, and `SectionHeader` with accessibility focus indicators.
   - Validate mobile drawer and viewport padding.

3. **Phase 3: Section Templates & Mock Props**
   - Build `HeroSection` template.
   - Build `ProjectsSection` with flagship case study card layout.
   - Build `SkillsSection` highlighting Web Dev + QA / System Analysis.
   - Build `ExperienceSection` (Timeline) and `ContactSection`.

4. **Phase 4: Verification & Gate Audit**
   - Verify keyboard accessibility (`Tab`, `Shift+Tab`, visible focus rings).
   - Test responsive layout at 375px, 768px, and 1280px viewports (0 horizontal overflow).
   - Check WCAG AA contrast compliance across all text nodes.

5. **Phase 5: Content Injection (User Turn)**
   - Fill `src/data/portfolioData.ts` with the user's verified projects, real links, resume file, and contact info.
