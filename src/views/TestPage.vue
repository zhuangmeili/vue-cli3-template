<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="一致性 Consistency" v-for="(item,index) in lists" :key="item.id" :name="index">

        <el-radio-group v-model="item.isOk" @change="handleChange(item)">
          <el-radio label="TRUE">是-TRUE</el-radio>
          <el-radio label="FALSE">否-FALSE</el-radio>
        </el-radio-group>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    name: "TestPage",
    data(){
      return{
        activeNames: [0,1,2,3,4,5],
        lists:[
          {id:101,isOk:'TRUE' },
          {id:102,isOk:'FALSE'},
          {id:103,isOk:'FALSE'},
          {id:104,isOk:'TRUE'},
          {id:105,isOk:'TRUE'},
        ]
      }
    },
    created(){
      ;(async () => {
        const res = await this.getDetail()
        console.log(res)
      })()
    },
    methods:{
      getDetail(){
        return this.$http.get({ url:'/v2/book/1220562'})
      },
      handleChange(item){
        const {id,isOk} =item
        console.log(id)
        console.log(isOk)
        // console.log(item)
      }
    }
  }
</script>

<style scoped>

</style>