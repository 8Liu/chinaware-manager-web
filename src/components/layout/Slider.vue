<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu"
                 unique-opened
                 router
                 :collapse="collapse"
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
export default {
    name: "Slider",
    data() {
        return {
            routers: sliderPath
        }
    },
    computed:{
        collapse(){
            return this.$store.getters.getCollapse;
        }
    },
    created() {
        console.log(this.collapse)
    }
}
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }
    .sidebar > ul {
        height: 100%;
    }</style>
