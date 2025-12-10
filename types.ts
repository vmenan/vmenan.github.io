
export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract?: string;
  tags?: string[];
  pdfUrl?: string;
  citationCount?: number;
  color?: 'blue' | 'red' | 'green' | 'purple';
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  language: string;
  stars?: number;
  url: string;
  icon: string;
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  videoId: string; // YouTube ID
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
}

export enum InteractionState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type ColorVariant = 'default' | 'yellow' | 'blue' | 'pink' | 'green';
