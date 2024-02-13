import { baseUrl } from '../../../constans/constans';
import type { PostType } from '../../../types';


async function getAllPosts() {
  const postsRes = await fetch(`${baseUrl}posts`);
  const posts = await postsRes.json();
  return {
    posts: posts,
  };
}

export async function GET() {
  const data = await getAllPosts();
  const posts: PostType[] = data.posts;

  console.log(posts[0]);

  const pages = [
    { url: '', lastmod: '2023-02-13' },
    { url: '/o-mnie', lastmod: '2023-02-13' },
    { url: '/kontakt', lastmod: '2023-02-13' },
    // Add more pages as needed
  ];

  if (posts?.length > 0) {
    posts.forEach((post) => {
      pages.push({ url: `/blog/${post.slug}`, lastmod: post.modified });
    });
  }
  // Generate XML string for each page
  const urlsXml = pages
    .map(
      (page) =>
        `<url>
            <loc>https://www.olejtopisze.pl${page.url}</loc>
            <lastmod>${page.lastmod}</lastmod>
        </url>`,
    )
    .join('');

  // Full XML response
  const xmlResponse = `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            ${urlsXml}
        </urlset>
    `.trim();

  // Return the XML response
  return new Response(xmlResponse, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
