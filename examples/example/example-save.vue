<template>
  <div class="content">
    <vue-tabs-chrome
      ref="tab"
      v-model="tab"
      :tabs="tabs"
      @swap="handleSwap"
      @remove="handleRemove"
    />
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
  beforeMount () {
    this.load()
  },
  methods: {
    addTab () {
      let name = prompt('input tab name')
      if (!name) return
      let item = 'tab' + Date.now()
      let newTabs = [
        {
          label: name,
          key: item
        }
      ]
      this.$refs.tab.addTab(...newTabs)
      this.tab = item
      this.save()
    },
    load () {
      let tabs = localStorage.getItem('VUE_TABS_CHROME')
      if (tabs) {
        this.tabs = JSON.parse(tabs)
      }
    },
    save () {
      localStorage.setItem('VUE_TABS_CHROME', JSON.stringify(this.$refs.tab.getTabs()))
    },
    handleSwap (tab, targetTab) {
      console.log(tab, targetTab)
      this.save()
    },
    handleRemove (tab, index) {
      console.log(tab, index)
      this.save()
    }
  }
}
</script>
