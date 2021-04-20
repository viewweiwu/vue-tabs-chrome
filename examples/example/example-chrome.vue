<template>
  <div>
    <button @click="handleFullscreen" style="margin-bottom: 8px">full screen</button>
    <div class="chrome-ui" ref="content">
      <vue-tabs-chrome ref="tab" :minHiddenWidth="120" v-model="tab" :tabs="tabs" @contextnav="handleClick">
        <span slot="after" class="btn-add" @click="addTab">
          <i class="iconfont icon-plus"></i>
        </span>
      </vue-tabs-chrome>
      <div class="nav">
        <div class="nav-btns">
          <span class="nav-btn" @click="handleNavClick('back')">
            <i class="iconfont icon-left"></i>
          </span>
          <span class="nav-btn" @click="handleNavClick('forward')">
            <i class="iconfont icon-right"></i>
          </span>
          <span class="nav-btn" @click="handleNavClick('refresh')">
            <i class="iconfont icon-refresh"></i>
          </span>
          <span class="nav-btn" @click="handleNavClick('home')">
            <i class="iconfont icon-home"></i>
          </span>
        </div>
        <div class="nav-location">
          <input type="search" ref="location" class="nav-location-input" v-model="location" @keydown.enter="handleSearch">
          <span class="nav-btn nav-collection" @click="handleCollection">
            <i class="iconfont icon-star"></i>
          </span>
        </div>
        <div class="nav-btns">
          <span class="nav-btn" @click="handleMore">
            <i class="iconfont icon-more"></i>
          </span>
        </div>
      </div>
      <iframe :src="url" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import { capitalize } from 'lodash'
// chrome-ui icon from https://www.iconfont.cn/

export default {
  data () {
    return {
      tab: '',
      location: '',
      tabs: [
        {
          label: 'Bing',
          key: 'bing',
          url: 'bing.com',
          favicon: 'https://bing.com/favicon.ico'
        },
        {
          label: '掘金',
          key: 'juejin',
          url: 'https://juejin.cn/',
          favicon: 'https://juejin.cn/favicon.ico'
        },
        {
          label: 'Vue',
          key: 'vue',
          url: 'https://cn.vuejs.org/',
          favicon: 'https://cn.vuejs.org/images/logo.png'
        }
      ]
    }
  },
  mounted () {
    this.tab = 'bing'
  },
  computed: {
    url () {
      let currTab = this.tabs.find(item => item.key === this.tab)
      let url = ''
      if (currTab) {
        url = currTab.url || ''
      }
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url
      }
      return url
    }
  },
  watch: {
    tab () {
      let tab = this.getCurrTab()
      let location = tab.url || ''

      if (!location) {
        return ''
      }

      if (!location.startsWith('http://') && !location.startsWith('https://')) {
        location = 'https://' + location
      }

      this.location = location
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
      this.location = ''
    },
    removeTab () {
      this.$refs.tab.removeTab(this.tab)
    },
    handleClick (e, tab, i) {
      console.log(e, tab, i)
    },
    handleSearch () {
      let { location } = this
      let label = capitalize(location.split('.').slice(-2)[0])
      let favicon = ''
      if (location.includes('.')) {
        if (!location.startsWith('http://') && !location.startsWith('https://')) {
          location = 'https://' + location
        }
      } else {
        location = `https://www.bing.com/search?q=${encodeURIComponent(location)}`
        label = 'Bing'
        favicon = 'https://bing.com/favicon.ico'
      }

      if (!favicon) {
        favicon = location + '/favicon.ico'
      }

      let tab = this.getCurrTab()
      tab.label = label
      tab.url = location
      tab.favicon = favicon

      // this.tab = key
      this.$refs.location.blur()

      this.tabs.splice()
    },
    getCurrTab () {
      return this.tabs.find(item => item.key === this.tab)
    },
    handleNavClick (msg) {
      alert(msg)
    },
    handleCollection () {
      alert('😆')
    },
    handleMore () {
      alert('🤗')
    },
    handleFullscreen () {
      this.$refs.content.requestFullscreen()
    }
  }
}
</script>

<style lang="less">
.chrome-ui {
  box-shadow: 2px 2px 5px #ddd;

  input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;
  }

  .btn-add {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    padding: 0 10px;
    color: #333;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 300ms;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .nav {
    padding: 8px;
    background-color: #fff;
    border-bottom: 1px solid #d5d7db;
    display: flex;
    align-items: center;
    position: relative;
  }

  .nav-btns {
    display: flex;
  }

  .nav-btn {
    width: 28px;
    height: 28px;
    margin-left: 4px;
    border-radius: 14px;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 300ms;
    cursor: pointer;

    &:first-of-type {
      margin-left: 0;
    }

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .nav-location {
    flex: 1;
    height: 28px;
    margin: 0 8px;
    position: relative;
  }

  .nav-location-input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #eff1f2;
    border-radius: 14px;
    outline: none;
    padding-left: 16px;
    transition: background 300ms;

    &:hover {
      background-color: #e6e8e9;
    }

    &:focus {
      box-shadow: 0 0 0 3px Highlight;
      background-color: #fff;
    }
  }

  .nav-collection {
    top: 50%;
    right: 2px;
    width: 32px;
    height: 24px;
    border-radius: 12px;
    position: absolute;
    transform: translateY(-50%);
  }

  iframe {
    width: 100%;
    min-height: calc(100vh - 90px);
    background-color: #f4f4f4;
  }
}
</style>
