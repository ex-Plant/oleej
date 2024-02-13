export async function GET() {
  // Define the email address you want to redirect to
  const email = 'piotrolej@gmail.com';

  // Return a redirect response
  return new Response(undefined, {
    status: 302,
    headers: {
      'Location': `mailto:${email}`
    }
  });
}
