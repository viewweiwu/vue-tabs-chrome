<template>
  <div class="content">
    <vue-tabs-chrome theme="custom" ref="tab" v-model="tab" :tabs="tabs" :gap="2" />
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
    }
  }
}
</script>

<style lang="less">
.vue-tabs-chrome.theme-custom {
  padding-top: 0;
  background-color: transparent;
  overflow: hidden;
  .tabs-footer,
  .tabs-divider,
  .tabs-background-before,
  .tabs-background-after {
    display: none;
  }
  .tabs-item {
    cursor: pointer;
  }
  .tabs-content {
    overflow: unset;
    border-bottom: 1px solid #e4e7ed;
  }
  .tabs-background {
    padding: 0;
  }
  .tabs-background-content {
    border-top: 1px solid #e4e7ed;
    border-left: 1px solid #e4e7ed;
    border-right: 1px solid #e4e7ed;
    border-radius: 0;
    background-color: #fff;
  }
  .tabs-content {
    height: 40px;
  }
  .active {
    color: #409eff;
    .tabs-background {
      &::before,
      &::after {
        top: 100%;
        left: 0;
        content: '';
        width: 100%;
        height: 1px;
        background-color: #fff;
        z-index: 1;
        position: absolute;
      }
      &::before {
        top: 0;
        height: 2px;
        background-color: #409eff;
      }
    }
  }
}
</style>
