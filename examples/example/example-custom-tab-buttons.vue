<template>
  <div class="content example-custom-close">
    <vue-tabs-chrome ref="tab" v-model="tab" :tabs="tabs" @contextmenu="handleClick" :onClose="onClose" :tab-close-width="50">
      <template #close-icon="{tab: tabSelected, index}">
        <div class="btn-container">
          <a class="btn-1" @click.stop="button1(tabSelected, index)"></a>
          <a class="btn-2" @click.stop="button2(tabSelected, index)"></a>
        </div>
      </template>
    </vue-tabs-chrome>
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

    button1 (tabSelected, index) {
      console.log(tabSelected, index)
      alert('You pressed button 1! index: ' + index + 'tab: ' + JSON.stringify(tabSelected))
    },
    button2 (tabSelected, index) {
      console.log(tabSelected, index)
      alert('You pressed button 2! index: ' + index + 'tab: ' + JSON.stringify(tabSelected))
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

.btn-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.btn-1 {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: gold;

  &:hover {
    background-color: black;
  }
}

.btn-2 {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: silver;

  &:hover {
    background-color: black;
  }
}
</style>
