import React from 'react';
import styles from '@/styles/Home.module.css';
import {
  IoIosLink,
  IoLogoNpm,
  IoIosRedo,
  IoIosArrowForward,
} from 'react-icons/io';
import { BrickView } from 'react-brick-view';

const DATA = [
  {
    title: 'React-Shadow-Component: Add Shadows to Your Components with Ease!',
    description:
      "React-Shadow-Component is an easy-to-use library for adding shadows to your React components. Whether you're creating a website, a mobile app, or any other type of user interface, the ability to add shadows to your components can greatly enhance the visual appeal of your project.",
    date: 'January 29, 2023',
    icon: <IoLogoNpm />,
    href: 'https://dev.to/geekreflex/react-shadow-component-add-shadows-to-your-components-with-ease-400o',
  },
  {
    title: 'Creating Axios clone using the Fetch API',
    description:
      "You've probably used the axios HTTP client for making API calls from your frontend application to the backend server. Axios is the go-to tool that most developers use given it 's simplicity and it's isomorphic nature (It can run in the browser and nodejs).",
    date: 'October 31, 2022',
    icon: <IoLogoNpm />,
    href: 'https://geekreflex.hashnode.dev/creating-axios-clone-using-the-fetch-api',
  },
];

export default function Blog() {
  return (
    <div id="articles" className={styles.blog}>
      <h2 className={styles.lamp}>Articles</h2>
      {/* <BrickView
        column={1}
        gutter={10}
        breakPoint={{
          700: 1,
        }}
      > */}
      {DATA.map(({ title, href, description, icon, date }, index) => (
        <a
          href={href}
          target="_blank"
          key={index}
          className={styles.project_card}
          rel="noreferrer"
        >
          {/* <IoLogoNpm size={30} color="#949495" /> */}
          <p className={styles.project_lang}>{date}</p>
          <h1 className={styles.project_title}>{title}</h1>
          <p className={styles.project_description}>{description}</p>
          <span className={styles.project_icon}>
            <IoIosLink size={30} />
          </span>
          <div className={styles.project_continueReading}>
            <p className={styles.project_continueReading_para}>...See more</p>
            <IoIosArrowForward />
          </div>
        </a>
      ))}
      {/* </BrickView> */}
    </div>
  );
}
