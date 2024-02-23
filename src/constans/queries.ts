
export const getPostDataQuery = (slug: string) => {
  return `
  {
    post(id: "${slug}", idType: SLUG) {
      id
      title
      slug
      date
      comments {
        nodes {
          parentId
          id
          content
          author{
            node{
              name
            }
          }
        }
      }
      blogPost {
        blogDesktopFotoId {
          node {
            altText
            mediaItemUrl
          }
        }
        blogRightSideFotoId {
          node {
            altText
            mediaItemUrl
          }
        }
        blogSecondFotoId {
          node {
            altText
            mediaItemUrl
          }
        }
        blogThirdFotoId {
          node {
            altText
            mediaItemUrl
          }
        }
        mobileFotoId {
          node {
            altText
            mediaItemUrl
          }
        }
        postContent
        postContentSecond
        postContentThird
        postDescription
        title
        category
      }
    }
    posts(where: {orderby: {field: DATE, order: ASC}}) {
      nodes {
        title
        slug
        date
        id
          blogPost {
            category
            excerpt
            mobileFotoId {
                node {
                  altText
                  mediaItemUrl
              }
            }
          }
        }
      }
    page(id:"cG9zdDoxNjk=") {
      featuredImage{
        node{
          altText
          mediaItemUrl
        }
      }
    }
  }`;
};
export const allPostsQuery = `
  {
    posts(where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        title
        slug
        date
        id
          blogPost {
            category
            excerpt
            mobileFotoId {
                node {
                  altText
                  mediaItemUrl
              }
            }
          }
        }
      }
  }`;
