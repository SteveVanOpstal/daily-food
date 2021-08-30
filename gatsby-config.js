module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Daily Food',
    streamStart: '12:00am',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        name: 'Daily Food',
        short_name: 'DailyFood',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#772ce8',
        theme_color_in_head: false,
        display: 'standalone',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'server',
        fieldName: 'server',
        url: 'http://localhost:8080/graphql',
      },
    },
  ],
};
