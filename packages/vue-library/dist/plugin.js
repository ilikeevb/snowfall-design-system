import { defineCustomElements, } from "stencil-library/loader";
import { applyStencilAssetPath } from "./asset-path";
export const ComponentLibrary = {
    async install() {
        applyStencilAssetPath();
        defineCustomElements();
    },
};
//# sourceMappingURL=plugin.js.map