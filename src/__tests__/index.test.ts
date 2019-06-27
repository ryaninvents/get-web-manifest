import getWebManifest from '..';

async function mockFetch() {
  return {
    async json() {
      return {
        name: 'My Web App'
      }
    }
  } as any;
}

function injectLink({ rel, href }) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', rel);
  linkEl.setAttribute('href', href);
  document.head.appendChild(linkEl);
  return () => {
    document.head.removeChild(linkEl);
  }
}

describe('getWebManifest', () => {
  describe('when link is present', () => {
    let unmount = null;
    beforeAll(() => {
      unmount = injectLink({ rel: 'manifest', href: '/manifest.json' });
    });
    afterAll(() => {
      unmount();
    });
    it('should load manifest from <link rel="manifest">', async () => {
      const manifest = await getWebManifest({ fetch: mockFetch });
      expect(manifest.name).toBe('My Web App');
    });
  })
  it('should return null if no manifest is defined', async () => {
      const manifest = await getWebManifest({ fetch: mockFetch });
      expect(manifest).toBe(null);
  });
});