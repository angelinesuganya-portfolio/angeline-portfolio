import type { TimelineSection, Skill } from './types';

export const education: TimelineSection = {
  icon: 'book-outline',
  heading: 'Education',
  entries: [
    { title: 'University school of the arts', period: '2007 — 2008', text: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.' },
    { title: 'New york academy of art', period: '2006 — 2007', text: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..' },
    { title: 'High school of art and design', period: '2002 — 2004', text: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.' },
  ],
};

export const experience: TimelineSection = {
  icon: 'book-outline',
  heading: 'Experience',
  entries: [
    { title: 'Creative director', period: '2015 — Present', text: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.' },
    { title: 'Art director', period: '2013 — 2015', text: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.' },
    { title: 'Web designer', period: '2010 — 2013', text: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.' },
  ],
};

export const skills: Skill[] = [
  { name: 'Web design', value: 80 },
  { name: 'Graphic design', value: 70 },
  { name: 'Branding', value: 90 },
  { name: 'WordPress', value: 50 },
];
