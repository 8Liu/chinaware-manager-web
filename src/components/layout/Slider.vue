<template>
    <div :class="getCollapse?'sidebar':'sidebar collapse'">
        <el-menu class="sidebar-el-menu"
                 unique-opened
                 router
                 :collapse="getCollapse"
                 background-color="#324157"
                 text-color="#bfcbd9"
                 active-text-color="#20a0ff">
            <template v-for="(route,index) in routers">
                <template v-if="route.children">
                    <el-submenu :index="route.name" :key="index">
                        <template slot="title">
                            <i :class="route.meta.icon"></i>
                            <span slot="title">{{ route.meta.name }}</span>
                        </template>
                        <template v-for="(subRoute,subIndex) in route.children">
                            <el-submenu
                                    v-if="subRoute.children"
                                    :index="subRoute.name"
                                    :key="subIndex"
                            >
                                <template>
                                    <i :class="subRoute.meta.icon"></i>
                                    <span slot="title">{{ subRoute.meta.name }}</span>
                                </template>
                                <el-menu-item
                                        v-for="(threeRoute,i) in subRoute.children"
                                        :key="i"
                                        :index="threeRoute.name"
                                >{{ threeRoute.meta.name }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                    v-else
                                    :index="subRoute.name"
                                    :key="subIndex"
                            >
                                <i :class="subRoute.meta.icon"></i>
                                <span slot="title">{{ subRoute.meta.name }}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="route.name" :key="index">
                        <i :class="route.meta.icon"></i>
                        <span slot="title">{{ route.meta.name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import sliderPath from '@/router/sliderPath'
import { mapGetters } from 'vuex'
export default {
    name: "Slider",
    data() {
        return {
            routers: sliderPath
        }
    },
    computed:{
       ...mapGetters([
         "getCollapse"
       ])
    },

}
</script>

<style scoped>
    .sidebar {
        overflow-y: scroll;
        width:80px;
        height: 100%;
    }
    .collapse {
        width: 200px;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    /*.sidebar-el-menu:not(.el-menu--collapse) {*/
    /*    width: 200px;*/
    /*}*/
    .sidebar > ul {
        height: 100%;
    }
</style>
<style>
    /*.sidebar-el-menu:not(.el-menu--collapse) {*/
    /*    width: 200px;*/
    /*}*/
</style>
