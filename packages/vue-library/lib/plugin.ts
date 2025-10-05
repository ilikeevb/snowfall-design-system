import type { Plugin } from "vue"

// @ts-ignore because Intellij does not understand imports within Lerna monorepos
import {
  defineCustomElements,
} from "stencil-library/loader"
import { applyStencilAssetPath } from "./asset-path"

export const ComponentLibrary: Plugin = {
  async install() {
    applyStencilAssetPath()
    defineCustomElements()
  },
}
