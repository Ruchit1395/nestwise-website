// Google Analytics 4 Service
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export class AnalyticsService {
  private static instance: AnalyticsService;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  // Initialize GA4
  public init(): void {
    if (typeof window !== 'undefined' && window.gtag && !this.isInitialized) {
      this.isInitialized = true;
      console.log('GA4 Analytics initialized');
    }
  }

  // Track page views
  public trackPageView(pageTitle: string, pagePath: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: pagePath,
        platform: 'web'
      });
    }
  }

  // Track pricing clicks
  public trackPricingClick(tierName: string, tierPrice: string, buttonText: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'pricing_click', {
        event_category: 'Pricing',
        event_label: `${tierName} - $${tierPrice}`,
        button_text: buttonText,
        platform: 'web',
        value: 1
      });
    }
  }

  // Track CTA clicks
  public trackCTAClick(ctaType: string, buttonText: string, location: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'CTA',
        event_label: ctaType,
        button_text: buttonText,
        location: location,
        platform: 'web',
        value: 1
      });
    }
  }

  // Track form submissions
  public trackFormSubmission(formType: string, formName: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Form',
        event_label: formType,
        form_name: formName,
        platform: 'web',
        value: 1
      });
    }
  }

  // Track blog interactions
  public trackBlogInteraction(action: string, blogTitle: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'blog_interaction', {
        event_category: 'Blog',
        event_label: action,
        blog_title: blogTitle,
        platform: 'web',
        value: 1
      });
    }
  }

  // Track feature interactions
  public trackFeatureInteraction(featureName: string, action: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'feature_interaction', {
        event_category: 'Feature',
        event_label: featureName,
        action: action,
        platform: 'web',
        value: 1
      });
    }
  }

  // Track user engagement
  public trackEngagement(action: string, category: string, label?: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'user_engagement', {
        event_category: category,
        event_label: label || action,
        action: action,
        platform: 'web',
        value: 1
      });
    }
  }

  // Track scroll depth
  public trackScrollDepth(depth: number): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll', {
        event_category: 'Engagement',
        event_label: `Scroll Depth: ${depth}%`,
        scroll_depth: depth,
        platform: 'web'
      });
    }
  }

  // Track time on page
  public trackTimeOnPage(timeSpent: number, pageTitle: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: 'page_load',
        value: timeSpent,
        event_category: 'Timing',
        event_label: pageTitle,
        platform: 'web'
      });
    }
  }
}

// Export singleton instance
export const analytics = AnalyticsService.getInstance();
