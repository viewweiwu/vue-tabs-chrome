<template>
  <div class="content">
    <vue-tabs-chrome ref="tab" v-model="tab" :tabs="tabs" :props="{ key: 'meta.key', label: 'meta.title' }" />
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
      tab: 'hello1',
      tabs: [
        {
          label: 'google',
          key: 'google',
          favicon: require('../assets/google.jpg'),
          meta: {
            key: 'hello1'
          }
        },
        {
          label: 'facebook',
          key: 'facebook',
          favicon: require('../assets/fb.jpg'),
          meta: {
            key: 'hello2'
          }
        },
        {
          label: 'New Tab',
          key: 'any-string-key',
          favicon: (h, { tab, index }) => {
            return h('span', { style: { color: 'red' } }, '*')
          },
          meta: {
            title: 'aaa',
            key: 'hello3'
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
          meta: {
            key: item
          }
        }
      ]
      this.$refs.tab.addTab(...newTabs)
      this.tab = item
    },
    removeTab () {
      this.$refs.tab.removeTab(this.tab)
    }
  }
}
</script>
