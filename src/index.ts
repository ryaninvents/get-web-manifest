export default function getWebManifest({ fetch = window.fetch } = {}) {
  const linkEl = document.querySelector('head link[rel="manifest"]');
  if (!linkEl) return null;

  return fetch(linkEl.getAttribute('href')).then((response) => response.json());
}
