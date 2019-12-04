import Vue from 'vue'
import Router from 'vue-router'
import abstract from '@/views/common/abstract'
import form from '@/views/form/baseForm'
import upload from '@/views/form/upload'
import table from '@/views/table/baseTable'
import tab from '@/views/tab/tab'
import index from '@/views/index/index'

Vue.use(Router)

export default [
    {
        path: '/index',
        name: 'index',
        meta: {
            name: '系统首页',
            icon: 'el-icon-s-home'
        },
        component: index
    },
    {
        path: '/table',
        name: 'table',
        meta: {
            name: '系统表格',
            icon: 'el-icon-film'
        },
        component: table
    },
    {
        path: '/tabs',
        name: 'tabs',
        meta: {
            name: 'tab选项卡',
            icon: 'el-icon-document-copy'
        },
        component: tab
    },
    {
        path: '/formAbout',
        name: 'formAbout',
        meta: {
            name: '表单相关',
            icon: 'el-icon-s-grid'
        },
        component: abstract,
        children: [
            {
                path: '/form',
                name: 'form',
                meta: {
                    name: '基本表单',
                    icon: 'el-icon-menu'
                },
                component: form
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    name: '文件上传',
                    icon: 'el-icon-s-order'
                },
                component: upload
            }
        ]
    }
]

