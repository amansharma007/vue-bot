<template>
  <el-container>
    <!-- <el-header>Follow Header</el-header> -->
    <el-main>
      <h1>Fill the Form</h1>
      <el-form label-width="120px">

        <el-form-item label="Hashtags">
          <el-col :span="20">
            <el-form-item>
              <el-input v-model="hashtags" placeholder="Enter comma separated hashtags" style="width: 95%;"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button type="success" @click="automate">Like & Follow</el-button>
          </el-col>
        </el-form-item>
      </el-form>
      <h1>Following Profiles</h1>
      <profiles-component></profiles-component>
    </el-main>
  </el-container>
</template>

<script>
import ProfilesComponent from '../ProfilesComponent'

export default {
  name: 'Follow',
  components:{
    ProfilesComponent
  },
  data(){
    return {
      hashtags: "",
      profilesList: []
    }
  },
  computed: {
    hashtagList: function(){ //This is the array of hashtags
      return this.hashtags.split(",");
    }
  },
  methods: {
    automate: function(){
      //get profiles from hashtags
      //input 
    }
  }
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
   background-color: white;
   color: #333;
   text-align: left;
   padding: 0px 40px;
 }
</style>