<template>
    <el-container>
        <el-header>Follow Header</el-header>
        <el-main>Main</el-main>
      </el-container>
</template>

<script>
export default {
  name: 'Follow'
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