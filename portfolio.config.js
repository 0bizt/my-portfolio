import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

export const data = {
  author: 'Jerry Nwosu',
  title: 'Software Engineer',
  avatar:
    'https://media.licdn.com/dms/image/C5603AQEEfwyQYyHXHw/profile-displayphoto-shrink_800_800/0/1613826760366?e=1680134400&v=beta&t=sltVISQB9nr2CCn4VSuxDsUItup-uaT7HRc-olvo7Tc',
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
