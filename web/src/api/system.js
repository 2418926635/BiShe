/** 
 * 用户、菜单、角色、 部门核心接口
 * @author yangzijun
 */

 import request from '../utils/request'

 /**
  * post请求示例
  */
 export function post(data){
     return request({
         url: '/bit-bpc-form/domainValue/list?domainCode=CONTRACT_SYS',
         method: 'post',
         data: data
     })
 }

 
/**
 * get请求示例  //get请求测试地址：https://v.api.aa1.cn/api/api-wenan-gaoxiao/index.php?aa1=json
 * 下面为代理模拟
 */
 export function get(params){
    return request({
        //url: '/bit-bpc-form/domainValue/list?domainCode=CONTRACT_SYS',         //规范
        url:`api?aa1=${params}`,
        method: 'get'
    })
}
//---------------------获取枚举类型---------------
export function getEnums(){
    return request({
        url:`/ccb-segments/sys/config/getEnums`,
        method: 'get'
    })
}




//--------------------------------------菜单相关----------------------------------------
//添加菜单
export function saveMenu(data){
    return request({
        url: '/ccb-segments/sys/menu/saveMenu',
        method: 'post',
        data: data
    })
}


//删除菜单
export function removeMenu(id){
    return request({
        url:`/ccb-segments/sys/menu/removeById?id=${id}`,
        method: 'delete'
    })
}

//修改菜单
export function updateMenu(data){
    return request({
        url: '/ccb-segments/sys/menu/updateMenu',
        method: 'post',
        data: data
    })
}


//获取菜单树
export function getMenuTree(menuName,status){
    return request({
        url:`/ccb-segments/sys/menu/getMenuTree?menuName=${menuName}&status=${status}`,
        method: 'get'
    })
}


//--------------------------------------角色相关----------------------------------------
//添加角色
export function saveRole(data){
    return request({
        url: '/ccb-segments/sys/role/saveRole',
        method: 'post',
        data: data
    })
}


//删除角色
export function removeRole(data){
    return request({
        url:`/ccb-segments/sys/role/removeByIds`,
        method: 'post',
        data: data
    })
}


//修改角色
export function updateRole(data){
    return request({
        url:`/ccb-segments/sys/role/updateRole`,
        method: 'post',
        data: data
    })
}


//角色查询
export function roleQuery(data){
    return request({
        url:`/ccb-segments/sys/role/pageQueryList`,
        method: 'post',
        data: data
    })
}

//角色状态修改
export function updateRolestatus(data){
    return request({
        url:`/ccb-segments/sys/role/modifyStatus`,
        method: 'put',
        data: data
    })
}

//取消售前


//添加角色授权用户？？（编辑角色列表后面的按钮 用于直接添加用户）


//获取角色授权用户列表


//--------------------------------------部门相关----------------------------------------

//添加部门
export function saveDept(data){
    return request({
        url:`/ccb-segments/sys/dept/saveDept`,
        method: 'post',
        data: data
    })
}


//删除部门


export function removeById(id){
    return request({
        url:`/ccb-segments/sys/dept/removeById?id=${id}`,
        method: 'delete'
    })
}


//修改部门
export function updateDept(data){
    return request({
        url:`/ccb-segments/sys/dept/updateDept`,
        method: 'post',
        data: data
    })
}

//获取部门树


//获取菜单树
export function getSysDeptTree(data){
    return request({
        url:`/ccb-segments/sys/dept/getSysDeptTree`,
        method: 'post',
        data: data
    })
}


//--------------------------------------用户相关----------------------------------------

//添加用户
export function addSysUser(data){
    return request({
        url: '/ccb-segments/sys/user/addSysUser',
        method: 'post',
        data: data
    })
}


//用户分配角色


//根据token获取用户信息---获取用户角色
export function getCurrentUserInfo(){
    return request({
        url:`/ccb-segments/sys/user/getCurrentUserInfo`,
        method: 'get'
    })
}


//获取用户基本信息（查自己）
export function getUserBasicInfo(){
    return request({
        url:`/ccb-segments/sys/user/getUserBasicInfo`,
        method: 'get'
    })
}



