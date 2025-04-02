import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "PyTauri",
    description: "Build native applications using Tauri and Python",
    themeConfig: {
        logo: '/logo.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/'},
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
                                {text: 'What is PyTauri?', link: 'what-is-pytauri'},
                                {text: 'Getting started', link: 'getting-started'},
                                {text: 'Deploy', link: 'deploy'},
                            ]
                        },
                        {
                            text: 'Inter-process communication',
                            collapsed: false,
                            items: [
                                {text: 'Overview', link: 'overview'},
                                {text: 'Commands', link: 'commands'},
                                {text: 'Channels', link: 'channels'},
                                {text: 'Event system', link: 'event-system'},
                            ]
                        },
                        {
                            text: 'Core concepts',
                            collapsed: false,
                            items: [
                                {
                                    text: 'State management',
                                    link: 'state-management',
                                },
                                {
                                    text: 'Multiprocessing',
                                    link: 'multiprocessing',
                                },
                            ]
                        },
                        {
                            text: 'Plugins',
                            collapsed: false,
                            items: [
                                {text: "Notification", link: 'notification'},
                            ]
                        },
                        {text: 'Debugging PyTauri', link: 'debugging-pytauri'},
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
