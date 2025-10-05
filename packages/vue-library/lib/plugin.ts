import type { Plugin } from "vue"

// @ts-ignore because Intellij does not understand imports within Lerna monorepos
import {
  defineCustomElements,
} from "stencil-library/loader"

export const ComponentLibrary: Plugin = {
  install() {
    defineCustomElements()
  },
}
