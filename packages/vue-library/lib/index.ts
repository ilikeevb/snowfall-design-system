import { setAssetPath } from 'stencil-library/dist/components/index.js';

setAssetPath(new URL('../../stencil-library/dist/stencil-library/dist/', import.meta.url).href);

export * from "./stencil-generated/components"
export * from "./plugin"
