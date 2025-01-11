import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AboutUsHeader from "../../components/AboutUsHeader";
import AboutUsContent from "../../components/AboutUsContent";

export default function AboutUsPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="About Us"
      description="Learn about FossGuru, where FOSS technologies meet fun learning!"
    >
      <AboutUsHeader />
      <main>
        <AboutUsContent />
      </main>
    </Layout>
  );
}
