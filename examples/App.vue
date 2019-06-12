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
      tab: 'tab3',
      tabs: [
        {
          label: 'tab1',
          key: 'tab1'
        },
        {
          label: 'tab2',
          key: 'tab2'
        },
        {
          label: 'tab3',
          key: 'tab3'
        },
        {
          label: 'tab4',
          key: 'tab4'
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
        },
        {
          label: 'tab' + (len + 2),
          key: 'tab' + (len + 2)
        }
      ]
      this.$refs.tab.addTab(...newTabs)
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
