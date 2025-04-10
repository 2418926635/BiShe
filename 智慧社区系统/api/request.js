// 请求地址
import configData from '../config/index'
const urllocal = configData.httpUrl

const urls = class {
	// constructor:构造方法
	constructor() {

	}
	// static：静态方法:直接使用类来调用，不是静态方法，需要实例化类，也就是new
	static m() {
		let querybasemsg = `${urllocal}api/querybasemsg`
		let queryannouncementext = `${urllocal}api/queryannouncementext`
		let insertbasemsg = `${urllocal}api/insertbasemsg`
		let userQueryListbyid = `${urllocal}api/userQueryListbyid`
		let queryactivityuserlist = `${urllocal}api/queryactivityuserlist`
		let querycollectionuser = `${urllocal}api/querycollectionuser`
		let removecollectionid = `${urllocal}api/removecollectionid`
		let querymysc = `${urllocal}api/querymysc` 
		let querymydz = `${urllocal}api/querymydz` 
		let delpingjia = `${urllocal}api/delpingjia` 
		let resetPassword = `${urllocal}api/resetPassword` 
		let querysysnewsid = `${urllocal}api/querysysnewsid`
		
		let queryfslist = `${urllocal}api/queryfslist`
		let querygzlist = `${urllocal}api/querygzlist`
		let querymycount = `${urllocal}api/querymycount`
		let removecollection = `${urllocal}api/removecollection`
		let insertcollection = `${urllocal}api/insertcollection`
		let getquestionbyclass = `${urllocal}api/getquestionbyclass`
		let querysysnews = `${urllocal}api/querysysnews`
		let updateannouncement = `${urllocal}api/updateannouncement`
		let addannouncement = `${urllocal}api/addannouncement`
		let queryannouncementbyuser = `${urllocal}api/queryannouncementbyuser`
		let removeannouncement = `${urllocal}api/removeannouncement`
		let queryarticlebyid = `${urllocal}api/queryarticlebyid`
		let querysfgz = `${urllocal}api/querysfgz`
		let addfans = `${urllocal}api/addfans`
		let deletefans = `${urllocal}api/deletefans`
		
		let selectpingjia = `${urllocal}api/selectpingjia`
		let chatremove = `${urllocal}api/chatremove`
		let addapprase = `${urllocal}api/addapprase`
		let deleteiscunzai = `${urllocal}api/deleteiscunzai`
		
		
		let login = `${urllocal}api/login` // 
		let addSysUser = `${urllocal}api/addSysUser` // 
		let updateSysUserext = `${urllocal}api/updateSysUserext` // 
		let querywupinbyid = `${urllocal}api/querywupinbyid` //
		let queryannouncementuser = `${urllocal}api/queryannouncementuser` //
		let insertsubmitdata = `${urllocal}api/insertsubmitdata` //
		let selectsubmitbyuser = `${urllocal}api/selectsubmitbyuser` //
		let queryfloor =  `${urllocal}api/queryfloor`
		let queryfloorbyid = `${urllocal}api/queryfloorbyid` 
		
		let insertpingjia = `${urllocal}api/insertpingjia` 
		let pingjiaquery = `${urllocal}api/pingjiaquery` 
		let pingjiaquerybyannid = `${urllocal}api/pingjiaquerybyannid` 


		let insertactivity = `${urllocal}api/insertactivity` //
		let updataactivity = `${urllocal}api/updataactivity` //
		let updataactivitystatus = `${urllocal}api/updataactivitystatus` //
		let queryactivitylist = `${urllocal}api/queryactivitylist` //
		// let queryactivitybyid = `${urllocal}api/queryactivitybyid` //
		let deleteactivity = `${urllocal}api/deleteactivity` //
		let queryactivitystatus = `${urllocal}api/queryactivitystatus` //

		let insertnews = `${urllocal}api/insertnews` //
		let updatanews = `${urllocal}api/updatanews` //
		let updatanewsstatus = `${urllocal}api/updatanewsstatus` //
		let querynewslist = `${urllocal}api/querynewslist` //
		let querynewsbyid = `${urllocal}api/querynewsbyid` //
		let deletenews = `${urllocal}api/deletenews` //
		let querynewsstatus = `${urllocal}api/querynewsstatus` //


		let insertfee = `${urllocal}api/insertfee` //
		let updatafee = `${urllocal}api/updatafee` //
		let updatafeestatus = `${urllocal}api/updatafeestatus` //
		let queryfeelist = `${urllocal}api/queryfeelist` //
		let queryfeebyid = `${urllocal}api/queryfeebyid` //
		let deletefee = `${urllocal}api/deletefee` //
		let queryfeestatus = `${urllocal}api/queryfeestatus` //

		let insertgonggao = `${urllocal}api/insertgonggao` //
		let updatagonggao = `${urllocal}api/updatagonggao` //
		let updatagonggaostatus = `${urllocal}api/updatagonggaostatus` //
		let querygonggaolist = `${urllocal}api/querygonggaolist` //
		let querygonggaolistall= `${urllocal}api/querygonggaolistall`
		let querygonggaobyid = `${urllocal}api/querygonggaobyid` //
		let deletegonggao = `${urllocal}api/deletegonggao` //
		let querygonggaostatus = `${urllocal}api/querygonggaostatus` //

		let adduseractivity = `${urllocal}api/adduseractivity` //
		let isqueryuseractivity = `${urllocal}api/isqueryuseractivity` //
		let queryactivitybyid = `${urllocal}api/queryactivitybyid` //
		let queryshactivity = `${urllocal}api/queryshactivity` //
		let updateactivityshstatus = `${urllocal}api/updateactivityshstatus` //
		
		let addusershetuan = `${urllocal}api/addusershetuan` 
		let isqueryusershetuan = `${urllocal}api/isqueryusershetuan` 
		//let queryshetuanbyid = `${urllocal}api/queryshetuanbyid` 
		let queryshshetuan = `${urllocal}api/queryshshetuan` 
		let updateshetuanshstatus = `${urllocal}api/updateshetuanshstatus` 

		let insertshetuan = `${urllocal}api/insertshetuan` //
		let updatashetuan = `${urllocal}api/updatashetuan` //
		let updatashetuanstatus = `${urllocal}api/updatashetuanstatus` //
		let queryshetuanlist = `${urllocal}api/queryshetuanlist` //
		let queryshetuanbyid = `${urllocal}api/queryshetuanbyid` //
		let deleteshetuan = `${urllocal}api/deleteshetuan` //
		let queryshetuanstatus = `${urllocal}api/queryshetuanstatus` //
		
		
		let queryannouncement = `${urllocal}api/queryannouncement` //
		let queryannouncementbyid = `${urllocal}api/queryannouncementbyid`
		
		let deletearticle = `${urllocal}api/deletearticle`
		let addarticle = `${urllocal}api/addarticle` //
		let insertchatart = `${urllocal}api/insertchatart`
		let queryarticle = `${urllocal}api/queryarticle` //
		let querychatart = `${urllocal}api/querychatart`
		
		let fankuiremove = `${urllocal}api/fankuiremove`  //
		let selectsubmit = `${urllocal}api/selectsubmit`
		
		let updateartclestatus = `${urllocal}api/updateartclestatus`  //
		let queryallarticle = `${urllocal}api/queryallarticle`
		
		let queryactivitybymy = `${urllocal}api/queryactivitybymy`  //
		let queryshetuanbymy = `${urllocal}api/queryshetuanbymy`  //
		
		let updatauserapp = `${urllocal}api/updatauserapp`
		// let querynewsstatus = `${urllocal}api/querynewsstatus`
		let queryactivitybyidrenshu = `${urllocal}api/queryactivitybyidrenshu`

		return {
			querybasemsg,
			queryannouncementext,
			insertbasemsg,
			userQueryListbyid,
			queryactivityuserlist,
			querysysnewsid,
			resetPassword,
			querycollectionuser,
			removecollectionid,
			querymysc,
			delpingjia,
			querymydz,
			queryfslist,
			querygzlist,
			querymycount,
			getquestionbyclass,
			removecollection,
			insertcollection,
			querysysnews,
			updateannouncement,
			addannouncement,
			queryannouncementbyuser,
			removeannouncement,
			queryarticlebyid,
			querysfgz,
			addfans,
			deletefans,
			
			selectpingjia,
			chatremove,
			addapprase,
			deleteiscunzai,
			
			login,
			addSysUser,
			updateSysUserext,
			queryannouncementuser,
			insertsubmitdata,
			selectsubmitbyuser,
			queryfloor,
			queryfloorbyid,
			insertpingjia,
			pingjiaquery, 
			pingjiaquerybyannid,


			insertactivity,
			updataactivity,
			updataactivitystatus,
			queryactivitylist,
			queryactivitybyid,
			deleteactivity,
			queryactivitystatus,
			insertshetuan,
			updatashetuan,
			updatashetuanstatus,
			queryshetuanlist,
			queryshetuanbyid,
			deleteshetuan,
			queryshetuanstatus,
			deletearticle,

			insertfee,
			updatafee,
			updatafeestatus,
			queryfeelist,
			queryfeebyid,
			deletefee,
			queryfeestatus,
			insertnews,
			updatanews,
			updatanewsstatus,
			querynewslist,
			querynewsbyid,
			deletenews,
			querynewsstatus,
			insertgonggao,
			updatagonggao,
			updatagonggaostatus,
			querygonggaolist,
			querygonggaobyid,
			deletegonggao,
			querygonggaostatus,
			adduseractivity,
			isqueryuseractivity,
			queryactivitybyid,
			queryshactivity,
			updateactivityshstatus,
			addusershetuan,
			isqueryusershetuan,
			queryshetuanbyid,
			queryshshetuan,
			updateshetuanshstatus,
			queryannouncement,
			queryannouncementbyid,
			addarticle,
			insertchatart,
			queryarticle,
			querychatart,
			queryactivitybymy,
			queryshetuanbymy,
			selectsubmit,
			fankuiremove,
			queryallarticle,
			updateartclestatus,
			updatauserapp,
			querygonggaolistall,
			queryactivitybyidrenshu
			
			
			
		}
	}
}

export default urls