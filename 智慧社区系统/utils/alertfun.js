let alertobj = {
	//普通的带延时alert
	diagfun:function(val) {
		uni.showToast({
			title: val,
			duration: 1500 
		});
	},
}


export default alertobj