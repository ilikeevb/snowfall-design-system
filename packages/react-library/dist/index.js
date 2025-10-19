import { setAssetPath } from 'stencil-library/dist/components/index.js';
const resolveAssetPath = () => {
    try {
        return new URL('../../stencil-library/dist/stencil-library/', import.meta.url).href;
    }
    catch (error) {
        if (typeof window !== 'undefined') {
            return new URL('stencil-library/dist/stencil-library/', window.location.origin).href;
        }
        return undefined;
    }
};
const assetPath = resolveAssetPath();
if (assetPath) {
    setAssetPath(assetPath);
}
export * from './components/stencil-generated/components';
//# sourceMappingURL=index.js.map