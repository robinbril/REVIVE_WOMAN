# ⚡ CONVERSION FIXES DEPLOYED

## ✅ IMMEDIATE IMPACT CHANGES (Last 30 min)

### Copy & Psychology
- **Loss Aversion**: "Elke dag = 100 follikels, €10k transplant later"
- **CTA Rewrite**: "RISICO-VRIJ PROBEREN" (not "START NU")
- **Urgency**: Embedded throughout hero + FAQ

### UX Fixes
- **Scroll Anchor**: #prijzen werkt (smooth scroll)
- **GDPR Banner**: EU-compliant cookie consent
- **SEO**: Proper alt text on all images

### Legal
- **Cookie consent**: localStorage tracking
- **GA4 ready**: Consent management hooks

---

## 📊 NEXT 2 HOURS - CONVERSION CORE

### 1. REAL IMAGES (30 min) - IN PROGRESS
- ✅ Generated professional serum bottle
- ✅ Generated before/after medical style
- [ ] Replace all placeholders
- [ ] Test LCP <2s

### 2. GA4 EVENTS (30 min)
```javascript
// Hero CTA click
gtag('event', 'cta_hero_click', {
  'value': 39,
  'currency': 'EUR'
})

// Pricing view
gtag('event', 'view_pricing')

// Add to cart (when Shopify ready)
gtag('event', 'add_to_cart', {
  'value': 39,
  'items': [{ 'item_name': 'FOLLICLE Serum' }]
})
```

### 3. HOTJAR HEATMAP (15 min)
- Install Hotjar script
- Track first 100 visitors
- Identify drop-off points

### 4. A/B TEST SETUP (45 min)
Test CTA variants:
- A: "RISICO-VRIJ PROBEREN — €39"
- B: "STOP HAARVERLIES NU — €39"
- Winner = Ship to all traffic

---

## 🎯 WEEK 1 ROADMAP

### Day 1 (Vandaag)
- [x] Urgency copy
- [x] GDPR banner
- [x] Fixed anchors
- [ ] Real images deployed
- [ ] GA4 events live
- [ ] Hotjar installed

### Day 2
- [ ] Shopify checkout integration
- [ ] Test full funnel (10x manual)
- [ ] Seed 5 reviews (Judge.me)

### Day 3
- [ ] €100 Meta ads LIVE
- [ ] Track 100 visitors
- [ ] Measure bounce <40% or pivot copy

### Day 4-7
- [ ] Daily: Monitor conversie + feedback
- [ ] If >3% CVR: Scale to €500/week
- [ ] If <3% CVR: Iterate copy/visuals

---

## 💰 SUCCESS METRICS

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Bounce rate | <40% | TBD | Tracking |
| Time on site | >90s | TBD | Tracking |
| CTA click rate | >15% | TBD | Tracking |
| Conversion rate | >3% | 0% | Need traffic |
| LCP | <2s | TBD | Test |

---

## 🚨 KILL CRITERIA

IF na 100 visitors:
- Bounce >60% → Kill hero copy
- CTR <10% → Kill CTA
- Time <45s → Kill content flow

THEN: Pivot or iterate binnen 24u.

---

**LIVE URL**: https://follicle-ttg6.vercel.app
**Deployed**: ~2 min ago
**Next deploy**: After images added

Check localhost nu - urgency copy + GDPR banner should be visible.
