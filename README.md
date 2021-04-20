# vue-tabs-chrome
A Vue2 component for Chrome-like tabs.<br>
Drag-and-drop support provided by Draggabilly by @desandro.

If you are using Vue3, please see here.
https://github.com/viewweiwu/vue3-tabs-chrome

## Live Demo
[https://viewweiwu.github.io/vue-tabs-chrome/](https://viewweiwu.github.io/vue-tabs-chrome/)

## Install
```
npm i vue-tabs-chrome -S
```

## Usage
``` html
<template>
  <vue-tabs-chrome v-model="tab" :tabs="tabs" />
</template>
<script>
import Vue from 'vue'
import VueTabsChrome from 'vue-tabs-chrome'

export default {
  components: {
    VueTabsChrome
  },
  data () {
    return {
      tab: 'google',
      tabs: [
        {
          label: 'google',
          key: 'google',
          closable: false,
          favicon: require('./assets/google.jpg')
        },
        {
          label: 'facebook',
          key: 'facebook',
          favicon: require('./assets/fb.jpg')
        },
        {
          label: 'New Tab',
          key: 'any-string-key',
          favicon: (h, { tab, index }) => {
            return h('span', tab.label)
          }
        }
      ]
    }
  }
}
</script>
```

## Attributes

| Attributes | Description | Type | Default |
| - | - | - | - |
| tabs | tabs configuration. Details are mentioned below. | Array | [] |
| value / v-model | binding value | String | - |
| props | configuration options, Details are mentioned below. |
| insert-to-after | Insert to tag's after | Boolean | false |
| is-mousedown-active | set tab is active when mousedown | Boolean | true |
| render-label | render label | Function(tab, index) | - |
| auto-hidden-close-icon-width | auto hidden close tab width. if tabWidth < 120, close icon can not show. If you don’t want this feature, you can set the value to 0. | Number | 120 |
| on-close | when tab close btn click. if return false, it cannot be closed. | Function(tab, key, index) | - |

## Tabs Attributes
| Attributes | Description | Type | Default |
| - | - | - | - |
| label | tab label | String | - |
| key | tab key | String | - |
| class | tab class | String | - |
| closable | tab closable | Boolean | true |
| dragable | tab tragable | Boolean | true |
| swappable | tab swappable | Boolean | true |
| favicon | tab favicon. Custom favicon renderer. It uses Vue's render function. It accepts two arguments: the first is h, the second is an object. including tab and index | Function, required image | - |

## Props Attributes
| Attributes | Description | Type | Default |
| - | - | - | - |
| label | specify which key of tab object is used as the tab's label | String | 'label' |
| key | specify which key of tab object is used as the tab's key | String | 'key' |

## Methods 
| Method | Description | Parameters |
| - | - | - |
| addTab | add tab | (tab1, [, ...tab, ...tabN]) |
| removeTab | remove tab | (tabKey or index) |
| getTabs | get tabs | - |

## Events
| Event Name | Description | Parameters |
| - | - | - |
| click | Triggered when the user's pointer is pressed and unpressed and has not moved enough to start dragging. | (event, tab, index) |
| swap | Swap tab | (tab, targetTab) |
| remove | Remove tab | (tab, index) |
| contextmenu | Contextmenu event | (event, tab, index) |
| dragstart | Tab dragstart event | (event, tab, index) |
| dragging | Tab dragstart event | (event, tab, index) |
| dragend | Tab dragend event | (event, tab) |

## Slots
| Attributes | Description |
| - | - |
| after | Tab after slot |

## Change log

## v0.9.0

1. feat: tab can set dragable.
2. feat: tab can set swappable.
3. feat: can be introduced with "Vue.components" instead of "Vue.use".
4. feat: new example UI.
5. feat: new 'Chrome UI' example.
6. feat: new 'swap & drag' example.
7. remove: remove 'Save to Localstorage' example.

## 2020/9/21
fix: tab[key] => tab[this.tabKey]

## 2020/9/21
feat: add after slots
feat: add drag events

## 2020/9/7
fix: closable not work
feat: auto hidden close tab width

## 2020/8/19
add new feature: tab close event listener & tab custom class

## 2020/2/10
add new feature: tab closable

## License
MIT
