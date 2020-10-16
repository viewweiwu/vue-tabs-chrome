<template>
  <div class="content">
    <vue-tabs-chrome ref="tab" v-model="tab" :tabs="tabs">
      <button slot="after" style="height: 20px line-height: 20px; padding: 0 10px;" @click="addTab">➕</button>
      <button slot="after" style="height: 20px line-height: 20px; padding: 0 10px;margin-left: 5px;" @click="handleDog">🐶</button>
    </vue-tabs-chrome>
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
          favico: require('../assets/google.jpg')
        },
        {
          label: 'facebook',
          key: 'facebook',
          favico: require('../assets/fb.jpg')
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
    handleDog () {
      alert('hello!')
    }
  }
}
</script>
