<template>
<div>
    <el-table
      :max-height="500"
      :data="usernameList"
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
import {
  db
} from '../firebase';
export default {
  name: 'ProfilesComponent',
  data() {
    return {
      error: ''
    }
  },
  computed: {
    usernameList: function () {
      let arr = [];
      if (this.profiles) {
        this.profiles.forEach(function (element) {
          arr.push({profileName: element.username});
        });
      }
      return arr;
    }
  },
  firebase: {
    profiles: db.ref('following')
  },
  methods: {

  }
}
</script>

<style scoped>

</style>