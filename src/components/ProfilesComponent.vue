<template>
<div>
  {{profiles}}
    <el-table
      :data="profiles"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="80">
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
import { followingRef } from '../firebase';
export default {
  name: 'ProfilesComponent',
  data(){
      return {
          error: ''
      }
  },
  firebase: {
    profiles: followingRef
  }
}
</script>

<style scoped>

</style>