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

//--------------------------------------正式操作----------------------------------------
export function apiindex(){
    return request({
        url:`/api/index`,
        method: 'get'
    })
}


/**
 * get请求示例  //get请求测试地址：https://v.api.aa1.cn/api/api-wenan-gaoxiao/index.php?aa1=json
 * 下面为代理模拟
 */
 export function testquery(params){
    return request({
        url:`/api/test_query?id=${params}`,
        method: 'get'
    })
}

/**
 * 查询blog配置菜单
 */
 export function blog_item_query(params){
    return request({
        url:`/api/blog_query?status=${params}`,
        method: 'get'
    })
}

/**
 * 新增blog配置菜单
 */
 export function blog_item_add(data){
    return request({
        url: '/api/blog_item_add',
        method: 'post',
        data: data
    })
}

/**
 * 修改blog配置菜单
 */
 export function blog_item_updata(data){
    return request({
        url: '/api/blog_item_updata',
        method: 'post',
        data: data
    })
}

/**
 * 删除blog配置菜单
 */
 export function blog_item_delete(data){
    return request({
        url:`/api/blog_item_delete?itemid=${data}`,
        method: 'post',
        data: data
    })
}




/**
 * 查询配置模板
 */
 export function form_templet_query(params){
    return request({
        url:`/api/form_templet_query?code=${params}`,
        method: 'get'
    })
}

/**
 * 新增配置模板
 */
 export function form_templet_add(data){
    return request({
        url: '/api/form_templet_add',
        method: 'post',
        data: data
    })
}

/**
 * 修改配置模板
 */
 export function form_templet_updata(data){
    return request({
        url: '/api/form_templet_updata',
        method: 'post',
        data: data
    })
}



/**
 * 查询上传视频
 */
 export function moviere_sources_query(type,typesub){
    return request({
        url:`/api/moviere_sources_query?typestr=${type}&statusstr=${typesub}`,
        method: 'get'
    })
}

/**
 * 查询有效状态的上传视频
 */
 export function moviere_sources_truequery(){
    return request({
        url:`/api/moviere_sources_truequery`,
        method: 'get'
    })
}

/**
 * 通过id查询视频
 */
export function moviere_sources_querybyid(data){
    return request({
        url:`/api/moviere_sources_querybyid`,
        method: 'post',
        data: data
    })
}


/**
 * 查询上传视频
 */
 export function moviere_sources_querycount(){
    return request({
        url:`/api/moviere_sources_querycount`,
        method: 'get'
    })
}


/**
 * 新增上传视频
 */
 export function moviere_sources_add(data){
    return request({
        url: '/api/moviere_sources_add',
        method: 'post',
        data: data
    })
}

/**
 * 修改上传视频
 */
 export function moviere_sources_updata(data){
    return request({
        url: '/api/moviere_sources_updata',
        method: 'post',
        data: data
    })
}


/**
 * 删除上传视频
 */
 export function moviere_sources_delete(data){
    return request({
        url:`/api/moviere_sources_delete?id=${data}`,
        method: 'get'
    })
}

//新增聊天
export function insertchat(data){
    return request({
        url:`/api/insertchat`,
        method: 'post',
        data: data
    })
}

//查询聊天
export function querychat(data){
    return request({
        url:`/api/querychat`,
        method: 'post',
        data: data
    })
}



/**
 * 提交pc问卷调查
 */
 export function pc_question_result_add(data){
    return request({
        url:`/api/pc_question_result_add`,
        method: 'post',
        data: data
    })
}

/**
 * 通过id查询内容
 */
 export function blogitem_content_query(itemid){
    return request({
        url:`/api/blogitem_content_query?itemid=${itemid}`,
        method: 'get'
    })
}

/**
 * 新增该菜单id以及内容
 */
 export function blogitem_content_add(data){
    return request({
        url:`/api/blogitem_content_add`,
        method: 'post',
        data: data
    })
}

/**
 * 通过id修改内容
 */
 export function blogitem_content_updata(data){
    return request({
        url:`/api/blogitem_content_updata`,
        method: 'post',
        data: data
    })
}

/**
 * 通过表名列表查询数据变化
 */
 export function table_colnmquery(table,colnm,start,end){
    return request({
        url:`/api/table_colnmquery?table=${table}&colnmvalue=${colnm}&start=${start}&end=${end}`,
        method: 'get'
    })
}

/**
 * 通过日期计数
 */
 export function table_datequery(table,start,end){
    return request({
        url:`/api/table_datequery?table=${table}&start=${start}&end=${end}`,
        method: 'get'
    })
}

/**
 * 查询数据库中所有数据表
 */
 export function config_tablecol_alltable(){
    return request({
        url:`/api/config_tablecol_alltable`,
        method: 'get'
    })
}


/**
 * 查询该表下所有的字段
 */
 export function config_tablecol_bytable(tabledesc){
    return request({
        url:`/api/config_tablecol_bytable?tabledesc=${tabledesc}`,
        method: 'get'
    })
}


/**
 * 循环插入数据
 */
 export function config_tablecol_updata(data){
    return request({
        url:`/api/config_tablecol_updata`,
        method: 'post',
        data: data
    })
}

/**
 * 删除配置表数据
 */
 export function config_tablecol_delete(){
    return request({
        url:`/api/config_tablecol_delete`,
        method: 'get'
    })
}



/**
 * 查询配置表数据
 */
 export function config_tablecol_alldata(){
    return request({
        url:`/api/config_tablecol_alldata`,
        method: 'get'
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
 * 调用邮箱发送验证码
 */
 export function send_dologin(data){
    return request({
        url:`/api/send_dologin`,
        method: 'post',
        data: data
    })
}






