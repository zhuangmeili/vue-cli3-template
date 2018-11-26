<template>
   <el-input
     v-if="isPriceFocus"
     type="text"
     :value="value"
     @input="handleInput"
     @blur="handleBlur">
     <span slot="suffix">元</span>
   </el-input>
   <el-input
     v-else
     type="text"
     :value="formatPrice(value)"
      @focus="handleFocus">
     <span slot="suffix">元</span>
   </el-input>
</template>

<script>
  import { formatPrice} from '@/utils/filters'
  export default {
    data(){
      return {
        formatPrice,
        isPriceFocus:false, //是否获取焦点
      }
    },

    // 这里使用自定义 v-model
    model: {
      prop: 'value',
      event: 'input'
    },
    props:{
      value:String,
    },
    methods:{
      handleInput(val){
        this.$emit('input',val)
      },
      handleFocus(){
        this.isPriceFocus = true
      },
      handleBlur(){
        this.isPriceFocus = false
      },
    }
  }
</script>
