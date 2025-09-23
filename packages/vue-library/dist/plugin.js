import { defineCustomElements, } from "stencil-library/loader";
import { ensureComponentAssetPath } from "./asset-path";
export const ComponentLibrary = {
    async install() {
        ensureComponentAssetPath();
        defineCustomElements();
    },
};
//# sourceMappingURL=plugin.js.map