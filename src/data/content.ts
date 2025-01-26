import { Project, Experience, BlogPost, Developer } from '../types';
import picOfMe from '../images/picofme_gradient.png'

export const developer: Developer = {
  name: "Ankan Roychowdhury",
  role: "Senior Backend Developer",
  bio: "Crafting robust and scalable backend solutions with a passion for clean code and performance optimization.",
  // image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
  image: picOfMe,
  skills: ["Node.js", "Java" , "Microservices", "AWS", "Docker"],
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:reach.ankan@gmail.com"
  }
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Backend Developer",
    company: "Tech Solutions Inc.",
    duration: "2021 - Present",
    description: [
      "Led the development of microservices architecture serving 1M+ users",
      "Optimized database performance reducing query times by 60%",
      "Mentored junior developers and established coding standards"
    ]
  },
  {
    id: 2,
    role: "Backend Developer",
    company: "Digital Innovations Ltd",
    duration: "2019 - 2021",
    description: [
      "Developed RESTful APIs using Node.js and Express",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Integrated third-party services and payment gateways"
    ]
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "StartUp Hub",
    duration: "2017 - 2019",
    description: [
      "Built scalable backend systems using Python and Django",
      "Implemented real-time features using WebSockets",
      "Managed AWS infrastructure and deployments"
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Microservices Platform",
    description: "A scalable microservices architecture handling millions of requests daily with automated deployment and monitoring.",
    technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
    githubUrl: "https://github.com/yourusername/microservices-platform",
    liveUrl: "https://platform.example.com",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Real-time Analytics Engine",
    description: "High-performance analytics engine processing real-time data streams with sub-second latency.",
    technologies: ["Python", "Apache Kafka", "Redis", "ClickHouse"],
    githubUrl: "https://github.com/yourusername/analytics-engine",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "API Gateway",
    description: "Advanced API Gateway with rate limiting, caching, and authentication features.",
    technologies: ["Go", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yourusername/api-gateway",
    liveUrl: "https://api.example.com",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Scaling Microservices: Lessons Learned",
    excerpt: "Key insights and best practices from scaling microservices architecture to handle millions of requests.",
    date: "2024-02-15",
    readTime: "8 min read",
    tags: ["Microservices", "Scaling", "Architecture"]
  },
  {
    id: 2,
    title: "Building Resilient Backend Systems",
    excerpt: "A comprehensive guide to building fault-tolerant and resilient backend systems.",
    date: "2024-01-28",
    readTime: "12 min read",
    tags: ["Backend", "Resilience", "System Design"]
  },
  {
    id: 3,
    title: "Performance Optimization Techniques",
    excerpt: "Advanced techniques for optimizing backend performance and reducing latency.",
    date: "2024-01-10",
    readTime: "10 min read",
    tags: ["Performance", "Optimization", "Backend"]
  },
  {
    id: 4,
    title: "The Future of Backend Development",
    excerpt: "Exploring emerging trends and technologies shaping the future of backend development.",
    date: "2023-12-20",
    readTime: "15 min read",
    tags: ["Future", "Trends", "Technology"]
  }
];