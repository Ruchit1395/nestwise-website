export interface TestimonialType {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FeatureType {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  visual?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}