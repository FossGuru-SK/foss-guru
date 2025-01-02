import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AboutUsCard from '@site/src/components/AboutUsCard';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const aboutInput = {
    title: "The magic behind Eclipse Tractus-X",
    highlightText: "Welcome to the community",
    description: " is the official open-source project in the Catena-X ecosystem under the umbrella of the Eclipse Foundation. The Eclipse Foundation is a not-for-profit corporation that is supported by over 320 members, and represents the worlds largest sponsored collection of Open Source projects and developers.",
    descriptionHighlight: "The Eclipse Tractus-X™ project",
    buttonText: "About Us",
    link: "/aboutus"
  }
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <AboutUsCard {...aboutInput} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
