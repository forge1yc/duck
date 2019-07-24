<template>
  <section>

      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>任务集群配置</span>
    <el-button style="float: right; padding: 3px 0" type="text" v-on:click="openAddGroup">新增任务集群</el-button>
  </div>
  <div  class="text item">
    
    <!--列表-->
      <el-table :data="groups" highlight-current-row v-loading="loading" border style="width: 100%;">
          <el-table-column type="index" width="60">
      </el-table-column>
        <el-table-column prop="name" label="集群名称" width="150">
        </el-table-column>
        <el-table-column prop="remark" label="备注" >
        </el-table-column>
      </el-table>
  </div>
</el-card>
    
    <!--新增界面-->
    <el-dialog title="新增集群" :visible.sync="addFormVisible" :close-on-click-modal="false">
      <el-form :model="addForm" label-width="100px" :rules="addFormRules" ref="addForm">
        <el-form-item label="集群名称" prop="name">
          <el-input v-model="addForm.name" auto-complete="off" maxlength="15"></el-input>
        </el-form-item>
       
        <el-form-item label="备注" prop="remark">
             <el-input v-model="addForm.remark" auto-complete="off" placeholder="请输入备注信息"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { groupConfList,groupAdd } from '@/api/api'
export default {
  data () {
    return {
      addFormVisible: false, // 新增界面是否显示
      addLoading: false,
      loading:false,
      addFormRules: {
        name: [
          { required: true, message: '请输入任务名称', trigger: 'blur' }
        ],
         remark: [
          { required: true, message: '请输入集群备注信息', trigger: 'blur' }
        ]
      },
      // 新增界面数据
      addForm: {
        name: '',
        remark:''
      },
      groups:[]
    }
  },
  methods: {
   addSubmit(){

     this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$confirm('确认要新增此集群配置信息吗？', '友情提示', {}).then(() => {
            this.addLoading = true
            let para = Object.assign({}, this.addForm)
            groupAdd(para).then((res) => {
              this.addLoading = false
              this.$message({
                    message: "添加成功",
                    type: 'success'
                  })
              // reset the form 
              this.$refs['addForm'].resetFields()
              this.addFormVisible = false
              this.groupList()
            }).catch((error)=>{
                 this.addLoading = false
            })
          })
        }
      })
   },
   openAddGroup(){
      this.addFormVisible =true
   },
    groupList(){

      let para = {}
      groupConfList(para).then((res) => {
        this.groups = res.data
      })
    }
  },
  mounted () {
    this.groupList()
  }
}

</script>

<style scoped>

</style>
