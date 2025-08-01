import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 19,
    period: 'month',
    description: 'Perfect for new investors',
    features: [
      'Basic time tracking',
      'Standard reports',
      'Email support',
      'Mobile app access',
      'Up to 2 properties'
    ],
    cta: 'Start Basic Plan'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 29,
    period: 'month',
    description: 'Most popular for active investors',
    features: [
      'Advanced time tracking',
      'Professional audit reports',
      'Priority email support',
      'Smart alerts & reminders',
      'Unlimited properties',
      'CPA collaboration tools',
      'Advanced analytics'
    ],
    popular: true,
    cta: 'Start Professional Plan'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 49,
    period: 'month',
    description: 'For serious portfolio owners',
    features: [
      'Everything in Professional',
      'White-glove setup',
      'Phone support',
      'Custom integrations',
      'Team collaboration',
      'Advanced compliance tools',
      'Dedicated account manager'
    ],
    cta: 'Start Enterprise Plan'
  }
];