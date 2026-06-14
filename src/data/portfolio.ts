import type { Project } from './types';

export const portfolioCategories: string[] = ['All', 'Web design', 'Applications', 'Web development'];

export const projects: Project[] = [
  { title: 'Finance', category: 'Web development', categorySlug: 'web development', image: './assets/images/project-1.jpg', alt: 'finance' },
  { title: 'Orizon', category: 'Web development', categorySlug: 'web development', image: './assets/images/project-2.png', alt: 'orizon' },
  { title: 'Fundo', category: 'Web design', categorySlug: 'web design', image: './assets/images/project-3.jpg', alt: 'fundo' },
  { title: 'Brawlhalla', category: 'Applications', categorySlug: 'applications', image: './assets/images/project-4.png', alt: 'brawlhalla' },
  { title: 'DSM.', category: 'Web design', categorySlug: 'web design', image: './assets/images/project-5.png', alt: 'dsm.' },
  { title: 'MetaSpark', category: 'Web design', categorySlug: 'web design', image: './assets/images/project-6.png', alt: 'metaspark' },
  { title: 'Summary', category: 'Web development', categorySlug: 'web development', image: './assets/images/project-7.png', alt: 'summary' },
  { title: 'Task Manager', category: 'Applications', categorySlug: 'applications', image: './assets/images/project-8.jpg', alt: 'task manager' },
  { title: 'Arrival', category: 'Web development', categorySlug: 'web development', image: './assets/images/project-9.png', alt: 'arrival' },
];
