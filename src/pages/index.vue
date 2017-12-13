<template>
  <div class="page-container">
    <v-nav></v-nav>
    <v-header></v-header>
    <main class="main-container" :style="{ 'minHeight' : minHeight }">
      <router-view></router-view>
    </main>
    <v-footer></v-footer>
  </div>
</template>
<script>
import nav from 'components/layout/nav'
import header from 'components/layout/header'
import footer from 'components/layout/footer'
export default {
  components: {
    'v-nav': nav,
    'v-header': header,
    'v-footer': footer
  },
  mounted() {},
  computed: {
    minHeight() {
      return this.windowHeight - 100 + 60 + 'px';
    }
  }
}

</script>
<style lang="scss">
@import 'src/styles/common.scss';
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

</style>
