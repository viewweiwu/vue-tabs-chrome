<template lang="pug">
  .vue-tabs-chrome
    .tabs-content(ref="content")
      .tabs-divider(
        v-for="i in tabs.length"
        :key="i"
        :style="{ left: (tabWidth - gap * 2) * i + gap + 'px' }"
      )
      .tabs-item(
        v-for="(tab, i) in tabs"
        :class="[{ active: tab[tabKey] === value }, `tab-${tab[tabKey]}`]"
        :key="tab[tabKey]"
        :style="{ width: tabWidth + 'px' }"
      )
        .tabs-background
          .tabs-background-content
          svg.tabs-background-before(width="7" height="7")
            path(d="M 0 7 A 7 7 0 0 0 7 0 L 7 7 Z")
          svg.tabs-background-after(width="7" height="7")
            path(d="M 0 0 A 7 7 0 0 0 7 7 L 0 7 Z")
        .tabs-close(@click.stop="handleDelete(tab, i)")
          slot(v-if="$slots['close-icon']" name="close-icon")
          svg.tabs-close-icon(v-else width="16" height="16" stroke="#595959")
            path(d="M 4 4 L 12 12 M 12 4 L 4 12")
        .tabs-main(:title="tab.label")
          span.tabs-label {{ tab.label }}
</template>

<script>
import Draggabilly from 'draggabilly'

const getInstanceAt = (tabs, tab, tabWidth, tabKey, gap) => {
  let halfWidth = (tabWidth - gap) / 2
  let x = tab._instance.position.x
  for (let i = 0; i < tabs.length; i++) {
    let targetX = tabs[i]._x - 0.5
    if (tab[tabKey] === tabs[i][tabKey]) continue
    // in range
    if (targetX <= x && x < targetX + halfWidth / 2) {
      // before range
      return {
        direction: 'left',
        instance: tabs[i]._instance,
        targetTab: tabs[i]
      }
    } else if (targetX + halfWidth / 2 <= x && x < targetX + halfWidth) {
      // after range
      return {
        direction: 'right',
        instance: tabs[i]._instance,
        targetTab: tabs[i]
      }
    }
  }
  return {
    direction: null,
    instance: null,
    targetTab: tab
  }
}

export default {
  name: 'vue-tabs-chrome',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    tabs: {
      type: Array,
      default: () => []
    },
    tabKey: {
      type: String,
      default: 'key'
    },
    minWidth: {
      type: Number,
      default: 40
    },
    maxWidth: {
      type: Number,
      default: 245
    }
  },
  data () {
    return {
      gap: 7,
      tabWidth: null
    }
  },
  mounted () {
    this.calcTabWidth()
    window.addEventListener('resize', this.handleResize)
    this.setup()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    calcTabWidth () {
      let { tabs, maxWidth, minWidth, gap } = this
      let $content = this.$refs.content
      if (!$content) return Math.max(maxWidth, minWidth)
      let contentWidth = $content.clientWidth - gap * 2
      let width = contentWidth / tabs.length
      width += gap * 2
      if (width > maxWidth) width = maxWidth
      if (width < minWidth) width = minWidth
      this.tabWidth = width
    },
    setup () {
      let { tabs } = this
      tabs.forEach((tab, i) => {
        this.addInstance(tab, i)
      })
    },
    addInstance (tab, i) {
      let { tabWidth, tabKey, gap } = this
      if (tab._instance) return
      let $content = this.$refs.content
      let $el = $content.querySelector(`.tab-${tab[tabKey]}`)
      tab._instance = new Draggabilly($el, { axis: 'x', containment: $content, handle: '.tabs-main' })
      let x = (tabWidth - gap * 2) * i
      tab._x = x
      tab._instance.setPosition(x, 0)
      tab._instance.on('pointerDown', (e, pointer) => this.handlePointerDown(e, tab, i))
      tab._instance.on('dragMove', (e, pointer, moveVector) => this.handleDragMove(e, moveVector, tab, i))
      tab._instance.on('dragEnd', (e, pointer) => this.handleDraEnd(e, tab, i))
    },
    addTab (...tabs) {
      this.tabs.push(...tabs)
      this.$nextTick(() => {
        this.setup()
        this.doLayout()
      })
    },
    doLayout () {
      this.calcTabWidth()
      let { tabWidth, tabs, gap } = this
      tabs.forEach((tab, i) => {
        let instance = tab._instance
        let _x = (tabWidth - gap * 2) * i
        tab._x = _x
        instance.setPosition(_x, 0)
      })
    },
    handleDelete (tab, i) {
      let { tabKey, tabs, value } = this
      let index = tabs.findIndex(item => item[tabKey] === value)
      if (i === index) {
        let before = tabs[i - 1]
        this.$emit('input', before ? before[tabKey] : null)
      }
      tabs.splice(i, 1)
      this.doLayout()
    },
    handleResize (e) {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.doLayout()
      }, 100)
    },
    handlePointerDown (e, tab, i) {
      let { tabKey } = this
      this.$emit('input', tab[tabKey])
    },
    handleDragMove (e, moveVector, tab, i) {
      let { tabWidth, tabs, tabKey, gap } = this
      let { instance, targetTab } = getInstanceAt(tabs, tab, tabWidth, tabKey, gap)
      if (instance) {
        this.swapTab(tab, targetTab)
      }
    },
    handleDraEnd (e, tab) {
      let _instance = tab._instance
      if (_instance.position.x === 0) return
      setTimeout(() => {
        _instance.element.classList.add('move')
        _instance.setPosition(tab._x, 0)
      }, 50)
      setTimeout(() => {
        _instance.element.classList.remove('move')
      }, 200)
    },
    swapTab (tab, targetTab) {
      let { tabKey, tabs } = this
      let index, targetIndex
      for (let i = 0; i < tabs.length; i++) {
        if (tab[tabKey] === tabs[i][tabKey]) {
          index = i
        }
        if (targetTab[tabKey] === tabs[i][tabKey]) {
          targetIndex = i
        }
      }
      if (index !== targetIndex) {
        [tabs[index], tabs[targetIndex]] = [tabs[targetIndex], tabs[index]]
      }
      // swap x
      let _x = tab._x
      tab._x = targetTab._x
      targetTab._x = _x

      // swap position
      let _instance = targetTab._instance
      setTimeout(() => {
        _instance.element.classList.add('move')
        _instance.setPosition(_x, _instance.position.y)
      }, 50)
      setTimeout(() => {
        _instance.element.classList.remove('move')
      }, 200)
    }
  }
}
</script>

