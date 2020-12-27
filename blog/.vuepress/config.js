module.exports = {
  title: 'David Herzog',
  base: '/',
  description: 'David Herzog\'s Blog',
  logo: './assets/img/dave.png',
  theme: require.resolve('../../'),
  themeConfig: {
    authors: [
      {
        name: 'Dave',
        avatar: '/assets/img/dave.png',
        link: 'https://www.linkedin.com/in/davidjamesherzog/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/davidjamesherzog',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/davidjamesherzog/',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/evadgozreh',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link: 'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },
    sitemap: {
      hostname: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/'
    },
    smoothScroll: true
  },
}
