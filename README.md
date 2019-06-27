# get-web-manifest

> Obtain the manifest for the current page

## Why?

There are a number of reasons why you might want to access the manifest of the current page. I wrote this because I'm interested in using [Web Share Target](https://wicg.github.io/web-share-target/), and [the spec explicitly permits customization of the registration mechanism](https://wicg.github.io/web-share-target/#registration-of-web-share-targets). By connecting multiple applications to the same sharing system, users of any app will be able to share data with any other application, even on browsers that don't yet support Web Share.

## Installation

```bash
npm install --save get-web-manifest
```

## Usage

`get-web-manifest` will use a custom `fetch` function if given; for example, if you want to use a polyfill, pass it as an argument. If no polyfill is given then it will fall back to `window.fetch`.

```js
// Supplying your own polyfill
import fetch from 'isomorphic-fetch';
import getWebManifest from 'get-web-manifest';

export async function doSomething() {
  await getWebManifest({
    fetch: fetch,
  });
}
```

```js
// Relying on `window.fetch`
import getWebManifest from 'get-web-manifest';

export async function doSomething() {
  await getWebManifest();
}
```
