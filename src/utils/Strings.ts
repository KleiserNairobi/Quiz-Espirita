export function extractFirstName(name: string): string {
  const words = name.split(' ');
  return words[0];
}
