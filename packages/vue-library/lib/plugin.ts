import type { Plugin } from "vue"

// @ts-ignore because Intellij does not understand imports within Lerna monorepos
import {
  defineCustomElements,
} from "stencil-library/loader"

import { ensureComponentAssetPath } from "./asset-path"

export const ComponentLibrary: Plugin = {
  async install() {
    ensureComponentAssetPath();
    defineCustomElements()
  },
}
