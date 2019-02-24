<template>
  <div id="app">
    <router-view/>
  </div>
</template>
 <script>
  export default {
    
  }
 </script>
 
<style>
*{
  margin: 0;
  padding: 0;
}
body{
  font: 1em "poppin","Microsoft YaHei", "SimSun", "SimHei", Arial;
  color: #000;
  white-space: nowrap;
  word-break: keep-all;
  text-overflow: ellipsis;
}
a{
  text-decoration: none;
  color: #000;  
}
ul{
  list-style: none;
}
/*轮播图的样式*/
.el-carousel__container{
    height: 320px;
    margin-top: 15px;
}
.el-carousel__indicator .el-carousel__button {
  width: 15px;
  height: 15px; 
  border: 1px solid #c0c4cc;
  border-radius: 50%;
}


</style>
