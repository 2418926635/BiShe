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


//-------------------------------------正式使用


export function addSysUser(data){
    return request({
        url: '/api/addSysUser',
        method: 'post',
        data: data
    })
}


export function updateSysUser(data){
    return request({
        url: '/api/updateSysUser',
        method: 'post',
        data: data
    })
}


export function userremove(data){
    return request({
        url: '/api/userremove',
        method: 'post',
        data: data
    })
}


export function userQueryList(data){
    return request({
        url: '/api/userQueryList',
        method: 'post',
        data: data
    })
}


export function updateUserstatus(data){
    return request({
        url: '/api/updateUserstatus',
        method: 'post',
        data: data
    })
}


export function login(data){
    return request({
        url: '/api/login',
        method: 'post',
        data: data
    })
}

export function resetPassword(data){
    return request({
        url: '/api/resetPassword',
        method: 'post',
        data: data
    })
}


export function adddept(data){
    return request({
        url: '/api/adddept',
        method: 'post',
        data: data
    })
}


export function updatedept(data){
    return request({
        url: '/api/updatedept',
        method: 'post',
        data: data
    })
}


export function deptremove(data){
    return request({
        url: '/api/deptremove',
        method: 'post',
        data: data
    })
}


export function deptQueryList(data){
    return request({
        url: '/api/deptQueryList',
        method: 'post',
        data: data
    })
}


export function querydoctorlist(data){
    return request({
        url: '/api/querydoctorlist',
        method: 'post',
        data: data
    })
}

export function queryinfotitlelist(data){
    return request({
        url: '/api/queryinfotitlelist',
        method: 'post',
        data: data
    })
}


export function queryinfodetail(data){
    return request({
        url: '/api/queryinfodetail',
        method: 'post',
        data: data
    })
}


export function addappointment(data){
    return request({
        url: '/api/addappointment',
        method: 'post',
        data: data
    })
}


export function appointmentlist(data){
    return request({
        url: '/api/appointmentlist',
        method: 'post',
        data: data
    })
}


export function updatastatustext(data){
    return request({
        url: '/api/updatastatustext',
        method: 'post',
        data: data
    })
}


export function onlinehoslist(data){
    return request({
        url: '/api/onlinehoslist',
        method: 'post',
        data: data
    })
}

export function insertorderdata(data){
    return request({
        url: '/api/insertorderdata',
        method: 'post',
        data: data
    })
}


export function queryorderdata(data){
    return request({
        url: '/api/queryorderdata',
        method: 'post',
        data: data
    })
}

// export function queryorderdata(data){
//     return request({
//         url: '/api/queryorderdata',
//         method: 'post',
//         data: data
//     })
// }

export function insertchat(data){
    return request({
        url: '/api/insertchat',
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

export function insertevaluate(data){
    return request({
        url: '/api/insertevaluate',
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

export function addfoodorder(data){
    return request({
        url: '/api/addfoodorder',
        method: 'post',
        data: data
    })
}

export function buchongbingli(data){
    return request({
        url: '/api/buchongbingli',
        method: 'post',
        data: data
    })
}

export function queryhzbyid(data){
    return request({
        url: '/api/queryhzbyid',
        method: 'post',
        data: data
    })
}



export function deletestatustext(data){
    return request({
        url: '/api/deletestatustext',
        method: 'post',
        data: data
    })
}


export function queryevludata(data){
    return request({
        url: '/api/queryevludata',
        method: 'post',
        data: data
    })
}
