<style lang="less">
.vue-tabs-chrome {
  @bg: #dee1e6;
  @gap: 7px;
  @divider: #8a8e92;
  @speed: 150ms;

  padding-top: 10px;
  background-color: @bg;
  position: relative;

  .tabs-content {
    height: 34px;
    position: relative;
    overflow: hidden;
  }
  /* divider */
  .tabs-divider {
    left: 0;
    top: 50%;
    width: 1px;
    height: 20px;
    background-color: @divider;
    position: absolute;
    transform: translateY(-50%);
  }

  .tabs-item {
    height: 100%;
    display: flex;
    align-items: center;
    user-select: none;
    box-sizing: border-box;
    transition: width @speed;
    position: absolute;
    // animation: tab-show @speed;
    &:hover {
      .tabs-background-content {
        background-color: #f2f3f5;
      }
      .tabs-background-before,
      .tabs-background-after {
        fill: #f2f3f5;
      }
    }
    &.move {
      transition: @speed;
    }
    &.active {
      z-index: 2;
      .tabs-background {
        opacity: 1;
      }
      .tabs-background-content {
        background-color: #fff;
      }
      .tabs-background-before,
      .tabs-background-after {
        fill: #fff;
      }
    }
    &.is-dragging {
      z-index: 2;
    }
    &:first-of-type {
      .tabs-dividers::before {
        opacity: 0;
      }
    }
    &:last-of-type {
      .tabs-dividers::after {
        opacity: 0;
      }
    }
    .tabs-main {
      height: 100%;
      left: 0;
      right: 0;
      margin: 0 @gap * 2;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      transition: @speed;
      z-index: 1;
      display: flex;
      align-items: center;
      position: absolute;
      box-sizing: border-box;
      overflow: hidden;
    }
    .tabs-close {
      top: 50%;
      right: @gap * 2;
      width: 16px;
      height: 16px;
      z-index: 2;
      position: absolute;
      transform: translateY(-50%);
    }
    .tabs-close-icon {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      &:hover {
        stroke: #000;
        background-color: #e8eaed;
      }
    }
    /* background */
    .tabs-background {
      width: 100%;
      height: 100%;
      padding: 0 @gap - 1px;
      position: absolute;
      transition: opacity @speed * 2;
      box-sizing: border-box;
      position: relative;
    }
    .tabs-background-content {
      height: 100%;
      border-top-left-radius: @gap;
      border-top-right-radius: @gap;
      transition: background @speed;
    }
    .tabs-background-before,
    .tabs-background-after {
      bottom: 0;
      position: absolute;
      fill: transparent;
      transition: background @speed;
    }
    .tabs-background-before {
      left: -1px;
    }
    .tabs-background-after {
      right: -1px;
    }
  }
  @keyframes tab-show {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
}
</style>
