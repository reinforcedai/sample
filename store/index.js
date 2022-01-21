export const state = () => ({
    siteName: 'FRONTEND SAMPLE',
    companyName: 'FRONTEND SAMPLE LIMITED',
    navItems: [
      { title: 'Home', to: '/', },
      { title: 'Services', to: '/services', },
      { title: 'About', to: '/about', },
      { title: 'Contact', to: '/contact', },
      ],
      socialLinks: [
        {
          icon: 'mdi-facebook',
          url: 'https://facebook.com/',
          text: 'facebook',
        },
        {
          icon: 'mdi-twitter',
          url: 'https://twitter.com/',
          text: 'twitter',
        },
        {
          icon: 'mdi-instagram',
          url: 'https://www.instagram.com/',
          text: 'instagram',
        },
        {
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/company/',
          text: 'linkedin',
        },
      ],
})
export const getters = {
    siteName: (state) => state.siteName,
    companyName: (state) => state.companyName,
    navItems: (state) => state.navItems,
    socialLinks: (state) => state.socialLinks,
}