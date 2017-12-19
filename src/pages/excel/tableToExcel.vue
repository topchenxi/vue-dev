<template>
  <div>11</div>
</template>
<script>
import { httpList } from '@/service/list'
export default {
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      let res = await httpList();
      console.log(res);
    }
  }
}

</script>
