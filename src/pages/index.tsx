import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AboutUsCard from '@site/src/components/AboutUsCard';
import KitsGalleryWithFilters from '../components/KitsGalleryWithFilters';
import { kitsGallery } from '@site/utils/kitsGallery';

import Heading from '@theme/Heading';

import styles from './index.module.css';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const aboutInput = {
    title: "Gateway to Open Source Excellence",
    highlightText: "Open Source Knowledge Hub",
    description: "Dive into the world of open source frameworks and tools. Whether you're an aspiring developer or a seasoned professional, our platform offers curated resources, tutorials, and insights to help you excel in technologies like Java, Spring Boot, Kotlin, CI/CD tools, and more.",
    descriptionHighlight: "Foss Guru Project",
    buttonText: "About Us",
    link: "/aboutus"
  }
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageFeatures />
      <main>
        <AboutUsCard{...aboutInput} />
        <KitsGalleryWithFilters 
          itemsArray={kitsGallery}
          title={"Our Tech Stack"}
          description={"Unlock the power of Tech Stack. Browse the latest Tech Stack, their documentation, including tutorials, sample code, articles, and API reference."}
        />
      </main>
    </Layout>
  );
}
