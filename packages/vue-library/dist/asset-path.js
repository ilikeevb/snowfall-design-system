import { setAssetPath } from 'stencil-library/dist/components/index.js';
const stencilAssetPath = new URL('../../stencil-library/dist/stencil-library/dist/', import.meta.url).href;
export const applyStencilAssetPath = () => {
    setAssetPath(stencilAssetPath);
};
//# sourceMappingURL=asset-path.js.map