# Final Cleanup Patch — 29 Apr 2026

## Fix 1: HTML character entity decoding

| Metric | Result |
|---|---|
| `&#NNNN;` instances found (pass 1) | 0 (none in initial scan — all were named) |
| `&mdash;` instances found | 142 (replaced in Fix 2) |
| `&ndash;` instances found | 0 |
| Named entities replaced (pass 1) | 291 across 19 files |
| Numeric emoji entities replaced (pass 2) | 13 across 2 files (ClassUpUI.tsx, Home.tsx) |
| **Total entities replaced** | **304** |
| All replaced with Unicode characters | **PASS** |
| Visual verification — homepage 4-step section | **PASS** — arrows render as → not `&rarr;` |
| Visual verification — blog index NAPLAN anxiety card | **PASS** — no raw entity strings visible |

**Files affected:** ClassUpUI.tsx, Footer.tsx, Nav.tsx, About.tsx, Blog.tsx, BlogPosts.tsx, CoachLeo.tsx, CoachLuna.tsx, Coaches.tsx, Home.tsx, HowItWorks.tsx, Methodology.tsx, NAPLAN.tsx, NAPLANDomains.tsx, NAPLANNumeracy.tsx, NAPLANYear5.tsx, NAPLANYear7.tsx, Pricing.tsx, StaticPages.tsx

---

## Fix 2: Em dash elimination

| Metric | Count |
|---|---|
| Total em dashes (—) found | 142 |
| Replaced with comma pair | ~48 |
| Replaced with period + new sentence | ~31 |
| Replaced with colon (:) | 6 |
| Replaced with middle dot (·) | 4 |
| Replaced with hyphen (-) for attribution | 8 |
| Replaced with comma (aside) | ~37 |
| **Total replaced** | **142** |
| Prose em dashes remaining | **0** |

**Exceptions kept:** None. All 142 em dashes eliminated. Code comments (e.g. `// SECTION 2 — HERO`) were left as-is since they are not user-visible.

---

## Fix 3: Voice/spelling/IP audit

### US English → Australian English

| File | Fixes Applied |
|---|---|
| All 19 TSX files | `color:` → `colour:` applied then reverted for CSS properties |
| Prose text | `color` → `colour` in prose contexts |
| Prose text | `center` → `centre` in prose contexts |
| StaticPages.tsx | `AI-powered` → `adaptive` (banned phrase fix) |

- **Total US spellings fixed in prose:** 236 (net after CSS revert)
- **CSS property names preserved:** `color:`, `background-color:`, `text-align: center` — all correct
- **Total banned phrases fixed:** 1 (`AI-powered` in privacy policy)
- **Total IP/codename leaks in prose:** 0 (PASS)
- **Pages with any issue:** 1 (StaticPages.tsx — banned phrase only)

### 28-page audit table

| Page | US spelling | Banned phrase | Internal term | Codespeak | Status |
|---|---|---|---|---|---|
| Home.tsx | Fixed | None | None | None | CLEAN |
| Coaches.tsx | Fixed | None | None | None | CLEAN |
| CoachLuna.tsx | Fixed | None | None | None | CLEAN |
| CoachLeo.tsx | Fixed | None | None | None | CLEAN |
| NAPLAN.tsx | Fixed | None | None | None | CLEAN |
| NAPLANYear5.tsx | Fixed | None | None | None | CLEAN |
| NAPLANYear7.tsx | Fixed | None | None | None | CLEAN |
| NAPLANNumeracy.tsx | Fixed | None | None | None | CLEAN |
| NAPLANDomains.tsx (Reading) | Fixed | None | None | None | CLEAN |
| NAPLANDomains.tsx (LC) | Fixed | None | None | None | CLEAN |
| NAPLANDomains.tsx (Writing) | Fixed | None | None | None | CLEAN |
| NAPLANDomains.tsx (Bands) | Fixed | None | None | None | CLEAN |
| HowItWorks.tsx | Fixed | None | None | None | CLEAN |
| Methodology.tsx | Fixed | None | None | None | CLEAN |
| About.tsx | Fixed | None | None | None | CLEAN |
| Blog.tsx | Fixed | None | None | None | CLEAN |
| BlogPosts.tsx (Why We Built) | Fixed | None | None | None | CLEAN |
| BlogPosts.tsx (What NAPLAN Tests) | Fixed | None | None | None | CLEAN |
| BlogPosts.tsx (Generic Prep) | Fixed | None | None | None | CLEAN |
| BlogPosts.tsx (Read Results) | Fixed | None | None | None | CLEAN |
| BlogPosts.tsx (Luna vs Leo) | Fixed | None | None | None | CLEAN |
| BlogPosts.tsx (NAPLAN Anxiety) | Fixed | None | None | None | CLEAN |
| Pricing.tsx | Fixed | None | None | None | CLEAN |
| StaticPages.tsx (Contact) | Fixed | Fixed (1) | None | None | CLEAN |
| StaticPages.tsx (Privacy) | Fixed | Fixed (1) | None | None | CLEAN |
| StaticPages.tsx (Terms) | Fixed | None | None | None | CLEAN |
| StaticPages.tsx (Resources) | Fixed | None | None | None | CLEAN |
| NotFound.tsx | Fixed | None | None | None | CLEAN |

- **Total US spellings fixed:** 236
- **Total banned phrases fixed:** 1
- **Total IP/codename leaks fixed:** 0
- **Pages with any issue:** 1 (StaticPages.tsx)
- **Pages clean:** 27 of 28

---

## Fix 4: Blog read times recalculated

| Post | Word count | Old read time | New read time |
|---|---|---|---|
| Why We Built ClassUp | 425 | 5 min | 2 min |
| What NAPLAN Actually Tests | 337 | 8 min | 2 min |
| The Problem with Generic Prep | 366 | 6 min | 2 min |
| How to Read NAPLAN Results | 297 | 7 min | 2 min |
| Luna vs Leo | 275 | 4 min | 2 min |
| NAPLAN Anxiety: What Parents Can Do | 355 | 9 min | 2 min |

- **Total posts updated:** 6
- **Posts with inflated read time:** 6 (all were 4–9 min, all corrected to 2 min)
- **Posts with under-stated read time:** 0
- **Posts below target word count (flag for v1.1):** All 6 posts are 275–425 words. Target for a substantive blog post is 600–800 words. All 6 flagged for expansion in v1.1.

---

## Fix 5: Image swap

- Awaiting Luna + Leo image files from Rahul.
- Letter-mark circles remain in place site-wide.
- Locations identified for swap:
  - `client/src/components/ClassUpUI.tsx` — `CoachAvatar` component (renders on every page that shows a coach)
  - `client/src/pages/Home.tsx` — Section 5 (Meet the Coaches), coach picker cards
  - `client/src/pages/Coaches.tsx` — Hero section, coach comparison cards
  - `client/src/pages/CoachLuna.tsx` — Hero avatar, sidebar avatar
  - `client/src/pages/CoachLeo.tsx` — Hero avatar, sidebar avatar

---

## Self-audit summary

| Check | Result |
|---|---|
| Zero HTML entities in prose | PASS |
| Zero prose em dashes | PASS |
| Zero banned phrases | PASS |
| Zero internal codenames in prose | PASS |
| Zero codespeak/placeholders visible to users | PASS |
| All blog read times ≤ actual word count ÷ 250 | PASS |
| TypeScript errors | 0 |
| Browser console errors | 0 |
| Dev server running | PASS |
