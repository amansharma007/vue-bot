<template>
    <el-container>
        <el-header>Comment Header</el-header>
        <el-main>Main</el-main>
      </el-container>
</template>

<script>
export default {
  name: 'Comment'
}
</script>

<style scoped>

 .el-header,
 .el-footer {
   background-color: #545c64;
   color: #333;
   text-align: center;
   line-height: 60px;
 }

 .el-main {
   background-color: #EFEBDE;
   color: #333;
   text-align: center;
   line-height: 160px;
 }
</style>