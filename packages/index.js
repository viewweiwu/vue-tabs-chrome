import VueTabsChrome from './vue-tabs-chrome'

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component(VueTabsChrome.name, VueTabsChrome)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

VueTabsChrome.install = install

export { VueTabsChrome }

export default VueTabsChrome
