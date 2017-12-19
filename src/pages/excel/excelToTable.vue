<template>
  <div>
    <div>
      <el-button class="mr10" type="primary" @click="handleClick">上传Excel</el-button><span v-if="file">{{file.name}}</span>
      <input ref="upload" id="upload" type="file" accept=".xlsx, .xls" class="c-hide" @change="handkeFileChange">
      <el-table :data="excelData.results" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for='item of excelData.header' :prop="item" :label="item" :key='item'>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import XLSX from 'xlsx';
export default {
  data() {
    return {
      loading: false,
      file: {},
      excelData: {
        header: [],
        results: [],
      }
    }
  },
  methods: {
    handleClick() {
      this.$refs.upload.click();
    },
    handkeFileChange(e) {
      if (!e.target.files.length) return;
      let file = e.target.files[0];
      this.file = file;
      const reader = new FileReader()
      reader.onload = e => {
        const workbook = XLSX.read(btoa(this.fixdata(e.target.result)), { type: 'base64' })
        // workbook.SheetNames 是存放tab的数组  workbook.Sheets 存放的excel 的 tab 的数据 这里默认取第一个tab的数据
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        this.excelData.header = this.get_header_row(worksheet)
        this.excelData.results = XLSX.utils.sheet_to_json(worksheet)
      }
      reader.readAsArrayBuffer(file)
    },
    fixdata(data) {
      let [o, l, w] = ['', 0, 102400];
      for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    },
    get_header_row(sheet) {
      let [headers, range, C] = [
        [], XLSX.utils.decode_range(sheet['!ref']), null
      ];
      let R = range.s.r;
      for (C = range.s.c; C <= range.e.c; ++C) {
        var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        var hdr = 'UNKNOWN ' + C
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    }
  }
}

</script>
<style scoped>
#upload {
  display: none;
}

</style>
