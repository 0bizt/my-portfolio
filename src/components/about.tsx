import React from 'react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Nav from './nav';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoIosRedo,
  IoIosCode,
  IoIosMoon,
  IoIosSunny,
} from 'react-icons/io';
import themeContext from '@/components/themeContext';
import { data } from 'portfolio.config';

const DATA = [
  {
    title: 'Twitter',
    href: 'https://twitter.com/whilejosh',
    icon: <IoLogoTwitter size={20} />,
  },
  {
    title: 'Github',
    href: 'https://github.com/joshnwosu',
    icon: <IoLogoGithub size={20} />,
  },
];

const About: React.FC = () => {
  const theme = React.useContext(themeContext);
  const [mode, setMode] = React.useState(false);

  const handleToggle = () => {
    setMode(!mode);
    theme.toggleTheme(!mode);
  };

  return (
    <div className={styles.about}>
      <div>
        <div>
          <div>
            <h1 className={styles.name}>
              {data.author}{' '}
              <span className={styles.theme_icon} onClick={handleToggle}>
                {mode ? (
                  <IoIosMoon size={20} color={theme.themeProps['textColor']} />
                ) : (
                  <IoIosSunny size={20} color={theme.themeProps['textColor']} />
                )}
              </span>
            </h1>
            <h2 className={styles.title}>
              <IoIosCode
                size={16}
                style={{ marginRight: 5, color: 'var(--text-color-light)' }}
              />
              <span>Software Engineer</span>
            </h2>
          </div>
          <div>
            <p className={[styles.desc, styles.mt_32].join(' ')}>
              Hello! I am a software engineer with 5+ years of experience in the
              field. I specialize in developing high-quality and efficient
              applications using various programming languages and technologies.
              With a strong understanding of the software development life cycle
              and a passion for problem-solving, I am dedicated to creating
              innovative and user-friendly solutions that meet the needs of
              clients and end-users.
            </p>
            <p className={[styles.desc, styles.mt_8].join(' ')}>
              As a self-motivated individual, I am constantly seeking new
              challenges and opportunities to expand my knowledge and skills.
            </p>
          </div>
        </div>
        <Nav />
      </div>

      <div className={styles.footer}>
        <div className={styles.profile_pic}>
          <Image src={data.avatar} alt="My Image" width={40} height={40} />;
        </div>
        <ul className={styles.socials}>
          {DATA.map(({ title, icon, href }, index) => (
            <li key={index} className={styles.socials_li}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={styles.socials_link}
              >
                {icon}
                <span className={styles.socials_title}>{title}</span>
                <IoIosRedo />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
