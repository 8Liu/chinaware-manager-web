<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChange">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
    </div>
  </div>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            collapse: true
        }
    },
    methods:{
        //侧边栏折叠
        collapseChange(){
            this.collapse = !this.collapse;
            //与父组件通信 this.$emit('collapse', this.collapse);
            this.$store.dispatch('setCollapse',this.collapse);
            console.log(this.$store.getters.getCollapse)
        }
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
