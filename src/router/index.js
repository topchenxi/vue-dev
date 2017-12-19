import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const baseIndex = resolve => require(['pages/index'], resolve)
const homePage = resolve => require(['pages/homePage'], resolve)
/* 基础知识 */
const baseKnowledage = resolve => require(['pages/baseKnowledage/index'], resolve)
/* excel操作 */
const excelToTable = resolve => require(['pages/excel/excelToTable'], resolve)
const tableToExcel = resolve => require(['pages/excel/tableToExcel'], resolve)
/* 富文本编辑器 */
const quillEditor = resolve => require(['pages/editor/quillEditor'], resolve)
/* 图表 */
const schart = resolve => require(['pages/chart/schart'], resolve)

const routeConfig = {
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'baseIndex',
    component: baseIndex,
    redirect: '/homePage',
    children: [
      { path: '/homePage', name: 'homePage', component: homePage },
      { path: '/baseKnowledage', name: 'baseKnowledage', component: baseKnowledage },
      { path: '/excel/excelToTable', name: 'excelToTable', component: excelToTable },
      { path: '/excel/tableToExcel', name: 'tableToExcel', component: tableToExcel },
      { path: '/editor/quillEditor', name: 'quillEditor', component: quillEditor },
      { path: '/chart/schart', name: 'schart', component: schart }
    ]
  }]
};
export default new Router(routeConfig);
