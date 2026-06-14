import type { Service, Testimonial, ModalDefault, Client } from './types';

export const aboutText: string[] = [
  "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
  'My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.',
];

export const services: Service[] = [
  { icon: './assets/images/icon-design.svg', iconWidth: 40, alt: 'design icon', title: 'Web design', text: 'The most modern and high-quality design made at a professional level.' },
  { icon: './assets/images/icon-dev.svg', iconWidth: 40, alt: 'Web development icon', title: 'Web development', text: 'High-quality development of sites at the professional level.' },
  { icon: './assets/images/icon-app.svg', iconWidth: 40, alt: 'mobile app icon', title: 'Mobile apps', text: 'Professional development of applications for iOS and Android.' },
  { icon: './assets/images/icon-photo.svg', iconWidth: 40, alt: 'camera icon', title: 'Photography', text: 'I make high-quality photos of any category at a professional level.' },
];

const testimonialText =
  'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.';

export const testimonials: Testimonial[] = [
  { avatar: './assets/images/avatar-1.png', name: 'Daniel lewis', text: testimonialText },
  { avatar: './assets/images/avatar-2.png', name: 'Jessica miller', text: testimonialText },
  { avatar: './assets/images/avatar-3.png', name: 'Emily evans', text: testimonialText },
  { avatar: './assets/images/avatar-4.png', name: 'Henry william', text: testimonialText },
];

export const modalDefault: ModalDefault = {
  avatar: './assets/images/avatar-1.png',
  name: 'Daniel lewis',
  alt: 'Daniel lewis',
  datetime: '2021-06-14',
  dateLabel: '14 June, 2021',
  text: testimonialText,
};

export const clients: Client[] = [
  { logo: './assets/images/logo-1-color.png', href: '#' },
  { logo: './assets/images/logo-2-color.png', href: '#' },
  { logo: './assets/images/logo-3-color.png', href: '#' },
  { logo: './assets/images/logo-4-color.png', href: '#' },
  { logo: './assets/images/logo-5-color.png', href: '#' },
  { logo: './assets/images/logo-6-color.png', href: '#' },
];
