import type { Profile } from './types';

export const profile: Profile = {
  name: 'Richard hanrick',
  title: 'Web developer',
  avatar: './assets/images/my-avatar.png',
  avatarWidth: 80,
  contacts: [
    { icon: 'mail-outline', title: 'Email', kind: 'link', value: 'richard@example.com', href: 'mailto:richard@example.com' },
    { icon: 'phone-portrait-outline', title: 'Phone', kind: 'link', value: '+1 (213) 352-2795', href: 'tel:+12133522795' },
    { icon: 'calendar-outline', title: 'Birthday', kind: 'time', value: 'June 23, 1982', datetime: '1982-06-23' },
    { icon: 'location-outline', title: 'Location', kind: 'address', value: 'Sacramento, California, USA' },
  ],
  socials: [
    { icon: 'logo-facebook', href: '#' },
    { icon: 'logo-twitter', href: '#' },
    { icon: 'logo-instagram', href: '#' },
  ],
};
