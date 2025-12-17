import { Github, Linkedin, Bird } from 'lucide-react';
import { NavItem, NewsItem, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Talks & Lectures', href: '/talks' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Bluesky', url: 'https://bsky.app/profile/vmenan.bsky.social', icon: Bird },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/menanv/', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com/vmenan', icon: Github },
];

export const PROFILE = {
  name: 'Menan Velayuthan.',
  role: 'Researcher & PhD Candidate',
  path: '$ pwd\n/PhD/Netherlands/UtrechtUniversity/NLPandSocietyLab/DataDivers',
  bio: 'I research the intersection of Natural Language Processing and societal structures. My work focuses on building tools and theories for the future of ethical computing.',
  };
export const QUOTES = [
  {
    text: '"Beneath this mask, there is more than flesh. Beneath this mask there is an idea, Mr. Creedy, and ideas are bulletproof."',
    author: 'V for Vendetta'
  },
  {
    text: '"I think therefore I am."',
    author: 'René Descartes'
  }
];