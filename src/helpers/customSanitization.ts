// Allow only a super restricted set of tags and attributes
import sanitizeHtml from "sanitize-html";


// https://www.npmjs.com/package/sanitize-html

// Allow only a super restricted set of tags and attributes
export const customSanitization = (html: string) => {
  return sanitizeHtml(html, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "h5", "h6", "p", "em", "strong", "a", "ul", "ol", "li", "span", "b"
    ],
    allowedAttributes: {
      'a': [ 'href' ]
    },
  });
}
