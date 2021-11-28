import { defaultOptions, MaxLines, SnipMethod, SnipOptions } from './defaultOptions'
import { getSnipText } from './element/element.snip'
import { getInserted, getUpdate, getUnbind } from './directive'
import { Plugin } from 'vue'

export interface ElementState {
  fullText: string
  maxLines: MaxLines
  snipMethod: SnipMethod
  prevWidth?: number
  prevHeight?: number
  observer?: ResizeObserver
}

export interface VueSnipState {
  elementMap: WeakMap<HTMLElement, ElementState>
  options: SnipOptions
}

export default ((): Plugin => ({
  install (Vue, options: SnipOptions) {
    options = {
      ...defaultOptions,
      ...options
    }

    const elementMap = new WeakMap()
    const state: VueSnipState = {
      elementMap,
      options
    }

    const snipText = getSnipText(state)
    const inserted = getInserted(state, snipText)
    const update = getUpdate(state, snipText)
    const unbind = getUnbind(state)

    const isVue3 = parseFloat(Vue.version[0]) > 2

    Vue.directive(options.directiveName, {
      [isVue3 ? 'mounted' : 'inserted']: inserted,
      [isVue3 ? 'updated' : 'update']: update,
      [isVue3 ? 'unmounted' : 'unbind']: unbind
    })

    if (options.exposeSnipFunction) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Vue.prototype[`$${options.snipFunctionName}`] = snipText
    }

    if (options.debugMode) {
      globalThis.__VueSnipState = state
    }
  }
}))()