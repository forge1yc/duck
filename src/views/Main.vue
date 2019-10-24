<template>
     <section>


          <el-card class="box-card">
  <div  class="text item">

    <span> 欢迎使用分布式任务调度平台<a href="https://github.com/busgo/forest">forest</a></span>
    <el-divider content-position="left">功能</el-divider>
    <span>任务配置</span>
    <span>任务集群配置</span>
       <span>调度集群监控</span>
        <span>任务执行计划</span>
        <span>任务执行快照</span>

    <el-divider content-position="left">联系方式</el-divider>
    <span>如有问题请联系466862016@qq.com</span>
  </div>
</el-card>

<br>
<br>
<el-alert
    title="版本更新记录"
    type="success">
  </el-alert>
 <div class="block">

<el-timeline-item timestamp="2019/10/24" placement="top">
      <el-card>
        <h4>分布式调度平台v0.1.5</h4>
         <p>修复任务配置删除无法同步删除任务调度计划的bug</p>
        <p>busgo 提交于 2019/10/24</p>
      </el-card>
    </el-timeline-item>
 <el-timeline-item timestamp="2019/08/01" placement="top">
      <el-card>
        <h4>完成 分布式调度平台v0.1.4</h4>
         <p>当任务配置变更同步任务执行计划功能</p>
          <p>增加任务节点状态变更通知功能</p>
           <p>任务配置增加版本号字段-任务配置变更幂等性</p>
        <p>busgo 提交于 2019/08/01</p>
      </el-card>
    </el-timeline-item>
 <el-timeline-item timestamp="2019/07/31" placement="top">
      <el-card>
        <h4>分布式调度平台v0.1.3</h4>
         <p>增加任务手动触发执行功能</p>
        <p>busgo 提交于 2019/07/31</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/07/31" placement="top">
      <el-card>
        <h4>完成 分布式调度平台v0.1.2</h4>
         <p>增加任务待执行快照失败转移功能</p>
         <p>增加启动命令参数功能</p>
        <p>busgo 提交于 2019/07/31</p>
      </el-card>
    </el-timeline-item>
   <el-timeline-item timestamp="2019/07/28" placement="top">
      <el-card>
        <h4>分布式调度平台v0.1.1</h4>
         <p>修复删除任务客户端事件监听的bug</p>
         <p>增加任务快照变更功能</p>
        <p>busgo 提交于 2019/07/28</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/07/25" placement="top">
      <el-card>
        <h4>分布式调度平台v0.1.0</h4>
        <p>busgo 提交于 2019/07/25</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019/07/02" placement="top">
      <el-card>
        <h4>初始化项目</h4>
        <p>busgo 提交于 2019/07/02</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>

     </section>

</template>
