export function useIsMobile(maxWidth = 768) {
  const query = `(max-width: ${maxWidth}px)`;
  const media = window.matchMedia(query);

  return media.matches;
}
