<template>
  <div id="app">
    <h1>vue-tabs-chrome </h1>
    <p>A Vue component for Chrome-like tabs.</p>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome" target="_blank">
        <button>
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1273111538,3388165957&fm=26&gp=0.jpg" alt="">
          <span>github</span>
        </button>
      </a>
    </p>
    <h2>Default</h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example.vue" target="_blank">code</a>
    </p>
    <example />
    <h2>Theme Dark</h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-dark.vue" target="_blank">code</a>
    </p>
    <example-dark />
    <h2>after slots</h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-after.vue" target="_blank">code</a>
    </p>
    <example-after />
    <h2>Theme Custom</h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-custom.vue" target="_blank">code</a>
    </p>
    <example-custom />
    <h2>Event Listener</h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-custom-close.vue" target="_blank">code</a>
    </p>
    <p>google tab has custom close icon, and cant close.</p>
    <example-custom-close></example-custom-close>
    <h2>Insert to tag's after</h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-insert.vue" target="_blank">code</a>
    </p>
    <example-insert />
    <h2>Save to Localstorage</h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-save.vue" target="_blank">code</a>
    </p>
    <example-save />
    <h2>Events</h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-events.vue" target="_blank">code</a>
    </p>
    <example-events />
  </div>
</template>

<script>
import Example from './example/example'
import ExampleDark from './example/example-dark'
import ExampleCustom from './example/example-custom'
import ExampleAfter from './example/example-after'
import ExampleInsert from './example/example-insert'
import ExampleSave from './example/example-save'
import ExampleCustomClose from './example/example-custom-close'
import ExampleEvents from './example/example-events'
export default {
  name: 'app',
  components: { Example, ExampleDark, ExampleCustom, ExampleAfter, ExampleInsert, ExampleSave, ExampleCustomClose, ExampleEvents }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

body {
  margin: 0;
  background-color: #fafafa;
}

h1,
h2,
h3 {
  font-weight: 400;
  color: rgba(0, 0, 0, 0.54);
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 24px;
  margin: 55px 0 15px;
}

a {
  color: #ff4081;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  img {
    height: 1.5em;
    margin-right: 10px;
    vertical-align: middle;
  }
}

#app {
  width: 1200px;
  padding: 0 20px;
  max-width: 100%;
  margin: 50px auto 100px;
}

.btns {
  padding: 50px 30px;
}

button {
  padding: 10px 16px;
  border-radius: 2px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  border: 1px solid #fff;
  color: #000;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}

button + button {
  margin-left: 20px;
}

.content {
  padding: 20px;
  background-color: #fff;
  &.dark {
    background-color: #323639;
  }
}
</style>
