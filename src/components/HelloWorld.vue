<template>
  <div class="hello">
    <h1 :class="[$style.title]">{{ msg }}</h1>
    <h3>Home page</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
.title {
  margin: 40px 0 0;
  color: red;
}
</style>
