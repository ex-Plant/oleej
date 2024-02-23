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
            mediaItemUrl
            altText
          }
        }
        blogThirdFotoId {
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
  }`;
};
