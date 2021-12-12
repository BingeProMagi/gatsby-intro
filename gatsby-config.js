module.exports = {
    siteMetadata: {
        title: 'Moestad Monsters',
        description: 
        'In Ormanäs there are mosters living in a red house. Scary, scary stuff.'
    },
    plugins: [
        'gatsby-plugin-emotion', 
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                },
                gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
                plugins: [{ resolve: 'gatsby-remark-images' }],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: 'posts',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'images',
            },
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
                production: true,
                disable: !process.env.ANALYZE_BUNDLE_SIZE,
                generateStatsFile: true,
                analyzerMode: 'static',
            },
        },
    ],
}