import request from '@/util/request'


export function jobConfList(data) {
    return request({
      url: '/job/list',
      method: 'post',
      data
    })
  }

  export function jobAdd(data) {
    return request({
      url: '/job/add',
      method: 'post',
      data
    })
  }

  export function jobEdit(data) {
    return request({
      url: '/job/edit',
      method: 'post',
      data
    })
  }
  export function jobDelete(data) {
    return request({
      url: '/job/delete',
      method: 'post',
      data
    })
  }

  export function groupConfList(data) {
    return request({
      url: '/group/list',
      method: 'post',
      data
    })
  }


  export function groupAdd(data) {
    return request({
      url: '/group/add',
      method: 'post',
      data
    })
  }

 // 任务执行计划
  export function planList(data) {
    return request({
      url: '/plan/list',
      method: 'post',
      data
    })
  }

  // 集群节点信息
  export function clientList(data) {
    return request({
      url: '/client/list',
      method: 'post',
      data
    })
  }
  
  // 调度集群节点信息
  export function nodeList(data) {
    return request({
      url: '/node/list',
      method: 'post',
      data
    })
  }