export const siteConfig = {
  name: "Beyond Binary",
  tagline: "Beyond Code. Beyond Strategy. Beyond Expectations.",
  description:
    "A technology partner that builds digital products, brands, and systems that scale. We help startups and businesses transform ideas into impactful digital experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://beyondbinary.com",
  ogImage: "/images/og-image.jpg",
  email: "hello@beyondbinary.com",
  phone: "+91 9591720838",
  address: "48, Church St, Haridevpur, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001, India",
  social: {
    twitter: "https://twitter.com/beyondbinary",
    linkedin: "https://linkedin.com/company/beyondbinary",
    instagram: "https://instagram.com/beyondbinary",
    github: "https://github.com/beyondbinary",
    dribbble: "https://dribbble.com/beyondbinary",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const servicesData = [
  {
    id: "digital-presence",
    title: "Digital Presence & Branding",
    description:
      "Strategic branding and web design that positions your business for success in the digital landscape.",
    features: [
      "Website design & development",
      "UI/UX design",
      "Brand identity & strategy",
      "Content design systems",
    ],
    icon: "Sparkles",
  },
  {
    id: "software-development",
    title: "Software & Product Development",
    description:
      "Custom applications and SaaS products built with modern architectures that scale with your growth.",
    features: [
      "Custom web applications",
      "Mobile app development",
      "SaaS product development",
      "MVP development",
    ],
    icon: "Code2",
  },
  {
    id: "marketing-growth",
    title: "Marketing & Growth",
    description:
      "Data-driven marketing strategies that drive revenue, build brand awareness, and accelerate growth.",
    features: [
      "Digital marketing strategy",
      "SEO & performance marketing",
      "Social media management",
      "Conversion rate optimization",
    ],
    icon: "TrendingUp",
  },
  {
    id: "crm-automation",
    title: "CRM & Business Automation",
    description:
      "Streamline operations with intelligent automation systems that save time and increase efficiency.",
    features: [
      "CRM setup & integration",
      "Sales pipeline automation",
      "WhatsApp & chatbot flows",
      "Workflow automation",
    ],
    icon: "Workflow",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud, IT & Infrastructure",
    description:
      "Enterprise-grade infrastructure management ensuring reliability, security, and peak performance.",
    features: [
      "Cloud setup & management",
      "Server management",
      "Cybersecurity",
      "Performance optimization",
    ],
    icon: "Cloud",
  },
  {
    id: "analytics-data",
    title: "Analytics & Data",
    description:
      "Transform raw data into actionable insights with comprehensive analytics and reporting solutions.",
    features: [
      "Analytics setup & tracking",
      "Business dashboards",
      "Conversion tracking",
      "Performance reporting",
    ],
    icon: "BarChart3",
  },
  {
    id: "ai-automation",
    title: "AI & Advanced Automation",
    description:
      "Cutting-edge AI solutions that give your business a competitive advantage through intelligent automation.",
    features: [
      "AI chatbots & agents",
      "Workflow AI automation",
      "AI content generation",
      "Predictive analytics",
    ],
    icon: "Brain",
  },
  {
    id: "support-retainers",
    title: "Ongoing Support & Retainers",
    description:
      "Reliable ongoing partnership that keeps your digital ecosystem running smoothly 24/7.",
    features: [
      "Monthly maintenance",
      "Marketing retainers",
      "Tech support",
      "Growth experimentation",
    ],
    icon: "HeadphonesIcon",
  },
];

export const portfolioItems = [
  {
    title: "NovaBank",
    category: "Web Application",
    description:
      "A next-gen digital banking platform with AI-powered financial insights.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    tags: ["React", "Node.js", "AI"],
    link: "#",
  },
  {
    title: "GreenLeaf Organics",
    category: "E-commerce",
    description:
      "Sustainable marketplace connecting local organic farmers with consumers.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    tags: ["Next.js", "Shopify", "Stripe"],
    link: "#",
  },
  {
    title: "MediFlow",
    category: "SaaS Platform",
    description:
      "Healthcare management platform streamlining patient-doctor interactions.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React", "Python", "AWS"],
    link: "#",
  },
  {
    title: "UrbanMove",
    category: "Mobile App",
    description:
      "Smart city mobility app integrating multiple transport services.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    tags: ["React Native", "Firebase", "Maps"],
    link: "#",
  },
  {
    title: "ArtSpace Gallery",
    category: "Branding & Web",
    description:
      "Complete brand identity and virtual gallery platform for contemporary artists.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    tags: ["Branding", "Next.js", "CMS"],
    link: "#",
  },
  {
    title: "FitTrack Pro",
    category: "Fitness App",
    description:
      "AI-powered fitness tracking app with personalized workout plans.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    tags: ["React Native", "AI", "Health"],
    link: "#",
  },
];

export const testimonialsData = [
  {
    name: "Sarah Chen",
    role: "CEO, NovaBank",
    content:
      "Beyond Binary transformed our digital banking platform completely. The team's expertise in both design and engineering delivered a product that exceeded our expectations. Our user engagement increased by 340%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, GreenLeaf Organics",
    content:
      "Working with Beyond Binary was the best decision we made for our business. They didn't just build a website—they built a complete digital ecosystem that doubled our online sales in three months.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    name: "Dr. Amara Patel",
    role: "CTO, MediFlow",
    content:
      "The team's deep understanding of both healthcare regulations and modern tech made all the difference. MediFlow launched on time and has been running flawlessly since day one.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "James Mitchell",
    role: "VP Product, UrbanMove",
    content:
      "Beyond Binary's ability to translate complex mobility requirements into an intuitive user experience was remarkable. Our app store rating jumped from 3.2 to 4.8 stars.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    name: "Elena Voskov",
    role: "Director, ArtSpace Gallery",
    content:
      "They captured the essence of what we wanted to communicate through our brand. The virtual gallery platform they built feels like walking through a real exhibition space.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
  },
  {
    name: "Alex Kim",
    role: "CEO, FitTrack Pro",
    content:
      "Beyond Binary doesn't just write code—they build businesses. Their strategic input during the MVP phase saved us months of development and thousands in costs.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
];

export const teamMembers = [
  {
    name: "Yagni",
    role: "CEO & Founder",
    bio: "Visionary leader driving the company's strategic direction and growth.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Mikey",
    role: "Chief Technology Officer",
    bio: "Full-stack architect overseeing all technical operations and innovation.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Vikiy",
    role: "Head of Design",
    bio: "Creative lead crafting memorable brand experiences and interfaces.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
  {
    name: "Pragathi",
    role: "Lead Developer",
    bio: "Full-stack engineer building robust, scalable web applications.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  },
  {
    name: "Priya",
    role: "Project Manager",
    bio: "Certified professional ensuring every project delivers on time and beyond expectations.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  },
  {
    name: "Padmini",
    role: "Marketing Strategist",
    bio: "Growth-driven marketer crafting data-informed campaigns that deliver results.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
  },
  {
    name: "Sanjana",
    role: "UX Designer",
    bio: "User experience specialist passionate about intuitive, accessible interfaces.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80",
  },
  {
    name: "Kashish",
    role: "Quality Assurance Lead",
    bio: "Detail-oriented tester ensuring every product meets the highest quality standards.",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&q=80",
  },
];

export const blogPosts = [
  {
    slug: "building-scalable-saas-platforms",
    title: "Building Scalable SaaS Platforms: A 2026 Engineering Guide",
    excerpt: "Learn the architectural patterns and best practices for building SaaS platforms that scale from 0 to 1 million users.",
    date: "2026-04-15",
    author: "Maya Torres",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    readTime: "8 min read",
  },
  {
    slug: "ai-transforming-customer-experience",
    title: "How AI is Transforming Customer Experience in 2026",
    excerpt: "Explore the latest AI technologies reshaping how businesses interact with and serve their customers.",
    date: "2026-04-10",
    author: "David Park",
    category: "AI & Tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    readTime: "6 min read",
  },
  {
    slug: "design-systems-guide",
    title: "Creating a Design System That Scales Across Your Organization",
    excerpt: "A comprehensive guide to building and maintaining design systems that ensure consistency at scale.",
    date: "2026-04-05",
    author: "Leo Zhang",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    readTime: "10 min read",
  },
  {
    slug: "seo-strategies-2026",
    title: "SEO Strategies That Actually Work in 2026",
    excerpt: "Cut through the noise with proven SEO strategies that drive organic growth and improve search rankings.",
    date: "2026-03-28",
    author: "Zara Williams",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1432889821006-3149403f4407?w=800&q=80",
    readTime: "7 min read",
  },
  {
    slug: "mobile-app-development-trends",
    title: "Mobile App Development Trends Dominating 2026",
    excerpt: "From cross-platform frameworks to AI integration, discover what's shaping mobile development this year.",
    date: "2026-03-20",
    author: "Ethan Brooks",
    category: "Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    readTime: "5 min read",
  },
  {
    slug: "crm-automation-small-business",
    title: "CRM Automation: A Small Business Growth Engine",
    excerpt: "How small businesses can leverage CRM automation to compete with enterprise-level efficiency.",
    date: "2026-03-15",
    author: "Sofia Laurent",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    readTime: "6 min read",
  },
];

export const careersData = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Build and scale production systems using React, Node.js, and cloud infrastructure.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Design intuitive, beautiful interfaces for web and mobile applications.",
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description:
      "Drive acquisition and revenue growth through multi-channel marketing strategies.",
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Develop and deploy AI solutions that power next-generation product features.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Contract",
    description:
      "Manage cloud infrastructure, CI/CD pipelines, and ensure platform reliability.",
  },
];

export const stats = [
  { label: "Projects Delivered", value: "200+" },
  { label: "Clients Served", value: "100+" },
  { label: "Team Members", value: "50+" },
  { label: "Years Experience", value: "10+" },
  { label: "NPS Score", value: "92" },
  { label: "Avg. Engagement", value: "18mo" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business, goals, and market to build a foundation of understanding.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We craft a comprehensive plan that aligns your vision with user needs and business objectives.",
  },
  {
    step: "03",
    title: "Design",
    description: "We create beautiful, functional interfaces that delight users and drive conversions.",
  },
  {
    step: "04",
    title: "Develop",
    description: "Our engineers build robust, scalable solutions using cutting-edge technologies.",
  },
  {
    step: "05",
    title: "Launch",
    description: "We deploy, test, and optimize your product for a flawless go-live experience.",
  },
  {
    step: "06",
    title: "Grow",
    description: "We continuously optimize and evolve your product to drive sustained growth.",
  },
];
