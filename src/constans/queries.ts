export const graphqlUrl = 'https://serwer2304048.home.pl/wordpress/graphql';

export const getData = async (query: string) => {
  const data = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  return data.json();
};

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
