import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Foss Guru',
  tagline: 'Empower your programming journey with us',
  favicon: 'img/fg_logo.ico',

  // Set the production url of your site here
  url: 'https://FossGuru-SK.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/foss-guru/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FossGuru-SK', // Usually your GitHub org/user name.
  projectName: 'foss-guru', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // ------------DOCUSAURUS MULTI-INSTANCE PLUGIN--------------
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.ts')
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/fg_logo.png',
    navbar: {
      title: 'Foss Guru',
      logo: {
        alt: 'Foss Guru Logo',
        src: 'img/fg_logo.png',
      },
      items: [
        {to: '/blog', label: 'News', position: 'left'},
        {
          to: "/aboutus",
          position: "left",
          label: "About Us",
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorials',
        // },
        {
          type: 'dropdown',
          label: 'KITs',
          to: '/community/kits/java/Introduction',
          items: [
            {
              to: '/community/kits/java/Introduction',
              label: 'Java'
            },
            {
              to: '/community/kits/spring-ai/introduction',
              label: 'Spring-AI'
            },
            {
              to: '/community/kits/python/intro',
              label: 'Python'
            },
          ]
        },
        {
          href: 'https://github.com/FossGuru-SK/foss-guru',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About us',
          items: [
            {
              label: 'We share the best practices, algorithms & solutions and frequently asked interview questions for techie.',
              to: '/aboutus',
            },
          ],
        },
        {
          title: 'Tutorial Series',
          items: [
            {
              label: 'Java',
              to: '/community/kits/java/Introduction',
            },
            {
              label: 'Python',
              to: '/community/kits/python/intro',
            },
            {
              label: 'Spring-AI',
              to: '/community/kits/spring-ai/introduction',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/FossGuru-SK/foss-guru',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Foss Guru, Inc. Built with Docusaurus.`,
    }
  }
};

export default config;
