<template>
  <div>
    <p class="mb10">
      vue-schart 官方配置文档 <a href="http://blog.gdfengshuo.com/example/#/vue-schart">链接</a>
    </p>
    <el-row>
      <el-col :span="12">
        <schart :canvasId="canvasId1" :type="type1" :width="width" :height="height" :data="data" :options="options"></schart>
      </el-col>
      <el-col :span="12">
        <schart :canvasId="canvasId2" :type="type2" :width="width" :height="height" :data="data" :options="options"></schart>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <schart :canvasId="canvasId3" :type="type3" :width="width" :height="height" :data="data" :options="options"></schart>
      </el-col>
      <el-col :span="12">
        <schart :canvasId="canvasId4" :type="type4" :width="width" :height="height" :data="data" :options="options"></schart>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Schart from 'vue-schart';
export default {
  components: {
    Schart
  },
  data() {
    return {
      canvasId1: 'myCanvas1',
      canvasId2: 'myCanvas2',
      canvasId3: 'myCanvas3',
      canvasId4: 'myCanvas4',
      type1: 'bar',
      type2: 'line',
      type3: 'ring',
      type4: 'pie',
      width: 500,
      height: 400,
      data: [
        { name: '2014', value: 1342 },
        { name: '2015', value: 2123 },
        { name: '2016', value: 1654 },
        { name: '2017', value: 1795 },
      ],
      options: {
        title: 'Total sales of stores in recent years'
      }
    }
  }
}

</script>
