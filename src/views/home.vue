<template>
    <div class="wrapper">
        <my-header></my-header>
        <div class="main-container">
            <my-slider></my-slider>
            <div class="content-box" :collapse="getCollapse">
                <tags></tags>
                <div class="content">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                    <el-backtop target=".content"></el-backtop>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import myHeader from '@/components/layout/Header'
import mySlider from '@/components/layout/Slider'
import tags from '@/components/layout/tags'
import { mapGetters } from 'vuex'
export default {
    name: "home",
    data() {
        return {
            tagsList: []
        };
    },
    components:{
        myHeader,
        mySlider,
        tags
    },
    methods:{
    },
    computed:{
        ...mapGetters([
            "getCollapse"
        ])
    },
}
</script>

<style scoped>
    .main-container{
        display: flex;
        display: -webkit-box;
        justify-content: space-between;
        height: 100%;
    }
</style>
