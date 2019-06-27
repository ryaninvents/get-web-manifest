export default async function getWebManifest({ fetch = window.fetch } = {}) {
  const linkEl = document.querySelector('head link[rel="manifest"]');
  if (!linkEl) return null;
  
  const response = await fetch(linkEl.getAttribute('href'));
  return response.json();
}