import React from 'react';
import styles from '@/styles/Home.module.css';
import ScrollspyNav from '@/components/scrollspyNav';
import themeContext from './themeContext';

const links = [
  { id: 1, title: 'Projects', href: 'projects' },
  { id: 2, title: 'Articles', href: 'articles' },
  { id: 3, title: 'Blog', href: 'https://geekreflex.netlify.app' },
  // { id: 3, title: "Get in touch", href: "contact" },
  // { id: 4, title: "Resume" },
];

export default function Nav() {
  const theme = React.useContext(themeContext);
  return (
    <nav className={styles.nav}>
      <ScrollspyNav
        scrollTargetIds={['projects', 'articles']}
        offset={-100}
        activeNavClass="is-active"
        scrollDuration="500"
        headerBackground={true}
      >
        <ul className={styles.nav__ul}>
          {links.map(({ id, title, href }, index) => {
            if (title === 'Blog') {
              return (
                <a href={href} className={styles.nav__link}>
                  <span className={styles.nav__index}>0{index + 1}</span>
                  <span data-line className={styles.nav__line}></span>
                  <span className={styles.nav__title}>{title}</span>
                </a>
              );
            } else {
              return (
                <li key={id} className={styles.nav__li}>
                  {href ? (
                    <a href={`#${href}`} className={styles.nav__link}>
                      <span className={styles.nav__index}>0{index + 1}</span>
                      <span data-line className={styles.nav__line}></span>
                      <span className={styles.nav__title}>{title}</span>
                    </a>
                  ) : (
                    <button
                      className={styles.nav__link}
                      onClick={() => {
                        theme.toggleResume(true);
                      }}
                    >
                      <span className={styles.nav__index}>0{index + 1}</span>
                      <span data-line className={styles.nav__line}></span>
                      <span className={styles.nav__title}>{title}</span>
                    </button>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </ScrollspyNav>
    </nav>
  );
}
