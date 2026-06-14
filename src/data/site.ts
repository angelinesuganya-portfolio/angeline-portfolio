import type { SiteMeta } from './types';

export const site: SiteMeta = {
  url: 'https://your-domain.com',
  title: 'vCard - Personal Portfolio',
  description:
    'Personal portfolio of Richard Hanrick — Creative Director and UI/UX Designer specializing in web design, web development, and mobile apps.',
  keywords: ['portfolio', 'web developer', 'ui ux designer', 'web design', 'creative director'],
  themeColor: '#383838',
  locale: 'en',
  favicon: './assets/images/logo.ico',
  ogImage: './assets/images/my-avatar.png',
  person: {
    name: 'Richard hanrick',
    jobTitle: 'Web developer',
    image: './assets/images/my-avatar.png',
    email: 'richard@example.com',
    telephone: '+1 (213) 352-2795',
    addressLocality: 'Sacramento, California, USA',
    sameAs: [],
  },
};
