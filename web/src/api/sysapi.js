/** 
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

//---------------------------开始正式请求------------------

//--------------------------------------用户相关----------------------------------------

//添加用户
export function addSysUser(data){
    return request({
        url: '/api/addSysUser',
        method: 'post',
        data: data
    })
}


//修改用户
export function updateSysUser(data){
    return request({
        url: '/api/updateSysUser',
        method: 'post',
        data: data
    })
}



//删除用户
export function userremove(data){
    return request({
        url: '/api/userremove',
        method: 'post',
        data: data
    })
}



//查询用户
export function userQueryList(data){
    return request({
        url: '/api/userQueryList',
        method: 'post',
        data: data
    })
}

//修改用户状态
export function updateUserstatus(data){
    return request({
        url: '/api/updateUserstatus',
        method: 'post',
        data: data
    })
}

//个人信息修改
export function updateSysUserbyme(data){
    return request({
        url: '/api/updateSysUserbyme',
        method: 'post',
        data: data
    })
}


export function queryactivitylist(data){
    return request({
        url: '/api/queryactivitylist',
        method: 'post',
        data: data
    })
}



export function queryannouncementext(data){
    return request({
        url: '/api/queryannouncementext',
        method: 'post',
        data: data
    })
}

export function updateannouncementext(data){
    return request({
        url: '/api/updateannouncementext',
        method: 'post',
        data: data
    })
}


export function updataactivitystatus(data){
    return request({
        url: '/api/updataactivitystatus',
        method: 'post',
        data: data
    })
}

export function deleteactivity(data){
    return request({
        url: '/api/deleteactivity',
        method: 'post',
        data: data
    })
}


export function updateSysUsersim(data){
    return request({
        url: '/api/updateSysUsersim',
        method: 'post',
        data: data
    })
}


export function deleteuseractivity(data){
    return request({
        url: '/api/deleteuseractivity',
        method: 'post',
        data: data
    })
}


export function querybasemsg(data){
    return request({
        url: '/api/querybasemsg',
        method: 'post',
        data: data
    })
}

export function updatefkbasemsg(data){
    return request({
        url: '/api/updatefkbasemsg',
        method: 'post',
        data: data
    })
}


export function insertbasemsg(data){
    return request({
        url: '/api/insertbasemsg',
        method: 'post',
        data: data
    })
}


export function updatebasemsg(data){
    return request({
        url: '/api/updatebasemsg',
        method: 'post',
        data: data
    })
}


export function basemsgremove(data){
    return request({
        url: '/api/basemsgremove',
        method: 'post',
        data: data
    })
}



export function queryactivityuserlist(data){
    return request({
        url: '/api/queryactivityuserlist',
        method: 'post',
        data: data
    })
}

export function querysysnews(data){
    return request({
        url: '/api/querysysnews',
        method: 'post',
        data: data
    })
}

export function addsysnews(data){
    return request({
        url: '/api/addsysnews',
        method: 'post',
        data: data
    })
}

export function updatesysnews(data){
    return request({
        url: '/api/updatesysnews',
        method: 'post',
        data: data
    })
}


export function updatesysnewsstatus(data){
    return request({
        url: '/api/updatesysnewsstatus',
        method: 'post',
        data: data
    })
}

export function removesysnews(data){
    return request({
        url: '/api/removesysnews',
        method: 'post',
        data: data
    })
}

export function taskverifymore(data){
    return request({
        url: '/api/taskverifymore',
        method: 'post',
        data: data
    })
}

export function chatremove(data){
    return request({
        url: '/api/chatremove',
        method: 'post',
        data: data
    })
}




export function questionselect(data){
    return request({
        url: '/api/questionselect',
        method: 'post',
        data: data
    })
}

export function updatataskstatus(data){
    return request({
        url: '/api/updatataskstatus',
        method: 'post',
        data: data
    })
}



export function taskverify(data){
    return request({
        url: '/api/taskverify',
        method: 'post',
        data: data
    })
}


export function getclassquestion(data){
    return request({
        url: '/api/getclassquestion',
        method: 'post',
        data: data
    })
}

export function questionupdata(data){
    return request({
        url: '/api/questionupdata',
        method: 'post',
        data: data
    })
}

export function questionremove(data){
    return request({
        url: '/api/questionremove',
        method: 'post',
        data: data
    })
}

export function questioninsert(data){
    return request({
        url: '/api/questioninsert',
        method: 'post',
        data: data
    })
}


export function userQueryListbyid(data){
    return request({
        url: '/api/userQueryListbyid',
        method: 'post',
        data: data
    })
}


export function querychatart(data){
    return request({
        url: '/api/querychatart',
        method: 'post',
        data: data
    })
}

export function querysysinformation(data){
    return request({
        url: '/api/querysysinformation',
        method: 'post',
        data: data
    })
}
export function addsysinformation(data){
    return request({
        url: '/api/addsysinformation',
        method: 'post',
        data: data
    })
}
export function updatesysinformation(data){
    return request({
        url: '/api/updatesysinformation',
        method: 'post',
        data: data
    })
}

export function deletearticle(data){
    return request({
        url: '/api/deletearticle',
        method: 'post',
        data: data
    })
}



export function queryarticle(data){
    return request({
        url: '/api/queryarticle',
        method: 'post',
        data: data
    })
}

export function updatesysinformationstatus(data){
    return request({
        url: '/api/updatesysinformationstatus',
        method: 'post',
        data: data
    })
}
export function removesysinformation(data){
    return request({
        url: '/api/removesysinformation',
        method: 'post',
        data: data
    })
}


//重置用户密码
export function resetPassword(data){
    return request({
        url: '/api/resetPassword',
        method: 'post',
        data: data
    })
}



//登录操作
export function login(data){
    return request({
        url: '/api/login',
        method: 'post',
        data: data
    })
}

//发单人填写表单
export function addSysform(data){
    return request({
        url: '/api/addSysform',
        method: 'post',
        data: data
    })
}


//楼层相关
export function addfloor(data){
    return request({
        url: '/api/addfloor',
        method: 'post',
        data: data
    })
}
export function updatafloor(data){
    return request({
        url: '/api/updatafloor',
        method: 'post',
        data: data
    })
}
export function removefloor(data){
    return request({
        url: '/api/removefloor',
        method: 'post',
        data: data
    })
}
export function queryfloor(data){
    return request({
        url: '/api/queryfloor',
        method: 'post',
        data: data
    })
}
export function queryfloorbyid(data){
    return request({
        url: '/api/queryfloorbyid',
        method: 'post',
        data: data
    })
}

export function queryshetuanalllist(data){
    return request({
        url: '/api/queryshetuanalllist',
        method: 'post',
        data: data
    })
}

export function updatashetuanstatus(data){
    return request({
        url: '/api/updatashetuanstatus',
        method: 'post',
        data: data
    })
}

export function queryallfeelist(data){
    return request({
        url: '/api/queryallfeelist',
        method: 'post',
        data: data
    })
}

export function updatafeestatus(data){
    return request({
        url: '/api/updatafeestatus',
        method: 'post',
        data: data
    })
}

export function queryallnewslist(data){
    return request({
        url: '/api/queryallnewslist',
        method: 'post',
        data: data
    })
}

export function updatanewsstatus(data){
    return request({
        url: '/api/updatanewsstatus',
        method: 'post',
        data: data
    })
}


export function queryallarticle(data){
    return request({
        url: '/api/queryallarticle',
        method: 'post',
        data: data
    })
}








//座位相关
export function addseat(data){
    return request({
        url: '/api/addseat',
        method: 'post',
        data: data
    })
}
export function updataseat(data){
    return request({
        url: '/api/updataseat',
        method: 'post',
        data: data
    })
}
export function removeseat(data){
    return request({
        url: '/api/removeseat',
        method: 'post',
        data: data
    })
}
export function queryseatbyfloor(data){
    return request({
        url: '/api/queryseatbyfloor',
        method: 'post',
        data: data
    })
}
export function queryseatbyid(data){
    return request({
        url: '/api/queryseatbyid',
        method: 'post',
        data: data
    })
}

//任务相关
export function addtask(data){
    return request({
        url: '/api/addtask',
        method: 'post',
        data: data
    })
}
export function updatatask(data){
    return request({
        url: '/api/updatatask',
        method: 'post',
        data: data
    })
}
export function removetask(data){
    return request({
        url: '/api/removetask',
        method: 'post',
        data: data
    })
}
export function querytask(data){
    return request({
        url: '/api/querytask',
        method: 'post',
        data: data
    })
}
export function querytaskbyid(data){
    return request({
        url: '/api/querytaskbyid',
        method: 'post',
        data: data
    })
}


//物品相关
export function addwupin(data){
    return request({
        url: '/api/addwupin',
        method: 'post',
        data: data
    })
}
export function updatawupin(data){
    return request({
        url: '/api/updatawupin',
        method: 'post',
        data: data
    })
}
export function removewupin(data){
    return request({
        url: '/api/removewupin',
        method: 'post',
        data: data
    })
}
export function querywupin(data){
    return request({
        url: '/api/querywupin',
        method: 'post',
        data: data
    })
}
export function querywupinbyid(data){
    return request({
        url: '/api/querywupinbyid',
        method: 'post',
        data: data
    })
}

//预约相关
export function addyuyue(data){
    return request({
        url: '/api/addyuyue',
        method: 'post',
        data: data
    })
}

export function updatayuyue(data){
    return request({
        url: '/api/updatayuyue',
        method: 'post',
        data: data
    })
}

export function removeyuyue(data){
    return request({
        url: '/api/removeyuyue',
        method: 'post',
        data: data
    })
}

export function queryyuyue(data){
    return request({
        url: '/api/queryyuyue',
        method: 'post',
        data: data
    })
}

export function queryyuyuebyid(data){
    return request({
        url: '/api/queryyuyuebyid',
        method: 'post',
        data: data
    })
}

export function insertchat(data){
    return request({
        url: '/api/insertchat',
        method: 'post',
        data: data
    })
}


export function queryyuyuebyuser(data){
    return request({
        url: '/api/queryyuyuebyuser',
        method: 'post',
        data: data
    })
}
export function querychat(data){
    return request({
        url: '/api/querychat',
        method: 'post',
        data: data
    })
}
export function removeannouncement(data){
    return request({
        url: '/api/removeannouncement',
        method: 'post',
        data: data
    })
}
export function updateannostatus(data){
    return request({
        url: '/api/updateannostatus',
        method: 'post',
        data: data
    })
}
export function updateannouncement(data){
    return request({
        url: '/api/updateannouncement',
        method: 'post',
        data: data
    })
}
export function addannouncement(data){
    return request({
        url: '/api/addannouncement',
        method: 'post',
        data: data
    })
}
export function queryannouncement(data){
    return request({
        url: '/api/queryannouncement',
        method: 'post',
        data: data
    })
}

export function updatasubmitdata(data){
    return request({
        url: '/api/updatasubmitdata',
        method: 'post',
        data: data
    })
}

export function selectsubmit(data){
    return request({
        url: '/api/selectsubmit',
        method: 'post',
        data: data
    })
}

export function fankuiremove(data){
    return request({
        url: '/api/fankuiremove',
        method: 'post',
        data: data
    })
}















//查询发单人填写表单数据
export function searchSysform(data){
    return request({
        url: '/api/searchSysform',
        method: 'post',
        data: data
    })
}

/**
 * 调用邮箱发送验证码
 */
 export function send_ketnum_email(data){
    return request({
        url:`/api/send_ketnum_email`,
        method: 'post',
        data: data
    })
}


