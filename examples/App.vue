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
    <h2>
      <a href="#chrome" name="chrome">Chrome UI</a>
    </h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-chrome.vue" target="_blank">code</a>
    </p>
    <example-chrome />
    <h2>
      <a href="#default" name="default">Default</a>
    </h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example.vue" target="_blank">code</a>
    </p>
    <example />
    <h2>
      <a href="#dark" name="dark">Theme Dark</a>
    </h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-dark.vue" target="_blank">code</a>
    </p>
    <example-dark />
    <h2>
      <a href="#after" name="after">after slots</a>
    </h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-after.vue" target="_blank">code</a>
    </p>
    <example-after />
    <h2>
      <a href="#custom" name="custom">Theme Custom</a>
    </h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-custom.vue" target="_blank">code</a>
    </p>
    <example-custom />
    <h2>
      <a href="#listener" name="listener">Event Listener</a>
    </h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-custom-close.vue" target="_blank">code</a>
    </p>
    <p>google tab has custom close icon, and cant close.</p>
    <example-custom-close></example-custom-close>
    <h2>
      <a href="#insert" name="insert">Insert to tag's after</a>
    </h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-insert.vue" target="_blank">code</a>
    </p>
    <example-insert />
    <h2>
      <a href="#events" name="events">Events</a>
    </h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-events.vue" target="_blank">code</a>
    </p>
    <example-events />
    <h2>
      <a href="#swap" name="swap"> Swap & Drag</a>
    </h2>
    <p>
      <a href="https://github.com/viewweiwu/vue-tabs-chrome/blob/master/examples/example/example-swap.vue" target="_blank">code</a>
    </p>
    <example-swap />
  </div>
</template>

<script>
import Example from './example/example'
import ExampleChrome from './example/example-chrome'
import ExampleDark from './example/example-dark'
import ExampleCustom from './example/example-custom'
import ExampleAfter from './example/example-after'
import ExampleInsert from './example/example-insert'
import ExampleCustomClose from './example/example-custom-close'
import ExampleEvents from './example/example-events'
import ExampleSwap from './example/example-swap'
export default {
  name: 'app',
  components: { Example, ExampleChrome, ExampleDark, ExampleCustom, ExampleAfter, ExampleInsert, ExampleCustomClose, ExampleEvents, ExampleSwap }
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
  background-color: #fff;
  color: #2c3e50;
  background-image: url(./assets/bg.png);
}

h1 {
  color: #000;
}

h1,
h2,
h3 {
  font-weight: 700;
  letter-spacing: 1px;
  color: #666;
  text-shadow: 1px 1px 1px #fff;

  a {
    color: inherit;
  }
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
