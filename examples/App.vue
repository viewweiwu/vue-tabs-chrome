<template>
  <div id="app">
    <vue-tabs-chrome ref="tab" v-model="tab" :tabs="tabs"></vue-tabs-chrome>
    <button @click="addTab">＋</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      tab: 'google',
      tabs: [
        {
          label: 'google',
          key: 'google',
          favico: require('./assets/google.jpg')
        },
        {
          label: 'facebook',
          key: 'facebook',
          favico: require('./assets/fb.jpg')
        }
      ]
    }
  },
  methods: {
    addTab () {
      let len = this.tabs.length
      let newTabs = [
        {
          label: 'tab' + (len + 1),
          key: 'tab' + (len + 1)
        }
        // {
        //   label: 'tab' + (len + 2),
        //   key: 'tab' + (len + 2)
        // }
      ]
      this.$refs.tab.addTab(...newTabs)
      this.tab = 'tab' + (len + 1)
    }
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 50px;
  background-color: #f1f3f4;
}
</style>
