<template>
  <div class="app-container">
    讲师列表
  </div>
</template>

<script>
import teacher from '@/api/edu/teacher';
export default {
  data() {
    return {
      list: null, // 查询后接口返回集合
      page: 1, // 当前页
      limit: 10, // 记录数
      total: 0, //总记录数
      teacherQuery: {} // 条件封装对象
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      teacher
        .getTeacherListPage(this.page, this.limit, this.teacherQuery)
        .then(response => {
          // 请求成功
          // Response接口返回的数据
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
