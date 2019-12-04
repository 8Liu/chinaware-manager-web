<template>
    <div class="wrapper">
        <my-header></my-header>
        <my-slider></my-slider>
        <div class="content-box" >
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
</template>

<script>
import myHeader from '@/components/layout/Header'
import mySlider from '@/components/layout/Slider'
export default {
    name: "home",
    data() {
        return {
            tagsList: []
        };
    },
    components:{
        myHeader,
        mySlider
    },
    methods:{
    },
    created() {

    }
}
</script>

<style scoped>

</style>
