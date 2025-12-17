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