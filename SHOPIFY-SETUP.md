# SHOPIFY INTEGRATIE - STAPPENPLAN

## 1. Shopify Store Aanmaken

1. Ga naar: https://www.shopify.com/nl/free-trial
2. Maak account aan (14 dagen gratis)
3. Store naam: "FOLLICLE" of "Reviven"

## 2. Product Toevoegen

**Productnaam**: FOLLICLE Hair Growth Serum 18%

**Beschrijving**:
```
Stop je haarverlies in 90 dagen. Of geld terug.

✓ 88.9% effectiviteit (vs 60% Minoxidil)
✓ Geen bijwerkingen zoals bij medicijnen
✓ Klinisch bewezen in 24-weken studie
✓ 18% actieve ingrediënten (Redensyl, Capixyl, Procapil)

Resultaat zichtbaar in 8-12 weken.
90 dagen geld-terug garantie.
```

**Pricing**:
- Eenmalig: €59
- Abonnement: €39/maand

**Variants**:
- One-time purchase (€59)
- Monthly subscription (€39)

**Afbeeldingen**: Upload je productfoto's

## 3. Recharge Subscriptions Installeren

1. In Shopify Admin → Apps → Zoek "Recharge"
2. Installeer Recharge Subscriptions
3. Setup subscription product:
   - Frequency: Elke maand
   - Discount: 34% (€59 → €39)
   - Min commitment: Geen

## 4. API Credentials Ophalen

### Storefront API Token:
1. Shopify Admin → Settings → Apps and sales channels
2. Develop apps → Create app
3. App naam: "FOLLICLE Frontend"
4. Configure Storefront API:
   - Selecteer: `unauthenticated_read_product_listings`
   - Selecteer: `unauthenticated_write_checkouts`
5. Install app
6. Kopieer **Storefront API access token**

### Admin API Token (voor Recharge):
1. Settings → Apps and sales channels → Develop apps
2. Configure Admin API:
   - Products: Read/Write
   - Orders: Read/Write
3. Kopieer **Admin API access token**

## 5. Vercel Environment Variables

Ga naar: https://vercel.com/robins-projects-a0b86503/follicle/settings/environment-variables

Voeg toe:
```
NEXT_PUBLIC_SHOPIFY_DOMAIN=jouw-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=shpat_xxxxx
SHOPIFY_ADMIN_TOKEN=shpat_xxxxx (voor server-side)
```

Save en redeploy.

## 6. Code Integratie (Ik doe dit voor je)

Zodra je de tokens hebt, stuur ze naar mij en ik:
1. Integreer Shopify Storefront API
2. Koppel "Add to Cart" buttons
3. Setup checkout flow
4. Integreer Recharge subscriptions
5. Test complete flow

## 7. Payment Setup

1. Shopify Admin → Settings → Payments
2. Activeer:
   - **iDEAL** (primair voor NL)
   - **Credit Cards** (Visa, Mastercard)
3. Test mode aan tot je live gaat

## 8. Shipping

1. Settings → Shipping and delivery
2. Voeg toe:
   - Nederland: Gratis (>€0)
   - België: Gratis (>€0)
3. Processing time: 1-2 days

## 9. Testen

Test checkout met Shopify test cards:
- Success: `1` (Bogus Gateway)
- Decline: `2`

## 10. Live Gaan

1. Kies Shopify plan (Basic €29/maand)
2. Verwijder test mode
3. Test met echte betaling
4. GO LIVE 🚀

---

**Tijd**: ~45 minuten als je alles volgt.

**Stuur me de tokens zodra je ze hebt** en ik integreer alles in de code.
