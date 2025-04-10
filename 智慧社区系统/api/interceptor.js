//拦截器

//引入需要token认证的接口
import authapiArr from './authenticationApi' 
export default function interceptor() {
	uni.addInterceptor('request', {
		//相当于request拦截器
		invoke(args) {
			// return false  //false直接拦截，true取消拦截
			//get缓存处理
			if (args.method == "GET") {
				args.url = args.url || {}
				if (args.url.indexOf('?') > -1) {
					args.url = args.url + '&t=' + new Date().getTime()
				} else {
					args.url = args.url + '?t=' + new Date().getTime()
				}
			}
			//登录成功拿到返回值存入缓存，此处获取缓存中的token数据，设置参数头
			//对当前请求做成判断，如果当前请求需要token，并且当前无token则弹框提示用户需要登录
			try{
				let token = uni.getStorageSync('Authorization')
				console.log(args)
				if(token && token != ''){
					args.header['Authorization'] = token
				}else{
					args.header['Authorization'] = ''
					let arr = authapiArr
					let parm =''
					if(args.url.indexOf('?')> -1){
						parm = args.url.split('?')[0]
					}else{
						parm = args.url
					}
					for (let i = 0; i < arr.length; i++) {
						//if(arr[i].indexOf(parm)>-1)
						if(arr[i] == parm){
							uni.showToast({
								title: '需要登录才能进行下一步操作',
								icon: 'none',
								duration: 2000
							});
							return false
						}
						
					}
					
				}
			}catch(e){
				
			}
			
			
			
			

		},
		success(args) {
			//相当于response拦截器
			//console.log(args)
			//直接操作数据---组件中调用时数据格式已经变化
			// args.data = JSON.stringify(args.data)
		},
		fail(err) {
			//console.log('interceptor-fail', err)
		},
		complete(res) {
			//console.log('interceptor-complete', res)
		}
	})
}