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
                        'kits/java/Java Language Basics/hello-world',
                        'kits/java/Java Language Basics/diff-jdk-jre-jvm',
                        'kits/java/Java Language Basics/main-method',
                        'kits/java/Java Language Basics/class-object',
                        'kits/java/Java Language Basics/classpath',
                        'kits/java/Java Language Basics/operators',
                        'kits/java/Java Language Basics/variables',
                        'kits/java/Java Language Basics/data-types',
                        'kits/java/Java Language Basics/primitive-types',
                        'kits/java/Java Language Basics/comments',
                        'kits/java/Java Language Basics/statement',
                        'kits/java/Java Language Basics/pass-by-reference-value'
                    ]
                },
                {
                    type: 'category',
                    label: 'Flow Control Statements',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'kits/java/Flow Control Statements/if-else',
                        'kits/java/Flow Control Statements/switch'
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