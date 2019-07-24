<template>
  <section>

    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>调度集群列表</span>
  </div>
  <div  class="text item">
    <!--列表-->
      <el-table :data="nodes" highlight-current-row v-loading="loading"  style="width: 100%;">
        <el-table-column prop="name" label="ip" >
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
              <el-tag type="success" size="mini" v-if="scope.row.state==1">Leader</el-tag>
              <el-tag type="primary" size="mini" v-else-if="scope.row.state==0">Follower</el-tag>
          </template>
        </el-table-column>
      </el-table>
  </div>
</el-card>
  </section>
</template>
<script>
import { nodeList} from '@/api/api'
export default {
  data () {
    return {
      filters: {
        name: ''
      },
      loading:false,
      nodes:[],
     
    }
  },
  methods: {
    getNodeList(){
      let para = {}
      nodeList(para).then((res) => {
        this.nodes = res.data
      })
    }
  },
  mounted () {
    this.getNodeList()
  }
}

</script>

<style scoped>

</style>
