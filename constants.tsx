import { Twitter, Github, Linkedin, Hash } from 'lucide-react';
import { NavItem, NewsItem, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#', isActive: true },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Talks & Lectures', href: '#talks' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Twitter', url: '#', icon: Twitter },
  { platform: 'X', url: '#', icon: Hash }, // Using Hash as a placeholder for X logo or similar
  { platform: 'GitHub', url: '#', icon: Github },
  { platform: 'LinkedIn', url: '#', icon: Linkedin },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    date: 'OCT 2024',
    title: 'Paper on "Cognitive Density" accepted at CHI 2025!',
    description: ''
  },
  {
    id: '2',
    date: 'SEP 2024',
    title: 'Joined the NLP & Society Lab as a visiting researcher.',
    description: ''
  },
  {
    id: '3',
    date: 'AUG 2024',
    title: 'Delivered a guest lecture at Utrecht University.',
    description: ''
  }
];

export const PROFILE = {
  name: 'Menan Velayuthan.',
  role: 'Researcher & PhD Candidate',
  path: '$ pwd\n/PhD/Netherlands/UtrechtUniversity/NLPandSocietyLab/DataDivers',
  bio: 'I research the intersection of Natural Language Processing and societal structures. My work focuses on building tools and theories for the future of ethical computing.',
  quote: '“Beneath this mask, there is more than flesh. Beneath this mask there is an idea, Mr. Creedy, and ideas are bulletproof.” — V for Vendetta'
};