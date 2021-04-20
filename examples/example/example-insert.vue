<template>
  <div class="content">
    <vue-tabs-chrome ref="tab" v-model="tab" :tabs="tabs" insert-to-after />
    <div class="btns">
      <button @click="addTab">New Tab</button>
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
    }
  }
}
</script>
