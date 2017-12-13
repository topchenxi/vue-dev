const Mixin = {
  data() {
    return {
      windowHeight: document.body.clientHeight
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowHeight = document.body.clientHeight;
    })
  }
};

export default Mixin;
