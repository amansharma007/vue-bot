<template>
<div>
    <el-table
      :data="profiles"
      style="width: 100%">
      <el-table-column
        prop="createdAt"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="profileName"
        label="Profile Name"
        width="full">
      </el-table-column>
    </el-table>
</div>
</template>

<script>
import ProfilesService from  '../services/ProfilesService'

export default {
  name: 'ProfilesComponent',
  data(){
      return {
          profiles: [],
          error: ''
      }
  },
  async created(){
      try {
          this.profiles = await ProfilesService.getProfiles();
          console.log(this.profiles);
      } catch(err){
          this.error = err.message;
      }
  }
}
</script>

<style scoped>

</style>