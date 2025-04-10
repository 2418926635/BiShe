<template>
    <div class="index-main">
        <el-row>
            <el-col :xs="6" :sm="5" :md="4" :lg="3">
                <left style="height:100vh"></left>
            </el-col>
            <el-col :xs="18" :sm="19" :md="20" :lg="21">
                <top style="height:50px;"></top> 
                <mid style="height:36px;"></mid>
                <contentnew class="contentnew" ref="contentnewbj"></contentnew>
            </el-col>
        </el-row>
    </div>
</template>
<script>

import left from './index/left.vue'
import top from './index/top.vue'
import mid from './index/mid.vue'
import contentnew from './index/contentnew.vue'

export default {
    created() {
    },
    components: {
        left,
        top,
        mid,
        contentnew
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {


    }
}
</script>

<style scoped>
.index-main {
    height: 100vh;
}

.contentnew {
    height: 87vh;
    overflow: auto;
}

.contentnew::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

.contentnew::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #535353;
}

.contentnew::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #EDEDED;
}
</style>