import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
    community: [
        {
            type: 'category',
            label: 'Java Kit',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                'kits/java/Introduction',
                {
                    type: 'category',
                    label: 'Java Language Basics',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'kits/java/Java Language Basics/Introduction',
                        'kits/java/Java Language Basics/Installation',
                        'kits/java/Java Language Basics/Naming Conventions',
                        'kits/java/Java Language Basics/Keywords',
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Spring AI Kit',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                'kits/spring-ai/intro'
            ]
        },
    ]
};

module.exports = sidebars;