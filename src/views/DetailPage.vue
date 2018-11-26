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
                <el-form-item label="金额（元）" prop="oldCredit.formatCreditMoney">
                  <el-input v-model="ruleForm.oldCredit.creditMoney" type="text"></el-input>
                </el-form-item>
                <el-form-item label="期限" prop="oldCredit.creditDeadline">
                  <el-input v-model="ruleForm.oldCredit.creditDeadline" type="text"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <header class="title">新的信息的信息</header>
                <br>
                <br>
                <el-form-item
                  label="金额" prop="newCredit.creditMoney"
                  :class="haveChanged('creditMoney') ? 'colorRed':'' ">

                  <com-price v-model="ruleForm.newCredit.creditMoney"></com-price>
                </el-form-item>
                <el-form-item label="期限" prop="newCredit.creditDeadline">
                  <el-input v-model="ruleForm.newCredit.creditDeadline" type="text"
                            :class="haveChanged('creditDeadline')? 'colorRed' :''"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <footer class="footer">
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </footer>
          </el-form>
        </section>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import ComPrice from '../components/ComPrice'
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
            creditMoney:'100',
            creditDeadline:'30',
            creditDeadlineUnit:'DAY',
          },
          newCredit:{
            creditMoney:'10',
            creditDeadline:'3',
            creditDeadlineUnit:'MONTH',
          },
        },
        rules:{
          'newCredit.creditMoney': [
            { required: true, message: '请输入金额', trigger: 'blur' },
            { validator: validateMoney, trigger: 'blur' }
          ],
        },
        isPriceFocus:false, //是否获取焦点

      };
    },
    components:{ComPrice},
    methods: {
      //修改form
      haveChanged(key){
        const {oldCredit,newCredit } =this.ruleForm;
        return oldCredit[key] != newCredit[key]
      },

      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          console.log(this.ruleForm.newCredit.creditMoney)
          if (valid) {

          } else {
            // console.log('error submit!!')
            return false
          }
        })
      }
    },
  }
</script>

<style scoped lang="scss">
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
<style lang="scss">
  .colorRed {
    .el-input__inner{
      color: #f56c6c;
    }
  }

</style>