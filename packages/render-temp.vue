<script>
export default {
  name: 'render-temp',
  props: {
    render: {
      type: Function,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  render (h) {
    return this.render && this.render(h, { ...this.params })
  }
}
</script>
