export interface Project {
  id: number;
  title: string;
  description: string;
  challenges?: string;
  outcome?: string;
  src: string;
  alt: string;
  tech: string[];
  gitHub: string;
  liveDemo?: string;
  featured?: boolean;
}

export type TechKey = 
  | 'react' 
  | 'tailwindcss' 
  | 'javascript' 
  | 'nextjs' 
  | 'html' 
  | 'css' 
  | 'expressjs' 
  | 'mongodb' 
  | 'reduxToolkit' 
  | 'framerMotion' 
  | 'nodejs' 
  | 'sanity' 
  | 'redis' 
  | 'openai' 
  | 'typescript' 
  | 'threejs' 
  | 'gsap' 
  | 'stripe' 
  | 'prisma';

export interface TechLabels {
  [key: string]: string;
}
