# project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 导航菜单设置向左偏移

.el-submenu__title,.el-menu-item{
    display: flex;
    justify-content: left;
    align-items: center;
}

### 折叠菜单（点击折叠、展开菜单表格未变化）
       expandflagfun() {
            this.refreshTable = false
            this.expandflag = !this.expandflag
            //页面变化了在渲染出表格
            this.$nextTick(() => {
                this.refreshTable = true;
            })
        },

    <el-table v-if="refreshTable" :data="tableData" :header-cell-style="headerstyle" row-key="id" ref="multipleTable"
      :default-expand-all="expandflag" tooltip-effect="dark" style="width: 100%"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      class="demo-user-tablemore">

### 地图的鼠标选不中具体省时调整：
      const onMouseMove = (event) => {
        console.log(event.clientX, event.clientY)
        this.mouse.x = ((event.clientX-600) / that.mapobjdata.width) * 2 - 1  
        this.mouse.y = -((event.clientY-230) / that.mapobjdata.height) * 2 + 1
        this.tooltip.style.left = event.clientX - 200 + 'px'
        this.tooltip.style.top = event.clientY - 200 + 'px'
      }


### 路由切换
//注意并不是最终是在index页面显示所以放在下面，而不是说放在contentnew下面

  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    //注意并不是最终是在index页面显示所以放在下面，而不是说放在contentnew下面
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/menu/user')
      },
      {
        path: 'school',
        name: 'school',
        component: () => import('../views/menu/school')
      }
    ]
  }

### 屏幕缩放插件 screenfull
//关键函数：
  screenfun() {
      if (!screenfull.isEnabled) {
          this.$message({ message: '你的浏览器不支持全屏', type: 'warning' })
          return false
      }
      screenfull.toggle()age
  },


### 深度遍历替换数据的key：（这里将menuName替换为label）
        deepset(arrfu) {
            let arr = arrfu.map((val, i) => {
                if (val.children.length > 0) {
                    this.deepset(val.children)
                    val.label = val.menuName
                    val.id = val.id
                } else {
                    val.label = val.menuName
                    val.id = val.id
                }
                return val
            })

            return arr
        },

### 用于处理:expand-on-click-node="false"  用于处理el-tree组件点击label不折叠问题

### 404页面跳转方式

const router = new VueRouter({
  // mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { //未匹配到的时候跳转到404页面
    next({ name: "404" })
  } else {
    next()  //匹配到的时候跳转相应的路由
  }
})

### router-view切换样式
html中引入animate.css样式

展示组件中：（定义新界面进入就行，老界面退出可不定义）
<transition enter-active-class="animated fadeInLeft"> 
  <router-view :key="key"></router-view>
</transition>


### SVG-icon的使用流程 开发自定义的icon库（就是下载svg文件封装成组件，这样可以自定义图标大小颜色）
https://blog.csdn.net/xzd2333/article/details/124571774


### 添加路由守卫实现登录跳转(建议在response拦截器上做跳转):
  //首先判断是否具有有效token
  if (to.path === '/login') {
    next();
  } else {// 每次页面跳转执行，token或openId錯誤，均提示跳转到首页
    let token = localStorage.getItem('AUTHORIZATIONGENERAL')
    // token = '1'
    if (token === null || token === '' || token === undefined) {
        next('/login')
    } else {
      if (to.matched.length === 0) { //未匹配到的时候跳转到404页面
        next({ name: "404" })
      } else {
        next()  //匹配到的时候跳转相应的路由
      }
    }
  }