<template>
    <div class="tags" v-if="showTags">
        <el-tag
                :key="tag.name"
                v-for="(tag,index) in tags"
                :type="tag.type"
                closable
                :disable-transitions="true"
                @close="handleClose(index)">
            {{tag.name}}
        </el-tag>
    </div>
</template>

<script>
export default {
    name: "tags",
    data(){
        return{
            tags:[]
        }
    },
    methods:{
        setTags(route){
            //判断标签中是否含有当前点击的标签项
            const isExist = this.tags.some(item => {
                return item.name == route.meta.name
            });
            if(!isExist){
                this.tags.push({
                    name: route.meta.name,
                    type: 'success',
                    path: route.fullPath
                })
            }
        },
        showTags(){
            return this.tags.length>0;
        },
        handleClose(index){
            //删除tags中的点击的那个标签，并返回这个标签
            const delItem = this.tags.splice(index, 1)[0];
            const item = this.tags[index] ? this.tags[index] : this.tags[index - 1];
            console.log(item);
            if (item) {
                delItem.path === this.$route.fullPath && this.$router.push(item.path);
            }else{
                this.$router.push('/');
            }
        }
    },
    watch:{
        $route(newValue, oldValue){
            this.setTags(newValue);
        }
    },
    created() {
        this.setTags(this.$route);
    }
}
</script>

<style scoped>
    .tags {
        position: relative;
        height: 30px;
        overflow: hidden;
        background: #fff;
        margin-right: 30px;
        margin-left: 10px;
        margin-top: 10px;
        box-shadow: 0 5px 10px #ddd;
    }
</style>
