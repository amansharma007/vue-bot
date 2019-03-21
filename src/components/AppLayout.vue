<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
              background-color="#545c64" text-color="#fff" active-text-color="#C0BBA9">
              
              <img id="insta-icon" v-bind:src="instaIcon">
              
              <el-menu-item index="1">
                <i class="el-icon-circle-plus-outline"></i>
                <span>Follow</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-circle-check-outline"></i>
                <span>Like</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-edit"></i>
                <span>Comment</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-message"></i>
                <span>Message</span>
              </el-menu-item>

            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main></el-main>
        
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
      instaIcon: 'instagram-icon.svg'
      }
    },
    props: {
      msg: String
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  } 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #insta-icon{
    width: 200px;    
  }
 .el-header,
 .el-footer {
   background-color: #B3C0D1;
   color: #333;
   text-align: center;
   line-height: 60px;
 }

 .el-aside {
   background-color: #545c64;
   color: #333;
   text-align: center;
   line-height: 200px;
 }
 .el-menu-vertical-demo {
   text-align: left;
   height: 100vh;
 }

 .el-main {
   background-color: #EFEBDE;
   color: #333;
   text-align: center;
   line-height: 160px;
 }
</style>
