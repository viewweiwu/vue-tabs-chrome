<template>
  <div id="app">
    <h1>vue-tabs-chrome </h1>
    <p>A Vue component for Chrome-like tabs.</p>
    <h2>Default</h2>
    <example />
    <h2>Theme Dark</h2>
    <example-dark />
    <h2>Theme Custom</h2>
    <example-custom />
  </div>
</template>

<script>
import Example from './example/example'
import ExampleDark from './example/example-dark'
import ExampleCustom from './example/example-custom'

export default {
  name: 'app',
  components: { Example, ExampleDark, ExampleCustom }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
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

#app {
  width: 1200px;
  padding: 0 20px;
  max-width: 100%;
  margin: 50px auto 100px;
}

.btns {
  padding: 50px;
}

button {
  padding: 10px 16px;
  border-radius: 2px;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  border: 1px solid #fff;
  color: #000;
  background-color: #fff;
  cursor: pointer;
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
