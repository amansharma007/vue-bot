<template>
  <div>
    <el-container>
      <el-aside width="300px">
        <el-row>
          <el-col>
            <el-menu default-active="1" class="el-menu-vertical-demo"
              background-color="#545c64" text-color="#fff" active-text-color="#C0BBA9" @select="selectMenu">


              <el-row class="logo-head">
                <el-col :span="4"><img id="insta-icon" src="../assets/instagram-icon.svg"></el-col>
                <el-col :span="20">
                  <p>Insta Bot</p>
                </el-col>
              </el-row>
              <el-menu-item index="1">
                <i class="el-icon-circle-plus-outline"></i>
                <span>Like and Follow</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-edit"></i>
                <span>Comment</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-message"></i>
                <span>Message</span>
              </el-menu-item>

            </el-menu>
            <el-menu class="bottom-menu" background-color="#545c64" text-color="#fff" active-text-color="#C0BBA9" @select="openSettings">
              <el-menu-item>
                <i class="el-icon-setting"></i>
                <span>Instagram Credentials</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <like-follow v-if="currentIndex === '1'"></like-follow>
      <comment v-if="currentIndex === '2'"></comment>
      <message v-if="currentIndex === '3'"></message>
      <instagram-settings v-if="currentIndex === 'settings'"></instagram-settings>
    </el-container>
  </div>
</template>

<script>
import LikeFollow from './LikeFollow/LikeFollow.vue'
import Comment from './Comment/Comment.vue'
import Message from './Message/Message.vue'
import InstagramSettings from './Settings/InstagramSettings.vue'

  export default {
    name: 'AppLayout',
    components: {
      LikeFollow,
      Comment,
      Message,
      InstagramSettings
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
      selectMenu(selectedIndex){
        this.currentIndex = selectedIndex + '';
      },
      openSettings(){
        this.currentIndex = 'settings';
      }
    }
  } 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bottom-menu{
    position: absolute;
    border: none;
    bottom: 0;
  }
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
