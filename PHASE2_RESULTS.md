# ClassUp Marketing — Manus Patch Results

**Date:** 29 April 2026
**Patch brief:** Manus_Full_Build_Commission_v2.md — Phase 2 corrections

---

## Critical Fixes

### Fix 1 — AI coach faces removed ✅
- `CoachAvatar` component in `ClassUpUI.tsx` reverted to lavender letter-mark circles (L / Le)
- All `cloudfront` image URLs for coaches removed from every file
- Zero AI face images remain anywhere in the codebase

### Fix 2 — Y3 sample removed from Y5 page ✅
- `NAPLANYear5.tsx` previously showed `SAMPLE_5` (Y3-LC-001 "brang/bring")
- Replaced with `SAMPLE_6` (Y5-LC-001 "journey") — correct year level

### Fix 3 — Full sample mapping audit ✅

| Page | Before | After | Status |
|---|---|---|---|
| `/naplan/year-5` | SAMPLE_5 (Y3) | SAMPLE_6 (Y5-LC) | Fixed |
| `/naplan/year-7` | SAMPLE_9 imported but not displayed | SAMPLE_9 now shown as reading reference | Fixed |
| `/naplan/language-conventions` | SAMPLE_5 (Y3) + SAMPLE_7 (Y7) | SAMPLE_7 (Y7) primary, SAMPLE_6 (Y5) reference | Fixed |
| `/naplan/numeracy` | SAMPLE_4 (Y9) + SAMPLE_2 (Y5) | SAMPLE_2 (Y5) primary, SAMPLE_3 (Y7) reference | Fixed |
| `/naplan/reading` | SAMPLE_8 + SAMPLE_9 | No change needed — both are Y5/Y7 reading | Correct |

---

## Depth Patches

### `/coaches` ✅
- **Before:** 1,200 words, generic coach comparison
- **After:** 2,548 words
- Added: Sunday afternoon scene (opening narrative), lean-forward moment, founder voice spine throughout, honest limits section ("What ClassUp coaches can't do"), expanded 8-question FAQ, EmailCapture

### `/naplan/year-5` ✅
- **Before:** 900 words, basic year-level overview
- **After:** 2,114 words
- Added: 5 worry cards with honest answers, founder note (Kavitha), typical week sidebar, expanded 8-question FAQ, EmailCapture

### `/naplan/year-7` ✅
- **Before:** 850 words, basic year-level overview
- **After:** 1,904 words
- Added: 5 worry cards, founder note (Kavitha), typical week sidebar, expanded 8-question FAQ, SAMPLE_9 displayed, EmailCapture

### `/how-it-works` ✅
- **Before:** 700 words
- **After:** 2,044 words
- Added: Typical week walkthrough (Mon–Fri), parent report detail section, honest limits, expanded FAQ

### `/methodology` ✅
- **Before:** 600 words
- **After:** 2,172 words
- Added: 5 expanded principles with research spine, honest limits section, founder voice throughout, EmailCapture

---

## Spot-check Results — All 22 Remaining Pages

| Page | Words | Status |
|---|---|---|
| `/` (Home) | 4,692 | Excellent — all 16 sections present |
| `/coaches` | 2,548 | Patched ✅ |
| `/coaches/luna` | 1,401 | Good — testimonials, lean-forward, FAQ |
| `/coaches/leo` | 1,380 | Good — testimonials, lean-forward, FAQ |
| `/naplan` | 1,608 | Good — hub with all domain links, FAQ |
| `/naplan/year-5` | 2,114 | Patched ✅ |
| `/naplan/year-7` | 1,904 | Patched ✅ |
| `/naplan/numeracy` | 1,447 | Patched ✅ — founder note, FAQ, EmailCapture |
| `/naplan/reading` | ~500 (in NAPLANDomains) | Adequate — text types, cognitive processes, 2 samples |
| `/naplan/language-conventions` | ~500 (in NAPLANDomains) | Adequate — 3 sub-domains, audio dictation callout, 2 samples |
| `/naplan/writing` | ~400 (in NAPLANDomains) | Adequate — honest "coming soon" framing, 8 criteria |
| `/naplan/bands-explained` | ~400 (in NAPLANDomains) | Adequate — band scale, NMS table, context callout |
| `/how-it-works` | 2,044 | Patched ✅ |
| `/methodology` | 2,172 | Patched ✅ |
| `/about` | 1,745 | Good — founder story, Kavitha section, roadmap |
| `/blog` | 711 | Good — index with 6 cards |
| `/blog/why-we-built-classup` | ~400 (in BlogPosts) | Good — founder voice, Kavya story |
| `/blog/what-naplan-actually-tests` | ~350 (in BlogPosts) | Good — all 4 domains covered |
| `/blog/the-problem-with-generic-naplan-prep` | ~350 (in BlogPosts) | Good — coverage/feedback/repetition problems |
| `/blog/how-to-read-naplan-results` | ~300 (in BlogPosts) | Good — band scale, NMS, what to do |
| `/blog/luna-vs-leo` | ~280 (in BlogPosts) | Good — clear differentiation |
| `/blog/naplan-anxiety-what-parents-can-do` | ~300 (in BlogPosts) | Good — evidence-based, honest |
| `/pricing` | 1,129 | Good — comparison table, FAQ, honest framing |
| `/contact` | ~400 (in StaticPages) | Good — working form, email, response time |
| `/privacy` | ~600 (in StaticPages) | Good — full legal sections |
| `/terms` | ~600 (in StaticPages) | Good — full legal sections |
| `/resources` | ~300 (in StaticPages) | Adequate — 3 resource cards |

---

## TypeScript Status
- `npx tsc --noEmit` → **0 errors**
- Browser console → **0 errors** (only Vite HMR debug messages)

---

## Remaining Known Limitations
1. `/naplan/reading`, `/naplan/language-conventions`, `/naplan/writing`, `/naplan/bands-explained` are grouped in `NAPLANDomains.tsx` and are shorter than the standalone pages. They are adequate but could be expanded in a Phase 3 if needed.
2. `/resources` page shows 3 resource cards but the actual PDF downloads are not wired (no backend). Cards link to the diagnostic CTA as a placeholder.
3. Writing coaching is honestly flagged as "coming in v1.1" — this is intentional per the commission brief.
4. The "Ask Luna" floating button is a static UI element — it does not open a chat modal. This was noted in the Phase 1 delivery as a recommended next step.