/**
 * 发单人数据修改
 */
 export function updataSysform(data){
    return request({
        url:`/api/updataSysform`,
        method: 'post',
        data: data
    })
}


/**
 * 发单人数据删除
 */
 export function sysformremove(data){
    return request({
        url:`/api/sysformremove`,
        method: 'post',
        data: data
    })
}


/**
 * 认领与非认领修改
 */
 export function updateFormlock(data){
    return request({
        url:`/api/updateFormlock`,
        method: 'post',
        data: data
    })
}


/**
 * 接单人数据补充修改
 */
 export function updatagetform(data){
    return request({
        url:`/api/updatagetform`,
        method: 'post',
        data: data
    })
}


/**
 * 出库人数据补充修改
 */
 export function updatagetoutform(data){
    return request({
        url:`/api/updatagetoutform`,
        method: 'post',
        data: data
    })
}


/**
 * 出库人标记修改
 */
 export function updateFormoutlock(data){
    return request({
        url:`/api/updateFormoutlock`,
        method: 'post',
        data: data
    })
}



/**
 * 查询接单人员
 */
 export function searchuserjd(data){
    return request({
        url:`/api/searchuserjd`,
        method: 'post',
        data: data
    })
}


/**
 * 创建修改人员时校验是否已经存在
 */
 export function searchbyno(data){
    return request({
        url:`/api/searchbyno`,
        method: 'post',
        data: data
    })
}

//日志查询
export function operateLogquery(data){
    return request({
        url:`/api/operateLogquery`,
        method: 'post',
        data: data
    })
}

//通过账号获取邮箱

export function getemailbyid(data){
    return request({
        url:`/api/getemailbyid`,
        method: 'post',
        data: data
    })
}

//通过账号获取邮箱

export function test(data){
    return request({
        url:`/api/test`,
        method: 'post',
        data: data
    })
}

//修改订单状态
export function updateFormfinish(data){
    return request({
        url:`/api/updateFormfinish`,
        method: 'post',
        data: data
    })
}







