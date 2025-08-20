export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
  featuredImage?: string;
  readTime: number;
}

export const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 REPS Tax Deductions You\'re Missing',
    slug: '5-reps-tax-deductions-youre-missing',
    excerpt: 'Discover the top REPS tax deductions that real estate investors often overlook and how to properly document them.',
    content: `# 5 REPS Tax Deductions You're Missing

Real estate investors often miss valuable REPS tax deductions simply because they don't know what to look for. Here are the top 5 deductions that could save you thousands:

## 1. Property Management Activities
Time spent managing your properties counts toward REPS qualification. This includes:
- Tenant screening and management
- Property maintenance coordination
- Financial record keeping
- Legal compliance activities

## 2. Real Estate Education
Continuing education in real estate can qualify:
- Real estate courses and seminars
- Industry conferences and workshops
- Professional development programs
- Real estate books and publications

## 3. Travel Expenses
Travel related to real estate activities:
- Mileage to and from properties
- Airfare for property visits
- Hotel stays during property tours
- Meals during real estate activities

## 4. Professional Services
Fees paid to professionals:
- Real estate attorneys
- Property managers
- Accountants specializing in real estate
- Real estate consultants

## 5. Technology and Tools
Software and tools for real estate:
- Property management software
- Real estate analysis tools
- Professional memberships
- Industry publications

Proper documentation is key to claiming these deductions. Use NestWise to track your time and activities automatically.`,
    author: 'NestWise Team',
    publishedAt: '2025-01-15',
    seoTitle: 'REPS Tax Deductions Guide | NestWise',
    seoDescription: 'Discover 5 REPS tax deductions that real estate investors often miss. Learn how to properly document and claim these valuable deductions.',
    keywords: 'REPS, tax deductions, real estate, tax savings',
    featuredImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&format=webp',
    readTime: 4
  },
  {
    id: '2',
    title: 'REPS Compliance Checklist 2025',
    slug: 'reps-compliance-checklist-2025',
    excerpt: 'Stay compliant with our comprehensive REPS checklist for 2025. Ensure you meet all IRS requirements for real estate professional status.',
    content: `# REPS Compliance Checklist 2025

Meeting REPS qualification requirements is crucial for real estate investors. Use this checklist to ensure compliance:

## Documentation Requirements
- [ ] Time logs for all real estate activities
- [ ] Activity categorization per IRS guidelines
- [ ] Proof of material participation
- [ ] Documentation of 750+ hours annually

## Activity Tracking
- [ ] Property management activities
- [ ] Real estate development work
- [ ] Construction and renovation
- [ ] Real estate brokerage activities
- [ ] Real estate education and training

## Record Keeping
- [ ] Daily activity logs
- [ ] Time allocation records
- [ ] Supporting documentation
- [ ] Annual hour summaries
- [ ] IRS compliance reports

## Best Practices
- [ ] Track activities in real-time
- [ ] Use consistent categorization
- [ ] Maintain detailed records
- [ ] Regular compliance reviews
- [ ] Professional consultation when needed

Stay compliant and maximize your tax benefits with proper REPS documentation.`,
    author: 'NestWise Team',
    publishedAt: '2025-01-10',
    seoTitle: 'REPS Compliance Checklist 2025 | NestWise',
    seoDescription: 'Complete REPS compliance checklist for 2025. Ensure you meet all IRS requirements for real estate professional status.',
    keywords: 'REPS compliance, checklist, 2025, IRS requirements',
    featuredImage: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800&format=webp',
    readTime: 3
  }
];
