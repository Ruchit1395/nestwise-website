# Google Analytics 4 Setup for NestWise Website

## Overview
This document describes the Google Analytics 4 (GA4) implementation for the NestWise website, which tracks user behavior, conversions, and engagement metrics.

## What's Tracked

### 1. Page Views & Navigation
- **Automatic tracking** of all page visits
- **Page titles** and **URLs** for each route
- **Navigation flow** between pages
- **Time spent** on each page

### 2. Pricing Interactions
- **Pricing button clicks** on all pricing cards
- **Tier selection** (Basic, Professional, Enterprise)
- **Price points** clicked
- **CTA button text** clicked

### 3. CTA (Call-to-Action) Tracking
- **Primary CTA**: "Track My REPS NOW!" button
- **Email CTA**: "Send Email Now" button
- **Button location** and **context**
- **Click frequency** and **conversion rates**

### 4. User Engagement
- **Scroll depth** (25%, 50%, 75%, 100%)
- **Time on page** (minimum 1 second)
- **Blog post interactions**
- **Feature exploration**

### 5. Blog Analytics
- **Blog post views**
- **Category interactions**
- **Read time** and **engagement**

## Technical Implementation

### Files Modified
- `index.html` - GA4 tracking script
- `src/services/analytics.ts` - Analytics service
- `src/hooks/useAnalytics.ts` - React hook for tracking
- `src/components/PricingCard.tsx` - Pricing click tracking
- `src/components/BlogCard.tsx` - Blog interaction tracking
- `src/pages/*.tsx` - Page-level analytics
- `src/components/CookieConsent.tsx` - Privacy compliance

### GA4 Configuration
```javascript
gtag('config', 'G-91QB6R05JY', {
  page_title: 'NestWise LLC - REPS Compliance Tracking Platform',
  custom_map: {
    'custom_parameter_1': 'platform',
    'custom_parameter_2': 'source'
  },
  anonymize_ip: true,
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});
```

## Privacy & Compliance

### Cookie Consent
- **Cookie consent banner** for EU/GDPR compliance
- **Analytics disabled** until user accepts
- **Local storage** for consent preferences
- **Easy opt-out** option

### Data Protection
- **IP anonymization** enabled
- **No personal data** collection
- **Platform identification** (web vs app)
- **Secure data transmission**

## Custom Events

### Pricing Clicks
```javascript
gtag('event', 'pricing_click', {
  event_category: 'Pricing',
  event_label: 'Professional - $29',
  button_text: 'Get Started',
  platform: 'web',
  value: 1
});
```

### CTA Clicks
```javascript
gtag('event', 'cta_click', {
  event_category: 'CTA',
  event_label: 'Primary CTA',
  button_text: 'Track My REPS NOW!',
  location: 'Hero Section',
  platform: 'web',
  value: 1
});
```

### Blog Interactions
```javascript
gtag('event', 'blog_interaction', {
  event_category: 'Blog',
  event_label: 'Blog Post Click',
  blog_title: 'REPS Compliance Guide',
  platform: 'web',
  value: 1
});
```

## Dashboard Setup

### 1. Create Custom Reports
- **Pricing Conversion Funnel**
- **CTA Performance Dashboard**
- **Blog Engagement Metrics**
- **User Journey Analysis**

### 2. Set Up Goals
- **Pricing page visits**
- **CTA button clicks**
- **Contact form submissions**
- **Blog post reads**

### 3. Audience Segments
- **High-intent users** (pricing page visitors)
- **Blog readers**
- **Return visitors**
- **Cross-platform users**

## Testing & Verification

### 1. Real-time Testing
- Use **GA4 Real-time reports**
- Check **Events** section
- Verify **Page views** are firing
- Test **Custom events**

### 2. Debug Mode
- Open **Browser Console**
- Look for **GA4 logs**
- Verify **Event firing**
- Check **Data layer**

### 3. Tag Assistant
- Install **Google Tag Assistant**
- Verify **GA4 configuration**
- Check **Event tracking**
- Validate **Data flow**

## Metrics You'll See

### Visitor Analytics
- **Total visitors** (unique and returning)
- **Page views** per session
- **Bounce rate** by page
- **Session duration**

### Conversion Tracking
- **Pricing page conversion rate**
- **CTA click-through rate**
- **Form submission rate**
- **Blog engagement rate**

### User Behavior
- **Most popular pages**
- **User flow** through site
- **Exit pages** analysis
- **Mobile vs desktop** usage

## Troubleshooting

### Common Issues
1. **Events not firing** - Check consent settings
2. **Data not appearing** - Wait 24-48 hours
3. **Page views missing** - Verify script loading
4. **Custom events failing** - Check console errors

### Debug Steps
1. **Verify GA4 script** is loaded
2. **Check consent status** in localStorage
3. **Monitor console** for errors
4. **Test in incognito** mode
5. **Verify Measurement ID** is correct

## Support & Maintenance

### Regular Tasks
- **Monitor data quality** weekly
- **Check conversion rates** monthly
- **Update event tracking** as needed
- **Review privacy compliance** quarterly

### Performance Optimization
- **Lazy load** analytics where possible
- **Minimize script impact** on page load
- **Optimize event firing** frequency
- **Monitor Core Web Vitals**

## Next Steps

1. **Deploy changes** to production
2. **Wait 24-48 hours** for data to appear
3. **Set up custom reports** in GA4
4. **Create conversion goals**
5. **Monitor performance** and optimize

---

**Note**: This implementation works alongside your existing Vercel Analytics and Firebase Analytics, providing comprehensive tracking across all platforms.
