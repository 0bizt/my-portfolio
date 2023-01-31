import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

export const data = {
  author: 'Jerry Nwosu',
  title: 'Software Engineer',
  avatar: '/avatar.jpeg',
  socials: [
    {
      title: 'Twitter',
      href: 'https://twitter.com/geekreflex',
      icon: <IoLogoTwitter size={20} />,
    },
    {
      title: 'Github',
      href: 'https://github.com/geekreflex',
      icon: <IoLogoGithub size={20} />,
    },
  ],
};
