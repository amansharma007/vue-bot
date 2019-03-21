<template>
  <div>
    <el-container>
      <el-aside width="300px">
        <el-row>
          <el-col>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
              background-color="#545c64" text-color="#fff" active-text-color="#C0BBA9" @select="selectMenu">


              <el-row class="logo-head">
                <el-col :span="4"><img id="insta-icon" src="../assets/instagram-icon.svg"></el-col>
                <el-col :span="20">
                  <p>Insta Bot</p>
                </el-col>
              </el-row>
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
      <follow v-if="currentIndex === '1'"></follow>
      <like v-if="currentIndex === '2'"></like>
      <comment v-if="currentIndex === '3'"></comment>
      <message v-if="currentIndex === '4'"></message>
    </el-container>
  </div>
</template>

<script>
import Follow from './Follow/Follow.vue'
import Comment from './Comment/Comment.vue'
import Like from './Like/Like.vue'
import Message from './Message/Message.vue'

  export default {
    name: 'AppLayout',
    components: {
      Follow,
      Comment,
      Like,
      Message
    },
    data() {
      return {
        currentIndex: '1'
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
      },
      selectMenu(selectedIndex){
        this.currentIndex = selectedIndex + '';
      }
    }
  } 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #insta-icon{
    width: 40px;   
    margin: auto 0;
  }
  .logo-head p{
    font-size: 40px;
    margin: 0;
    color: #C0BBA9;
  }
  .logo-head{
    padding: 20px 20px;
  }

 .el-aside {
   background-color: #545c64;
   color: #333;
   text-align: center;
 }
 .el-menu-vertical-demo {
   text-align: left;
   height: 100vh;
 }

</style>