//用户登录
export function login(data){
    return request({
        url: '/ccb-segments/sys/user/login',
        method: 'post',
        data: data
    })
}


//用户列表查询

export function userQueryList(data){
    return request({
        url: '/ccb-segments/sys/user/pageQueryList',
        method: 'post',
        data: data
    })
}

//删除用户
export function userremove(data){
    return request({
        url:`/ccb-segments/sys/user/removeByIds`,
        method: 'post',
        data: data
    })
}



//重置密码（管理）


export function resetPassword(id,password){
    return request({
        url:`/ccb-segments/sys/user/resetPassword?id=${id}&password=${password}`,
        method: 'put'
    })
}

//修改密码（用户）
export function updatePwd(newPassword,oldPassword){
    return request({
        url:`/ccb-segments/sys/user/updatePwd?newPassword=${newPassword}&oldPassword=${oldPassword}`,
        method: 'post'
    })
}

//用户修改（管理员）
export function updateSysUser(data){
    return request({
        url: '/ccb-segments/sys/user/updateSysUser',
        method: 'post',
        data: data
    })
}

//用户状态修改
export function updateUserstatus(data){
    return request({
        url:`/ccb-segments/sys/user/modifyStatus`,
        method: 'put',
        data: data
    })
}

//获取登录验证码


export function verify(){
    return request({
        url:`/ccb-segments/sys/captcha/captchaImage`,
        method: 'get'
    })
}

//更新用户信息（用户）
export function updateUserBasicInfo(avatar,mobile,sex,email){
    return request({
        url:`/ccb-segments/sys/user/updateUserBasicInfo?avatar=${avatar}&mobile=${mobile}&sex=${sex}&email=${email}`,
        method: 'post'
    })
}

//操作日志查询
export function operateLogquery(data){
    return request({
        url: '/ccb-segments/sys/operateLog/pageQuery',
        method: 'post',
        data: data
    })
}

//操作日志查询
export function operateLogdelet(data){
    return request({
        url: '/ccb-segments/sys/operateLog/removeByIds',
        method: 'post',
        data: data
    })
}




//获取服务端信息
export function getServer(){
    return request({
        url:`/ccb-segments/sys/monitor/getServerInfo`,
        method: 'get'
    })
}

//设备查询
export function devicepageQuery(data){
    return request({
        url: '/ccb-segments/evaluate/device/pageQuery',
        method: 'post',
        data: data
    })
}

//设备增加
export function saveDevice(data){
    return request({
        url: '/ccb-segments/evaluate/device/saveDevice',
        method: 'post',
        data: data
    })
}

//设备修改
export function updateDevice(data){
    return request({
        url: '/ccb-segments/evaluate/device/updateDevice',
        method: 'post',
        data: data
    })
}



//设备状态修改
export function modifydeviceStatus(data){
    return request({
        url:`/ccb-segments/evaluate/device/modifyStatus`,
        method: 'put',
        data: data
    })
}


//删除设备
export function deviceremove(data){
    return request({
        url:`/ccb-segments/evaluate/device/removeByIds`,
        method: 'post',
        data: data
    })
}

//租户查询查询
export function tenantQuery(data){
    return request({
        url: '/ccb-segments/sys/tenant/tenantPageQuery',
        method: 'post',
        data: data
    })
}


//租户增加
export function savetenant(data){
    return request({
        url: '/ccb-segments/sys/tenant/saveTenantInfo',
        method: 'post',
        data: data
    })
}

//租户修改
export function updatetenant(data){
    return request({
        url: '/ccb-segments/sys/tenant/updateTenantInfo',
        method: 'post',
        data: data
    })
}



//租户状态修改
export function updateTenantStatus(data){
    return request({
        url:`/ccb-segments/sys/tenant/updateTenantStatus`,
        method: 'post',
        data: data
    })
}


//删除租户
export function tenantremove(id){
    return request({
        url:`/ccb-segments/sys/tenant/removeById?id=${id}`,
        method: 'delete'
    })
}

//查询当前租户下的管理人员
export function getTenantAdministrators(id){
    return request({
        url:`/ccb-segments/sys/tenant/getTenantAdministrators?id=${id}`,
        method: 'get'
    })
}


