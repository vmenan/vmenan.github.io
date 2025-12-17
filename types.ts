export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Publication {
  title: string;
  venue?: string;
  date: string;
  status?: string;
  description: string;
  featured?: boolean;
  isPreprint?: boolean;
  links: {
    paper?: string;
    code?: string;
    cite?: string;
  };
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  colorTheme: 'yellow' | 'green' | 'blue' | 'purple';
}

export interface Collaboration {
  name: string;
  description?: string;
}