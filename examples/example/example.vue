<template>
  <div class="content">
    <vue-tabs-chrome ref="tab" :minHiddenWidth="120" v-model="tab" :tabs="tabs" @contextmenu="handleClick" />
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
          favicon: require('../assets/google.jpg')
        },
        {
          label: 'facebook',
          key: 'facebook',
          favicon: require('../assets/fb.jpg')
        },
        {
          label: 'New Tab',
          key: 'any-string-key'
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
          key: item
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
