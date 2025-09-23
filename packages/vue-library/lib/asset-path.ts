import { setAssetPath } from "stencil-library/dist/components/index.js"

const assetsBaseUrl = new URL("../stencil-library/dist/stencil-library/", import.meta.url).href

export const ensureComponentAssetPath = () => setAssetPath(assetsBaseUrl)
