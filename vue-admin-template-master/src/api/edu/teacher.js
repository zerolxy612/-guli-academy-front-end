import request from '@/utils/request';

export default {
  getTeacherListPage(current,limit,teacherQuery) {
    return request({
      url: `/eduservice/teacher/pageTeacher/${current}/${limit}`,
      method: 'get',
      data: teacherQuery
    });
  }
};
