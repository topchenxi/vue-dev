<template>
  <div>
    <p>quill 官方配置文档<a class="ml10" href="https://quilljs.com/">链接</a></p>
    <p>vue-quill-editor github 地址 <a class="ml10" href="https://github.com/surmon-china/vue-quill-editor">链接</a></p>
    <div class="editor-wrap">
      <v-editor v-model="content" ref="myQuillEditor" class="editer" :options="editorOption" @ready="onEditorReady($event)">
      </v-editor>
    </div>
    <div class="ta-c">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  data() {
    return {
      content: '<p>example content</p>',
      editorOption: {

      }
    }
  },
  components: {
    vEditor: quillEditor
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorReady(editor) {
      console.log('editor ready!')
    },
    submit() {
      console.log(this.content);
      this.$message.success('提交成功！');
    }
  },
}

</script>
<style lang="scss" scoped>
.editor-wrap {
  padding: 20px 0;
  margin-bottom: 40px;
}

.editer {
  height: 350px;
}

</style>
