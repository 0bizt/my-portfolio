import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

export const data = {
  author: 'Jerry Nwosu',
  title: 'Software Engineer',
  avatar: '/avatar.jpeg',
  email: 'jerrynwosu007@gmail.com',
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
