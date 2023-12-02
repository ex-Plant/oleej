export function spacesToDashes (string: string) {
  return string.replace(/\s+/g, '-').toLowerCase();
}
