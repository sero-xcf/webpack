<template>
    <div>
        <h1>这是登录组件，使用vue定义的---{{msg}}</h1>
    </div>
</template>

<script>
  export default{
      data(){
          return {
            msg:"123"
          }
      },
      methods:{
          show(){
              console.log("调用了vue中的show方法")
          }
      }
  }
 


</script>

<style lang="">
    
</style>