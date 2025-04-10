<template>
    <div class="index-left">
        <div class="index-left-top">
            <div class="index-title">后台管理</div>
        </div>
        <Sidebar :menuList="itemArr" />
    </div>
</template>
<script>

import Sidebar from './SideBar/SideBar.vue'
//引入数据模型
// import { getMenuTree } from '@/api/system'
import {get_leftmeum03 } from '@/modedata/leftmeum'


import { deepCopy } from '@/utils/trans'


export default {
    components: {
        Sidebar
    },
    created() {
        this.init()
        //选择首页标签时，不再显示之前左侧高亮的菜单
        this.$bus.$on('cancelhot', res => {
            let { flag, path } = res
            if (flag) {
                this.defaultactive = ''
            } else {
                this.defaultactive = path
            }
        })
    },
    mounted() {
    },
    data() {
        return {
            isCollapse: false,
            itemArr: [],
            defaultactive: '',
        }
    },

    methods: {
        init() {
            let userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
            let obj
            if (userinfo.role == '管理员') {
                obj = get_leftmeum03()
            }
            this.itemArr = this.deepset(obj.data)
            console.log(this.itemArr)
        },
        //深度遍历替换数据的key：（这里将menuName替换为label）
        deepset(arrfu) {
            let arr = arrfu.map((val, i) => {
                if (val.children.length > 0) {
                    this.deepset(val.children)
                    val.label = val.menuName
                    val.id = val.id
                    val.svg = val.icon
                }
                else {
                    val.label = val.menuName
                    val.id = val.id
                    val.svg = val.icon

                }
                return val
            })

            return arr
        }
    },
    watch: {
        '$store.state.selectArr'(val) {
            this.defaultactive = val.path
        },
    },
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 92%;
    overflow: auto;
}

.el-menu-vertical-demo {
    margin-block-start: 0px;
    margin-block-end: 0px;
}

.el-menu-vertical-demo::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

.el-menu-vertical-demo::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
    background: #535353;
}

.el-menu-vertical-demo::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #555;
}

.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 0px;
    min-width: 100px;
}

.index-left-top {
    background-color: #304156;
    color: #fff;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.el-submenu__title,
.el-menu-item {
    display: flex;
    justify-content: left;
    align-items: center;
    /* background-color: #1f2d3d!important; */
}

.img {
    margin-right: 5px;
}

.img img {
    width: 30px;
    height: auto;
}

.index-title {
    font-weight: bold;
    font-size: 0.9em;
}

.index-left {
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
    background-color: rgb(84, 92, 100);
}


.el-menu {
    border-right: 0px;
}

.indexleft-icon {
    margin-right: 10px;
}
</style>