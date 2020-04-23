<template>
  <div class="content">
    <vue-tabs-chrome ref="tab" v-model="tab" :tabs="tabs" @contextmenu="handleClick" />
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
          favico: require('../assets/google.jpg')
        },
        {
          label: 'facebook',
          key: 'facebook',
          favico: require('../assets/fb.jpg')
        },
        {
          label: 'New Tab',
          key: 'costomKey',
          favico: (h, { tab, index }) => {
            return h('span', tab.label)
          }
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
    }
  }
}
</script>
