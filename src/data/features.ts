import { FeatureType } from '../types';

export const features: FeatureType[] = [
  {
    id: '1',
    icon: 'Target',
    title: 'Smart Logging',
    description: 'IRS-compliant time tracking with pre-loaded categories and intelligent suggestions.',
    benefits: [
      'Pre-loaded IRS activity categories',
      'Smart time suggestions based on patterns',
      'Mobile and desktop tracking',
      'Automatic sync across devices'
    ]
  },
  {
    id: '2',
    icon: 'BarChart3',
    title: 'Live Status',
    description: 'Real-time compliance monitoring with traffic light indicators and progress tracking.',
    benefits: [
      'Real-time REPS qualification status',
      'Visual progress indicators',
      'Hours remaining alerts',
      'Qualification projections'
    ]
  },
  {
    id: '3',
    icon: 'FileText',
    title: 'Instant Reports',
    description: 'Professional, audit-ready reports that CPAs and the IRS trust.',
    benefits: [
      'CPA-approved formatting',
      'One-click PDF generation',
      'Detailed activity breakdowns',
      'Audit trail documentation'
    ]
  },
  {
    id: '4',
    icon: 'Bell',
    title: 'Smart Alerts',
    description: 'Never miss critical hours with intelligent reminders and deadline notifications.',
    benefits: [
      'Customizable reminder schedules',
      'Multi-channel notifications',
      'Deadline countdown alerts',
      'Weekly progress summaries'
    ]
  }
];