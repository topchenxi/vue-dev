<template>
  <div>
    <p>{{message}}</p>
    <p>{{msg}}</p>
    <div v-focus></div>
  </div>
</template>
<script>
export default {
  name: 'baseInfo',
  data() {
    return {
      message: 'Hello World!'
    }
  },
  computed: {
    msg() {
      return this.message + ' Tom';
    }
  },
  watch: {
    message(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  },
  beforeCreate() {
    // console.log('beforeCreate : ' + '发生在Vue实例初始化之后，data observer和event/watcher事件被配置之前')
  },
  created() {
    // console.log('created : ' + '发生在Vue实例初始化以及data observer和event/watcher事件被配置之后')
  },
  beforeMount() {
    // console.log('beforeMount : ' + '挂载开始之前被调用，此时render()首次被调用')
  },
  mounted() {
    // console.log('mounted : ' + 'el被新建的vm.$el替换，并挂载到实例上之后调用');
    // object
    console.log(typeof this.$data, '被watch的data对象')
    console.log(typeof this.$props, '当前组件收到的props')
    console.log(typeof this.$el, 'Vue实例使用的根DOM元素')
    console.log(typeof this.$options, '当前Vue实例的初始化选项')
    console.log(typeof this.$parent, '父组件Vue对象的实例')
    console.log(typeof this.$root, '根组件Vue对象的实例')
    console.log(typeof this.$children, '当前实例的直接子组件')
    console.log(typeof this.$slots, '访问被slot分发的内容')
    console.log(typeof this.$scopedSlots, '访问scoped slots')
    console.log(typeof this.$refs, '包含所有拥有ref注册的子组件')
    console.log(typeof this.$isServer, '判断Vue实例是否运行于服务器')
    console.log(typeof this.$attrs, '包含父作用域中非props的属性绑定')
    console.log(typeof this.$listeners, '包含了父作用域中的v-on事件监听器')
    // function
    console.log(typeof this.$watch, '观察Vue实例变化的表达式、计算属性函数')
    console.log(typeof this.$set, '全局Vue.set的别名')
    console.log(typeof this.$delete, '全局Vue.delete的别名')
    console.log(typeof this.$on, '监听当前实例上的自定义事件，事件可以$emit触发')
    console.log(typeof this.$once, '监听一个自定义事件，触发一次之后就移除监听器')
    console.log(typeof this.$off, '移除自定义事件监听器')
    console.log(typeof this.$emit, '触发当前实例上的事件')
    console.log(typeof this.$mount, '手动地挂载一个没有挂载的Vue实例')
    console.log(typeof this.$forceUpdate, '强制Vue实例重新渲染，仅影响实例本身和插入插槽内容的子组件')
    console.log(typeof this.$nextTick, '将回调延迟到下次DOM更新循环之后执行')
    console.log(typeof this.$destroy, '完全销毁一个实例')
    this.$nextTick(() => {
      // console.log('nextTick : ' + '确保响应式更新完成之后再进行DOM操作');
      this.message = 'Omg World!';
    })
  },
  beforeUpdate() {
    // console.log('beforeUpdate : ' + '数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前')
  },
  updated() {
    // console.log('updated : ' + '数据更改导致虚拟DOM重新渲染和打补丁之后被调用')
  },
  activated() {
    // console.log('activated : ' + 'keep-alive组件激活时调用')
  },
  deactivated() {
    // console.log('deactivated : ' + 'keep-alive组件停用时调用')
  },
  beforeDestroy() {
    // console.log('beforeDestroy : ' + '实例销毁之前调用，Vue实例依然可用')
  },
  destroyed() {
    // console.log('destroyed : ' + 'Vue实例销毁后调用，事件监听和子实例全部被移除，释放系统资源')
  },
  // 包含Vue实例可用指令的哈希表
  directives: {
    focus: {
      bind: function() {
        // 指令第一次绑定到元素时调用，只会调用一次，可以用来执行一些初始化操作。
      },
      inserted: function(el) {
        // 被绑定元素插入父节点时调用。
      },
      update: function() {
        // 所在组件的VNode更新时调用，但是可能发生在其子VNode更新之前。
      },
      componentUpdated: function() {
        // 所在组件VNode及其子VNode全部更新时调用。
      },
      unbind: function() {
        // 指令与元素解绑时调用，只会被调用一次。
      }
    }
  },
  // 包含Vue实例可用过滤器的哈希表
  filters: {
    date(value) {
      return new Date(value);
    }
  },
  // 包含Vue实例可用组件的哈希表
  components: {},
}

</script>
