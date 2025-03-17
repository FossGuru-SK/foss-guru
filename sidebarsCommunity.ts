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
                        'kits/java/Java Language Basics/pass-by-reference-value',
                        'kits/java/Java Language Basics/immutable-class'
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
                        'kits/java/Flow Control Statements/switch',
                        'kits/java/Flow Control Statements/ternary-operator',
                        'kits/java/Flow Control Statements/for-loop',
                        'kits/java/Flow Control Statements/for-each-loop',
                        'kits/java/Flow Control Statements/while-loop',
                        'kits/java/Flow Control Statements/do-while-loop',
                        'kits/java/Flow Control Statements/break',
                        'kits/java/Flow Control Statements/continue',
                        'kits/java/Flow Control Statements/lable'
                    ]
                },
                {
                    type: 'category',
                    label: 'Java OOP',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'kits/java/Java OOP/java-oop',
                        {
                            type: 'category',
                            label: 'Building Blocks of OOP',
                            link: {
                                type: 'generated-index',
                            },
                            items: [
                                'kits/java/Java OOP/building-blocks-of-oops/object-oriented-programming',
                                'kits/java/Java OOP/building-blocks-of-oops/association-aggregation-composition',
                                'kits/java/Java OOP/building-blocks-of-oops/abstraction',
                                'kits/java/Java OOP/building-blocks-of-oops/inheritance',
                                'kits/java/Java OOP/building-blocks-of-oops/multiple-inheritance',
                                'kits/java/Java OOP/building-blocks-of-oops/polymorphism',
                                'kits/java/Java OOP/building-blocks-of-oops/encapsulation'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'OOPs Inside Java',
                            link: {
                                type: 'generated-index',
                            },
                            items: [
                                'kits/java/Java OOP/OOPs Inside Java/constructor',
                                'kits/java/Java OOP/OOPs Inside Java/access-modifiers',
                                'kits/java/Java OOP/OOPs Inside Java/static',
                                'kits/java/Java OOP/OOPs Inside Java/final-finally-finalise',
                                'kits/java/Java OOP/OOPs Inside Java/instance-initializer-block',
                                'kits/java/Java OOP/OOPs Inside Java/instanceof-operator',
                                'kits/java/Java OOP/OOPs Inside Java/method-hiding'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Differences need to know',
                            link: {
                                type: 'generated-index',
                            },
                            items: [
                                'kits/java/Java OOP/Differences need to know/overloading-overriding',
                                'kits/java/Java OOP/Differences need to know/encapsulation-abstraction',
                                'kits/java/Java OOP/Differences need to know/interface-abstract-class'
                            ]
                        },
                    ]
                },
                {
                    type: 'category',
                    label: 'Java Strings',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'kits/java/Java Strings/introduction',
                        'kits/java/Java Strings/string-constant-pool',
                        'kits/java/Java Strings/immutable-strings',
                        {
                            type: 'category',
                            label: 'Conversions',
                            link: {
                                type: 'generated-index',
                            },
                            items: [
                                'kits/java/Java Strings/Conversions/string-to-int',
                                'kits/java/Java Strings/Conversions/int-to-string',
                                'kits/java/Java Strings/Conversions/string-to-long',
                                'kits/java/Java Strings/Conversions/long-to-string',
                                'kits/java/Java Strings/Conversions/date-to-string-to-date',
                                'kits/java/Java Strings/Conversions/string-to-string-array',
                                'kits/java/Java Strings/Conversions/join-or-concatenate-with-comma',
                                'kits/java/Java Strings/Conversions/string-to-inputstream',
                                'kits/java/Java Strings/Conversions/inputStream-to-string',
                                'kits/java/Java Strings/Conversions/csv-string-using-regex',
                                'kits/java/Java Strings/Conversions/escape-html',
                                'kits/java/Java Strings/Conversions/unescape-html',
                                'kits/java/Java Strings/Conversions/byteArray-to-string-to-byteArray',
                                'kits/java/Java Strings/Conversions/exceptionStacktrace-to-string',
                                'kits/java/Java Strings/Conversions/float-to-string'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Examples and Interview Questions',
                            link: {
                                type: 'generated-index',
                            },
                            items: [
                            ]
                        },
                    ]
                },
                {
                    type: 'category',
                    label: 'Misc Topics',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Java version and features',
                            link: {
                                type: 'generated-index',
                            },
                            items: [
                                'kits/java/Misc Topics/java-versions-features/introduction',
                                {
                                    type: 'category',
                                    label: 'Java 8',
                                    link: {
                                        type: 'generated-index',
                                    },
                                    items: [
                                        'kits/java/Misc Topics/java-versions-features/java-8/introduction',
                                        'kits/java/Misc Topics/java-versions-features/java-8/lambda-expression',
                                        'kits/java/Misc Topics/java-versions-features/java-8/stream-api',
                                        'kits/java/Misc Topics/java-versions-features/java-8/functional-interface',
                                        'kits/java/Misc Topics/java-versions-features/java-8/date-time'
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Java 9',
                                    link: {
                                        type: 'generated-index',
                                    },
                                    items: [
                                        'kits/java/Misc Topics/java-versions-features/java-9/introduction',
                                        'kits/java/Misc Topics/java-versions-features/java-9/java-platform-module-system',
                                        'kits/java/Misc Topics/java-versions-features/java-9/private-interface-methods'
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Java 10',
                                    link: {
                                        type: 'generated-index',
                                    },
                                    items: [
                                        'kits/java/Misc Topics/java-versions-features/java-10/introduction',
                                        'kits/java/Misc Topics/java-versions-features/java-10/java-var',
                                        'kits/java/Misc Topics/java-versions-features/java-10/time-based-release-versioning'
                                    ]
                                },
                            ]
                        },
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
                'kits/spring-ai/introduction',
                {
                    type: 'category',
                    label: 'Getting Started',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'kits/spring-ai/Getting Started/basics',
                        'kits/spring-ai/Getting Started/prompt-templates',
                        'kits/spring-ai/Getting Started/structured-output',
                        'kits/spring-ai/Getting Started/setup-ollama'
                    ]
                },
                {
                    type: 'category',
                    label: 'Models',
                    link: {
                        type: 'generated-index',
                    },
                    items: [
                        'kits/spring-ai/Model/embedding-model',
                        'kits/spring-ai/Model/image-model',
                        'kits/spring-ai/Model/speech-model',
                        'kits/spring-ai/Model/speech-to-text'
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Python Kit',
            link: {
                type: 'generated-index',
            },
            collapsed: true,
            items: [
                'kits/python/intro'
            ]
        }
    ]
};

module.exports = sidebars;