export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Developer {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}