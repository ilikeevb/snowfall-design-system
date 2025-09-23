import { setAssetPath } from 'stencil-library/dist/components/index.js';

setAssetPath(new URL('../stencil-library/dist/stencil-library/', import.meta.url).href);

export * from './components/stencil-generated/components';