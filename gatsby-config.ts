import path from 'path';

export default {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `images`, 'png'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gladiators of JS`,
        short_name: `Gladiators`,
        start_url: `/`,
        description: `Gladiators page`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins:400,500,600,700,800,900'],
        },
      },
    },
    'gatsby-plugin-react-svg',
  ],
};
