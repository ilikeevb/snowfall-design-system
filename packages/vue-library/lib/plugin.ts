import type { Plugin } from "vue"

// @ts-ignore because Intellij does not understand imports within Lerna monorepos
import { defineCustomElements, setAssetPath } from "stencil-library/loader"

const ASSET_PATH = new URL("../stencil-library/dist/", import.meta.url).href

export const ComponentLibrary: Plugin = {
  install() {
    setAssetPath(ASSET_PATH)
    defineCustomElements()
  },
}
