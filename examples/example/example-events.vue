<template>
  <div class="content">
    <vue-tabs-chrome
      ref="tab"
      v-model="tab"
      :tabs="tabs"
      @dragstart="handleDragStart"
      @dragging="handleDragging"
      @dragend="handleDragEnd"
      @swap="handleSwap"
      @remove="handleRemove"
      @contextmenu="handleRightClick"
      @click="handleTabClick"
    />
    <div class="btns">
      <button @click="addTab">New Tab</button>
    </div>
    <div>
      {{ msgList }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: 'google',
      tabs: [
        {
          label: 'google',
          key: 'google',
          favicon: require('../assets/google.jpg')
        },
        {
          label: 'facebook',
          key: 'facebook',
          favicon: require('../assets/fb.jpg')
        }
      ],
      msgList: []
    }
  },
  methods: {
    addTab () {
      let item = 'tab' + Date.now()
      let newTabs = [
        {
          label: 'New Tab',
          key: item
        }
      ]
      this.$refs.tab.addTab(...newTabs)
      this.tab = item
    },
    handleDragStart (e, tab, index) {
      console.info('dragstart', e, tab, index)
      this.msgList.push('dragstart')
    },
    handleDragging (e, tab, index) {
      console.info('dragging', e, tab, index)
      this.msgList.push('dragging')
    },
    handleDragEnd (e, tab) {
      console.info('dragend', e, tab)
      this.msgList.push('dragend')
    },
    handleRemove (tab, index) {
      console.info('remove', tab, index)
      this.msgList.push('remove')
    },
    handleSwap (tab, targetTab) {
      console.info('swap', tab, targetTab)
      this.msgList.push('swap')
    },
    handleRightClick (e, tab, index) {
      console.info('contextmenu', e, tab, index)
      this.msgList.push('contextmenu')
    },
    handleTabClick (e, tab, index) {
      console.info(e, tab, index)
      this.msgList.push('click')
    }
  }
}
</script>
