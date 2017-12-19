<template>
  <div class="page-container">
    <v-nav></v-nav>
    <v-header></v-header>
    <main class="main-container">
      <div class="content" :style="{ 'minHeight' : minHeight }">
        <router-view></router-view>
      </div>
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
      return this.windowHeight - 140 + 'px';
    }
  }
}

</script>
<style lang="scss">
@import 'src/styles/common.scss';

</style>
