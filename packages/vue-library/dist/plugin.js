import { defineCustomElements, setAssetPath } from "stencil-library/loader";
const ASSET_PATH = new URL("../stencil-library/dist/", import.meta.url).href;
export const ComponentLibrary = {
    install() {
        setAssetPath(ASSET_PATH);
        defineCustomElements();
    },
};
//# sourceMappingURL=plugin.js.map