<template>
  <div class="home">
    <div class="nav">
      <router-link to="/test">测试</router-link>
      <router-link to="/form">表单 </router-link>
      <router-link to="/list">列表</router-link>
      <router-link to="/detail">详情</router-link>
      <router-link to="/upload">上传</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {

}
</script>
<style lang="scss" scoped>
  .nav{
    width: 200px;
    line-height: 50px;
    text-align: center;
    a{ display: block;color: #333; border: 1px solid #ddd; background: #efefef;}

  }

</style>
