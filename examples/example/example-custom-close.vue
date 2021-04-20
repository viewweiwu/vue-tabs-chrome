<template>
  <div class="content example-custom-close">
    <vue-tabs-chrome ref="tab" v-model="tab" :tabs="tabs" @contextmenu="handleClick" :onClose="onClose" />
    <div class="btns">
      <button @click="addTab">New Tab</button>
      <button @click="removeTab">Remove active Tab</button>
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
          class: 'go',
          favicon: require('../assets/google.jpg')
        },
        {
          label: 'facebook',
          key: 'facebook',
          favicon: require('../assets/fb.jpg')
        }
      ]
    }
  },
  methods: {
    addTab () {
      let item = 'tab' + Date.now()
      let newTabs = [
        {
          label: 'New Tab',
          key: item,
          closable: false
        }
      ]
      this.$refs.tab.addTab(...newTabs)
      this.tab = item
    },
    removeTab () {
      this.$refs.tab.removeTab(this.tab)
    },
    handleClick (e, tab, i) {
      console.log(e, tab, i)
    },
    onClose (tab, key, index) {
      console.log(tab, key, index)
      // do not update tab key
      if (tab.class === 'go') {
        alert('you cant close this tab')
        return false
      }
      return true
    }
  }
}
</script>

<style lang="less">
.example-custom-close {
  .go {
    .tabs-close {
      svg {
        display: none;
      }
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #f06;
        position: relative;
        display: inline-block;
      }
    }
  }
}
</style>
