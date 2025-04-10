
引入文件
import { compressImage } from '@/utils/picturezip'

上传前压缩：
    async beforeUploadext(file){
      let a =await compressImage(file)
      let linkInfos = extentModle.getProcessInfo().linkInfos
      if(linkInfos == "方案制定"){
        this.$message.error('该环节不能增加图片')
        return false
      }else{
        return a
      }
    },
	
	
	3、组件：
	       <el-upload
	          class="upload-demo"
	          ref="upload"
	          action="/bit-bpc-web-extra/networkipapply/netWorkIPApplyProcessController/parseExcel"
	          :on-success="uploadFileSuccess"
	          :before-upload="beforeUpload"