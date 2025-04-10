// request请求
// class:继承，私有方法，私有属性，静态方法
let Base64 = require('./base64.js').Base64

//引入自定义拦截器
// import interceptorfun from './interceptor'
// interceptorfun()

const request = class {
	constructor(url, arg) {
		this.url = url
		this.arg = arg
	}

	// post
	modepost() {
		uni.showLoading({
			title: '加载中'
		});
		return new Promise((resolve, reject) => {
			uni.request({
					url: this.url,
					method: 'POST',
					data: this.arg,
					header: {
						Authorization: this.baseFun()
					}
				})
				.then(res => {
					this.valid(res[1].data)
					uni.hideLoading();
					resolve(res[1].data)

				})
				.catch(err => {
					this.validerror()
					uni.hideLoading();
					reject('出错了')
				})
		})
	}

	// get
	modeget() {
		uni.showLoading({
			title: '加载中'
		});
		return new Promise((resolve, reject) => {
			uni.request({
					url: this.url,
					method: 'GET',
					header: {
						Authorization: this.baseFun()
					}
				})
				.then(res => {
					this.valid(res[1].data)
					uni.hideLoading();
					resolve(res[1].data)
				})
				.catch(err => {
					this.validerror()
					uni.hideLoading();
					reject('出错了')
				})
		})
	}

	// delete
	modedelete() {
		uni.showLoading({
			title: '加载中'
		});
		return new Promise((resolve, reject) => {
			uni.request({
					url: this.url,
					method: 'DELETE',
					header: {
						Authorization: this.baseFun()
					}
				})
				.then(res => {
					this.valid(res[1].data)
					uni.hideLoading();
					resolve(res[1].data)

				})
				.catch(err => {
					this.validerror()
					uni.hideLoading();
					reject('出错了')
				})
		})
	}


	baseFun() {
		const token = uni.getStorageSync('accessLink')
		console.log(token)
		return token
	}

	valid(obj) {
		if (obj.code == '2001' || obj.code == '5000') {
			uni.showToast({
				title: obj.userMsg,
				icon: 'none',
				duration: 1500
			})
		}
		// uni.showToast({
		// 	title: obj.userMsg,
		// 	duration: 1500
		// });
	}

	validerror() {
		uni.showToast({
			title: '操作失败',
			icon: 'none',
			duration: 1500
		})
	}

}

export default request
