---
task_id: fd9b4d4b-dd9d-4490-a9de-687fc744c2f5
short_ref: T-KDCX
type: agent
cmd: run
attempt_no: 1
assignee_kind: vm
assignee_vm_id: 9bc094a9-54da-4abd-95ad-33e26b91ae83
assignee_vm_name: Content Agent Env
parent_task_id: null
created_by: MarcinTmp@biami.io
created_by_account_id: 47d64501-44da-4b93-ba49-e2a321005623
deliverable_dir: final-final-fianl/Build single-file HTML CSS JS landing page to replace matrixhq.ai/run 1
attachments: ["attachments/biami-logo-10x-web.png"]
---

# Build single-file HTML/CSS/JS landing page to replace matrixhq.ai

Build a complete, production-ready marketing landing page as a SINGLE self-contained file (index.html) with all CSS and JS inline — no external build step, no framework, no CDN dependencies except optional Google Fonts. The page replaces the current matrixhq.ai homepage and should closely match its existing design language (same look and feel).

BRAND ASSET:
- Use the provided logo file at ./.matrix_inputs/biami-logo-10x-web.png. Copy it into the repo alongside index.html (e.g. ./assets/logo.png) and reference it in the header/nav and footer. Use 'Matrix' as the product/brand name in text.

DESIGN DIRECTION:
- Match the current matrixhq.ai aesthetic: modern enterprise SaaS, dark theme, clean typography, generous spacing, subtle gradients/glow accents, rounded cards. Use a sensible dark palette (deep near-black background, high-contrast white text, an accent color pulled from the logo). Mobile-responsive across breakpoints. If any visual detail is ambiguous, use best judgment consistent with a polished enterprise AI landing page.

PAGE CONTENT / SECTIONS (use this exact copy):

1) HERO
- Headline (stacked, three lines): 'Ask Anything. Know Everything. Do It All.'
- Subhead: 'Matrix is the enterprise superintelligence platform that unifies all your company data into one secure AI brain for instant answers and automated execution. No sensitive data is ever shared with external AI models.'
- Two CTA buttons: primary 'Start Free', secondary 'Request Demo'.
- Two trust badges/pills: 'Zero data exposure to external AI' and 'First 10,000 records free'.
- Hero visual: an interactive-looking CHAT DEMO mockup panel labeled 'Matrix' with a 'Live' indicator. Show a sample conversation:
   • A message from 'CEO' (timestamp '2 min ago'): 'What's our MRR growth over the past 6 months, and which segment is driving it?'
   • A reply from 'Matrix' (timestamp 'just now'): 'MRR reached $190.4K in June, up 34% from $142.1K in January. Enterprise drove 59% of total.'
   • Below the reply, render a small BAR CHART of 6 months (Jan–Jun) with labels showing $142K at the start rising to $190K at the end. Animate the bars growing in on load with JS.
   • A caption line under the chart: 'finance.mrr_monthly · queried in-infrastructure'.
   • A disabled/placeholder input at the bottom: 'Ask anything about your business…'.

2) 'Built for enterprise leadership' — a row/grid of role pills: CEO, CFO, COO, CTO, CIO, CMO, CRO, CISO, CPO. Subtext: 'Strategy, Value, Ops & Growth'.

3) 'Trusted technology by' — a logo/wordmark strip listing these company names as styled text (no need to fetch real logos): Orange, Tesco, Procter & Gamble, BNP Paribas, SEKO Logistics, Cadmatic, Xoriant, Mobia. A subtle horizontal scroll/marquee is fine.

4) '01 · The Problem' section — heading 'Your business knows the answer. Your tools can't tell you.' Intro: 'Enterprise intelligence is trapped inside fragmented systems and slow reporting cycles. Every strategic question becomes a project. Every AI tool raises a security question.' Four cards:
   • Fragmented data systems — 'CRM, finance, support and storage each hold a piece of the truth, and none of them talk to each other.'
   • Slow reporting cycles — 'Answers that should take seconds take days, routed through analysts, spreadsheets and stale dashboards.'
   • Decision bottlenecks — 'Leadership waits on reports instead of acting. The cost of every delayed call compounds across the business.'
   • External AI risk — 'Generic AI tools mean handing sensitive company data to models you don't control. Most enterprises can't accept that.'

5) '02 · The Solution' section — heading 'One secure intelligence layer for the entire company.' Intro: 'Matrix is a unified AI brain that sits across your business. It connects every system, understands plain-language questions, and returns real-time answers, without your data ever leaving your control.' Three cards:
   • Unified intelligence layer — 'A single brain spanning CRM, finance, support and storage: one source of truth for the whole organisation.'
   • Secure AI integration layer — 'Data is queried directly inside your infrastructure. The raw data never touches an external model.'
   • Natural language queries — 'Ask any business question the way you'd ask a colleague. No query languages, no dashboards, no analyst in the loop.'

6) FOOTER — logo, brand name 'Matrix', a short tagline, and a repeat of the primary CTA ('Start Free'). Include simple placeholder nav links (Product, Security, Company, Contact).

INTERACTIVITY (vanilla JS, inline):
- Sticky/transparent-to-solid nav on scroll.
- Smooth scrolling for any in-page anchor links.
- Scroll-reveal fade/slide-in animations for sections and cards (IntersectionObserver).
- Animate the hero MRR bar chart bars on load.
- Add small hover states on cards and buttons. Buttons don't need real destinations (use '#').

ACCEPTANCE CRITERIA:
- One file (index.html) opens correctly in a browser with no console errors and no external network calls required (fonts optional).
- All copy above appears verbatim; layout visually resembles a polished dark enterprise SaaS site in the spirit of matrixhq.ai.
- Fully responsive: hero stacks cleanly on mobile, card grids collapse to single column, role pills and client strip wrap/scroll gracefully.
- Logo asset is wired in from the provided file.
- Deliver index.html (and the copied logo asset) committed to the repo root. Include a brief note in the commit/PR describing what was built.