//添加大厅
export function savehall(data){
    return request({
        url:`/ccb-segments/sys/tenantHall/saveHallInfo`,
        method: 'post',
        data: data
    })
}


//删除大厅
export function removehallById(id){
    return request({
        url:`/ccb-segments/sys/tenantHall/removeById?id=${id}`,
        method: 'delete'
    })
}


//修改大厅
export function updatehall(data){
    return request({
        url:`/ccb-segments/sys/tenantHall/updateHallInfo`,
        method: 'post',
        data: data
    })
}

//获取大厅树
export function getSyshallTree(data){
    return request({
        url:`/ccb-segments/sys/tenantHall/getHallTree`,
        method: 'post',
        data: data
    })
}

//窗口查询
export function windowpageQuery(data){
    return request({
        url: '/ccb-segments/sys/tenantHall/hallWindowPageQuery',
        method: 'post',
        data: data
    })
}

//窗口增加
export function savewindow(data){
    return request({
        url: '/ccb-segments/sys/tenantHall/saveHallWindowInfo',
        method: 'post',
        data: data
    })
}

//窗口修改
export function updatewindow(data){
    return request({
        url: '/ccb-segments/sys/tenantHall/updateHallWindowInfo',
        method: 'post',
        data: data
    })
}



//窗口状态修改
export function modifywindowStatus(data){
    return request({
        url:`/ccb-segments/sys/tenantHall/updateHallWindowStatus`,
        method: 'post',
        data: data
    })
}

//删除窗口
export function removechuangkouById(id){
    return request({
        url:`/ccb-segments/sys/tenantHall/removeWindowById?windowId=${id}`,
        method: 'delete'
    })
}


// //删除设备
// export function windowremove(data){
//     return request({
//         url:`/ccb-segments/evaluate/device/removeByIds`,
//         method: 'post',
//         data: data
//     })
// }

//分区增加
export function saveWindowPartition(data){
    return request({
        url: '/ccb-segments/sys/tenantHall/saveWindowPartition',
        method: 'post',
        data: data
    })
}

//分区查询
export function getWindowPartitions(hallId,name){
    return request({
        url: `/ccb-segments/sys/tenantHall/getWindowPartitions?hallId=${hallId}&name=${name}`,
        method: 'get'
    })
}

//分区修改
export function updateWindowPartition(data){
    return request({
        url: '/ccb-segments/sys/tenantHall/updateWindowPartition',
        method: 'post',
        data: data
    })
}



// //分区状态修改
// export function modifywindowStatus(data){
//     return request({
//         url:`/ccb-segments/evaluate/device/modifyStatus`,
//         method: 'put',
//         data: data
//     })
// }


// //删除分区
// export function windowremove(data){
//     return request({
//         url:`/ccb-segments/evaluate/device/removeByIds`,
//         method: 'post',
//         data: data
//     })
// }



//设备查询
export function windowAvailableDeviceQuery(keyWord){
    return request({
        url: `/ccb-segments/sys/tenantHall/windowAvailableDeviceQuery?keyWord=${keyWord}`,
        method: 'get'
    })
}

//窗口人员维护（获取所有可以配置的人员）
export function windowAvailableStaffPageQuery(data){
    return request({
        url:`/ccb-segments/sys/tenantHall/windowAvailableStaffPageQuery`,
        method: 'post',
        data: data
    })
}

//窗口人员维护（获取已经配置员）
export function windowConfigStaffPageQuery(data){
    return request({
        url:`/ccb-segments/sys/tenantHall/windowConfigStaffPageQuery`,
        method: 'post',
        data: data
    })
}

//用户提交
export function windowStaffBind(data){
    return request({
        url:`/ccb-segments/sys/tenantHall/windowStaffBind`,
        method: 'post',
        data: data
    })
}


//轮播图提交
export function saveOrUpdateSlidePicture(data){
    return request({
        url:`/ccb-segments/sys/tenantSlidePicture/saveOrUpdateSlidePicture`,
        method: 'post',
        data: data
    })
}

//轮播图查询
export function getSlidePictures(type){
    return request({
        url:`/ccb-segments/sys/tenantSlidePicture/getSlidePictures?type=${type}`,
        method: 'get'
    })
}