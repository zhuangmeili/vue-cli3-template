<template>
  <div class="hello">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="addForm">
      <el-form-item label="一级客户编号" prop="cusNumber" >
        <el-input v-model="ruleForm.cusNumber"  :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="一级客户名称" prop="cusName">
        <el-input v-model="ruleForm.cusName"  :disabled="true"></el-input>
        <el-button type="primary" @click="chooseCusName" size="small" class="chooseBtn">选择</el-button>
      </el-form-item>
      <el-form-item label="授信申请金额（元）" prop="creditMoney">
        <el-input v-model="ruleForm.creditMoney" type="number"></el-input>
      </el-form-item>
      <el-form-item label="授信期限" prop="creditDeadline">
        <el-input v-model="ruleForm.creditDeadline" type="number"></el-input>
      </el-form-item>
      <el-form-item label="授信期限单位" prop="creditUnit">
        <el-radio-group v-model="ruleForm.creditUnit">
          <el-radio label="天"></el-radio>
          <el-radio label="月"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="流程类型" prop="processType">
        <el-select v-model="ruleForm.processType" placeholder="请选择流程类型">
          <el-option label="标准流程-一级"  value="shanghai"></el-option>
          <el-option label="快捷流程-一级" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="登记人" prop="registerName">
        <el-input v-model="ruleForm.registerName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="所属资产端" prop="propertyName">
        <el-input v-model="ruleForm.propertyName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="发起申请日期" prop="applyDate">
        <el-input v-model="ruleForm.applyDate" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">新增</el-button>
        <el-button >返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          cusNumber: '',    //客户编号
          cusName: '',      //客户名称
          creditMoney:'',   //授信金额
          creditDeadline:'',//授信期限
          creditUnit:'',    //授信单位
          processType:'',   //授信类型
          registerName:'',  //登记人
          propertyName:'',  //资产端
          applyDate:'',     //申请日期
        },
        rules: {
          cusNumber: [
            { required: true, message: '请选择一级客户编号', trigger: 'blur' }
          ],
          cusName: [
            { required: true, message: '请选择一级客户名称', trigger: 'blur' }
          ],
          creditMoney: [
            { required: true, message: '请输入授信申请金额', trigger: 'blur' }
          ],
          creditDeadline: [
            { required: true, message: '请输入授信期限', trigger: 'blur' }
          ],
          creditUnit: [
            { required: true, message: '请选择授信单位', trigger: 'blur' }
          ],
          processType: [
            { required: true, message: '请选择流程类型', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      chooseCusName(){
        console.log("click");
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(this.ruleForm);
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped lang="scss">
  .addForm{
    width: 600px;
    margin: 0 auto;
    .el-input,.el-select{ width: 240px; }
    .chooseBtn{ margin-left: 15px;}
  }
</style>
