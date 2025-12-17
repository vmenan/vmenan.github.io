import { Publication, Project, Collaboration } from './types';

export const RESEARCH_OVERVIEW = {
  focus: `My research focus is mainly on Natural Language Processing (NLP), in my PhD I explore the role of data diversity in training 
  robust and fair language models. I am passionate about making technology more inclusive and equitable.`,
  interests: `My interests are diverse and span areas in NLP such as Data Diversity, Neural Machine Translation, Tokenization, Low-Resource Languages,`
};

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Quality Does Matter: A Detailed Look at the Quality and Utility of Web-Mined Parallel Corpora',
    venue: 'EACL 2024',
    date: 'March 2024',
    status: 'Published',
    description: '',
    links: {
      paper: 'https://aclanthology.org/2024.eacl-long.52/',
      code: '#'
    }
  },
  {
    title: 'Egalitarian Language Representation in Language Models: It All Begins with Tokenizers',
    venue: 'COLING 2025',
    date: 'January 2025',
    status: 'Published',
    description: '',
    links: {
      paper: 'https://aclanthology.org/2025.coling-main.400/',
      code: '#'
    }
  },
  {
    title: 'Encoder-Aware Sequence-Level Knowledge Distillation for Low-Resource Neural Machine Translation',
    venue: 'LowResMT@NAACL 2025',
    date: 'April 2025',
    status: 'Published',
    description: '',
    links: {
      paper: 'https://aclanthology.org/2025.loresmt-1.15/',
      code: '#'
    }
  },
  {
    title: 'Back to the Stats: Rescuing Low Resource Neural Machine Translation with Statistical Methods',
    venue: 'WMT@EMNLP 2024',
    date: 'November 2024',
    status: 'Published',
    description: '',
    links: {
      paper: 'https://aclanthology.org/2024.wmt-1.87/',
      code: '#'
    }
  },
  {
    title: 'Egalitarian Language Representation in Language Models: It All Begins with Tokenizers',
    venue: 'COLING 2025',
    date: 'January 2025',
    status: 'Published',
    description: '',
    links: {
      paper: 'https://aclanthology.org/2025.coling-main.400.pdf',
      code: '#'
    }
  },
  {
    title: 'DS-HPE: Deep Set for Head Pose Estimation',
    venue: 'CCWC 2023',
    date: 'March 2023',
    status: 'Published',
    description: '',
    links: {
      paper: 'https://ieeexplore.ieee.org/abstract/document/10099159',
      code: '#'
    }
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'DataDivers',
    description: `DataDivers rethinks how NLP models are trained by focusing on data diversity, not just data size. We develop methods to measure and understand diversity in language datasets and use it to build fairer, more robust, and more reliable NLP systems.`,
    tags: ['NLP', 'Data Diversity', 'Language Modeling'],
    colorTheme: 'yellow'
  }
];

export const COLLABORATIONS: Collaboration[] = [
  {
    name: 'NLP & Society Lab, Utrecht University',
    description: ''
  },
  {
    name: 'Your Collaboration Partner',
    description: ''
  },
  {
    name: 'Another Research Group',
    description: ''
  }
];
