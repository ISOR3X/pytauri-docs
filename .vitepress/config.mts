import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "PyTauri",
    description: "Build native applications using Tauri and Python",
    themeConfig: {
        logo: '/logo.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Guide', link: '/guide/getting-started'},
            {text: 'Reference', link: '/reference'},
            {text: 'Changelog', link: 'https://github.com/pytauri/pytauri/blob/main/CHANGELOG.md'},
        ],

        sidebar: {
            '/guide/': {
                base: '/guide/', items:
                    [
                        {
                            text: 'Introduction',
                            collapsed: false,
                            items: [
                                {text: 'What is PyTauri?', link: '/what-is-pytauri'},
                                {text: 'Getting started', link: '/getting-started'},
                            ]
                        },
                        {
                            text: 'Core concepts',
                            collapsed: true,
                            items: [
                                {
                                    text: 'Inter-process communication',
                                    link: '/inter-process-communication'
                                },
                            ]
                        },
                        {
                            text: 'Plugins',
                            collapsed: true,
                            items: [
                                {text: "Notification", link: '/notification'},
                            ]
                        }
                    ],
            },
            '/reference/': {
                base: '/reference/',
                items: [
                    {
                        text: 'Python',
                        items: [],
                    },
                    {
                        text: 'Rust',
                        items: [],
                    },
                    {
                        text: 'Javascript',
                        items: [],
                    }
                ]
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/pytauri/pytauri'}
        ]
    }
})
