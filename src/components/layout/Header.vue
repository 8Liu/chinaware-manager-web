<template>
  <div class="header">
    <div class="collapse-btn" @click="changeCollapse(!collapse)">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
    name: "Header",
    data(){
        return{
            //collapse: false
        }
    },
    methods:{
        //侧边栏折叠
        ...mapActions([
                'changeCollapse'
        ]),
        ...mapMutations([
                'setCollapse'
        ])
    },
    computed:{
      ...mapState([
              'collapse'
      ])
    }

}
</script>

<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}
</style>
