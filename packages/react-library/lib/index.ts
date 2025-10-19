import { setAssetPath as setStencilAssetPath } from 'stencil-library/dist/components/index.js';

const DEFAULT_ASSETS_PATH = '/assets/';

setStencilAssetPath(DEFAULT_ASSETS_PATH);

export const setSnowfallAssetsPath = (path: string) => {
  if (!path) {
    return;
  }

  const normalizedPath = path.endsWith('/') ? path : `${path}/`;

  setStencilAssetPath(normalizedPath);
};

export const SNOWFALL_DEFAULT_ASSETS_PATH = DEFAULT_ASSETS_PATH;

export * from './components/stencil-generated/components';