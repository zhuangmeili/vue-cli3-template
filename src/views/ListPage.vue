<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li>item1</li>
      <li>item1</li>
    </ul>
    <el-button type="primary" @click="isDialog=true">按钮</el-button>


    <el-dialog
      title="提交校验" width="700px"
      :visible.sync="isDialog"
      >
      <el-table
        :data="gridData"
        :row-class-name="tableRowClassName">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址">
        </el-table-column>
      </el-table>
      <footer slot="footer">
        <el-button @click="isDialog = false">取 消</el-button>
        <el-button type="primary" @click="isDialog = false">确 定</el-button>
      </footer>
    </el-dialog>

    <el-dialog
      title="选择提交到审批人" width="700px"
      :visible.sync="isApproveDialog">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="examineWrap">
            <header class="header">岗位</header>
            <main class="content">
              <ul class=" " >
                <li class="item"
                    v-for="item in approveData"
                    :class="approveCur.roleId=== item.roleId?'cur':''" @click="changeApproveCur(item)">{{item.roleName}}</li>
              </ul>
            </main>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="examineWrap">
            <header class="header">接收人</header>
            <main class="content">
              <ul class="">
                <li class="item"
                    v-for="item in approveUsers"
                    :key="item.userId"
                    :class="approveUsersCur.userId=== item.userId? 'cur':''" @click="changeUsersCur(item)">
                  <span>{{item.username}}</span>
                  <span class="name">{{item.name}}</span>
                </li>
              </ul>
            </main>
          </div>
        </el-col>
      </el-row>
      <footer slot="footer" class="dialog-footer">
        <el-button @click="isApproveDialog = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </footer>
    </el-dialog>

    <!-- table @selection-change="handleSelectionChange" -->
    <el-table
      :data="gridData">
     <!-- <el-table-column type="selection" width="55"></el-table-column>-->
      <el-table-column property="date" label="日期" width="150">
        <template slot-scope="scope">
          <div>{{scope.row.date | formatDate}}</div>
        </template>
      </el-table-column>
      <el-table-column property="name" label="">
        <template slot-scope="scope">
          <div>{{scope.row.address | capitalize}}</div>
        </template>
      </el-table-column>
      <el-table-column property="address" label="操作">
        <template slot-scope="scope">
          <el-button plain type="primary" size="small"  >
            <a href="http://10.20.78.23:8006/img/icons/android-chrome-192x192.png" download="22.png">下载图片</a>
          </el-button>
          <el-button plain type="primary" size="small" >
            <a href="http://10.20.78.23:8006/img/icons/111.pdf" download="111.pdf">下载图片</a>
          </el-button>
          <!--
          删除 上传操作 只有录入岗有
          文件上传时格式仅限制为PDF和图片文件格式
           -->
          <el-button plain type="danger" size="small" >删除</el-button>
          <el-button plain type="primary" size="small" >上传</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        isDialog:false,
        gridData: [{
          date: 1541689218000,
          name: '111',
          address: 'this is my position',
          isDanger:false
        }, {
          date: 1541689218000,
          name: '222',
          address: '上海市普陀区金沙江路 1517 弄',
          isDanger:true
        }, {
          date: 1541689218000,
          name: '333',
          address: '上海市普陀区金沙江路 1519 弄',
          isDanger:false
        }, {
          date: 1541689208000,
          name: '333',
          address: '上海市普陀区金沙江路 1519 弄',
          isDanger:false
        }],
        // 弹框-提交到审批人
        isApproveDialog: false,
        approveData:[
          {roleId:101,roleName:'萧然'},
          {roleId:102,roleName:'222'},

        ],
        approveCur:{
          roleId:101,roleName:'萧然'
        },
        approveUsers:[],

        multipleSelection:[]
      }
    },
    mounted(){
    },

    methods:{
      // handleSelectionChange(val){
      //   this.multipleSelection = val;
      //   console.log(val)
      // },
      tableRowClassName({row, rowIndex}) {
        if (row.isDanger) {
          return 'warning-row';
        }
        return '';
      },
    }
  }
</script>
<style>
  .el-table .warning-row {
    background: #fef0f0;
    color: #f56c6c;
  }

</style>
<style lang="scss" scoped>
  .examineWrap{
    .Flex{ display: flex; display: -webkit-flex;}
    .Flex1{ -webkit-box-flex: 1;  -webkit-flex: 1;  flex: 1;}   /* 直接孩子 flex:1 */
    .FlexVer{ -webkit-align-items: center;  align-items: center;}  /* 垂直居中 */
    .FlexHor{ justify-content: center;-webkit-justify-content:center; } /*一行居中对齐*/
    .header{
      height: 42px;
      line-height: 42px;
      font-size: 16px;
    }
    .content{
      border: 1px solid #d8d8d8;
      height: 190px; overflow: auto;
      ul,li{
        list-style: none;
        padding: 0; margin: 0;
      }
      .item{
        line-height: 40px;
        font-size: 14px;
        background: #F6F6F6;
        padding: 0 10px;
        border-top: 1px solid #E8E9EC;
        cursor: pointer;
        &:nth-child(1){ border: none;}
        .name{ margin-left: 20px;}
        &.cur{ background: #409EFF; color: #fff;}
      }
    }
  }
</style>

