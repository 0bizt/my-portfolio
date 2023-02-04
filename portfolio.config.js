import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

export const data = {
  author: 'Jerry Nwosu',
  title: 'Software Engineer',
  avatar: '/avatar.jpeg',

  socials: [
    {
      title: 'Twitter',
      href: 'https://twitter.com/0bizt',
      icon: <IoLogoTwitter size={20} />,
    },
    {
      title: 'Github',
      href: 'https://github.com/0bizt',
      icon: <IoLogoGithub size={20} />,
    },
  ],
};
