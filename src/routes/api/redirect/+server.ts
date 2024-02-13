export async function GET() {
  const email = 'piotrolej@gmail.com';

  // Return a redirect response
  return new Response(undefined, {
    status: 302,
    headers: {
      'Location': `mailto:${email}`
    }
  });
}
