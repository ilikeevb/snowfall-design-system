import { defineCustomElements, } from "stencil-library/loader";
import { applyStencilAssetPath } from "./asset-path";
applyStencilAssetPath();
export const ComponentLibrary = {
    install() {
        defineCustomElements();
    },
};
//# sourceMappingURL=plugin.js.map