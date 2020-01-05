import { useStaticQuery, graphql } from 'gatsby'

const usePosts = () => {
    const data = useStaticQuery(graphql`
       query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            image
                        }
                        fields {
                            slug
                        }
                        excerpt
                    }
                }
            }
       }
    `)

    const posts = data.allMarkdownRemark.edges.map(({node}) => ({
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        image: node.frontmatter.image,
        slug: node.fields.slug,
        excerpt: node.excerpt
    }))

    return posts

}

export default usePosts