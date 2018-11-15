<template>
  <div>
    <el-tabs
      v-model="tabActiveName"
      type="card">
      <!-- tab 1 -->
      <el-tab-pane label="申请信息" name="first">
        <section class="section1">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="addForm">

            <el-row>

              <el-col :span="12">
                <header class="title">左侧原来的信息</header>
                <br>
                <br>
                <el-form-item label="授信申请金额（元）" prop="oldCredit.creditMoney">
                  <el-input v-model="ruleForm.oldCredit.creditMoney" type="text"></el-input>
                </el-form-item>
                <el-form-item label="授信期限" prop="oldCredit.creditDeadline">
                  <el-input v-model="ruleForm.oldCredit.creditDeadline" type="text"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <header class="title">右侧的信息</header>
                <br>
                <br>
                <el-form-item label="授信申请金额（元）" prop="oldCredit.creditMoney">
                  <el-input v-model="ruleForm.newCredit.creditMoney" type="text"
                            :class="changeForm('creditMoney')? '' :'colorRed'"></el-input>
                </el-form-item>
                <el-form-item label="授信期限" prop="oldCredit.creditDeadline">
                  <el-input v-model="ruleForm.newCredit.creditDeadline" type="text"
                            :class="ruleForm.newCredit.creditDeadline == ruleForm.oldCredit.creditDeadline? '' :'colorRed'"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <footer class="footer">
              <el-button type="primary">提交</el-button>
            </footer>
          </el-form>
        </section>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  export default {
    data() {
      // 校验 价格
      const validateMoney = (rule, value, callback) => {
        const pattern = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/
        if (!pattern.test(value)) {
          callback(new Error('授信申请金额为两位小数的数字类型'))
        } else {
          callback()
        }
      }
      return {
        tabActiveName: 'first',
        ruleForm: {
          oldCredit:{
            creditMoney:'100',   //授信金额
            creditDeadline:'30',//授信期限
          },
          newCredit:{
            creditMoney:'10',   //授信金额
            creditDeadline:'30',//授信期限
          },
        },
        rules:{}

      };
    },
    methods: {
      changeForm(key) {
        const {oldCredit,newCredit } =this.ruleForm;
        return oldCredit[key] == newCredit[key]
      }
    },
    formatCreditMoney(){

    }
  }
</script>

<style scoped lang="scss">
  ul,li,h3,h4,p{ list-style: none; padding: 0; margin: 0; font-weight: normal;}
  .Flex{ display: flex; display: -webkit-flex;}
  .Flex1{ -webkit-box-flex: 1;  -webkit-flex: 1;  flex: 1;}   /* 直接孩子 flex:1 */
  .FlexVer{ -webkit-align-items: center;  align-items: center;}  /* 垂直居中 */
  .FlexHor{ justify-content: center;-webkit-justify-content:center; } /*一行居中对齐*/
  .HackWidth{ width: 10px;}
  .ML10{ margin-left: 10px;}
  .header{
    line-height: 22px;
    height: 22px;
    padding: 8px 0;
    border-bottom: 1px solid #E8E9EC;
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 30px;
    span{
      display: inline-block;
      font-size: 16px;
      border-left:5px solid #0486FE ;
      text-indent: 10px;
    }
  }
  .footer{
    text-align: center;
    margin-top: 20px;
  }
  .section1{
    .addForm{
      .el-input,.el-select{ width: 240px; }
      .chooseBtn{ margin-left: 15px;}
    }

  }
</style>
<style>
  .colorRed .el-input__inner{ color: red}
</style>