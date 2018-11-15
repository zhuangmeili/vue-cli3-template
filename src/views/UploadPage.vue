<template>
  <div class="container">

    <!-- 加上动画 -->
    <transition-group name="el-zoom-in-top" tag="ul">
      <li v-for="(item,index) in fileList" :key="index">
        <el-row :gutter="20" class="datumList" type="flex">
          <el-col :span="12">{{item.name}}</el-col>
          <el-col :span="12">
            <el-button size="small" type="primary" plain >预览</el-button>
            <el-button size="small" type="primary" plain>下载</el-button>
            <el-button size="small" type="danger" plain>删除</el-button>
          </el-col>
        </el-row>
        <el-progress
          v-if="item.status === 'uploading'"
          :stroke-width="2"
          :percentage="parseInt(item.percentage,10)"></el-progress>
      </li>
    </transition-group>

    <br>
    <br>
    <br>
    <br>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
      :file-list="fileList"
      :on-success="onSuccess"
      :on-error="onError"
      :on-change="onChange"
      :before-upload="beforeUpload">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>

  </div>
</template>

<script>
  export default {
    name: "UploadPage",
    data(){
      return{
        fileList: [
          {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
          {name: '三方协议', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
        ]
      }
    },
    methods:{
      beforeUpload(file) {
        // const isJPG = /^image\//.test(file.type)
        // const isPDF = file.type === 'application/pdf'
        // const isLt2M = file.size / 1024 / 1024 < 2
        // console.log( !(isJPG || isPDF))
        // if (!(isJPG || isPDF) ) {
        //   this.$notify({
        //     title: '上传失败',
        //     message: '只能上传图片或者pdf格式的文件!',
        //     duration: 2000,
        //     type: 'error'
        //   })
        // }
        // if (!isLt2M) {
        //   this.$notify({
        //     title: '上传失败',
        //     message: '上传文件大小不能超过 2MB!',
        //     duration: 2000,
        //     type: 'error'
        //   })
        // }
        // return (isJPG || isPDF ) && isLt2M
      },
      onSuccess(response, file, fileList){
        // console.log(fileList);
        // this.fileList=fileList;
      },
      onError(err, file, fileList){
        //console.log(fileList);
        // this.fileList=fileList;
      },
      onChange(file, fileList){
        this.fileList=fileList;
      }

    }
  }
</script>

<style scoped lang="scss">
  .container{
    width: 800px;
    margin: 20px auto;
    .datumList{
      line-height: 35px; padding: 5px 0;
      font-size: 14px;
    }
  }

</style>