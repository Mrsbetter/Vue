import Mock from 'mockjs'

const data = Mock.mock({
  'password': null,
  'username|2-10': 'ypc--test_company',
  'authorities': [],
  'accountNonExpired|1': true,
  'accountNonLocked|1': true,
  'credentialsNonExpired|1': true,
  'enabled|1': true,
  'userId|10-20': '1104281310718988288',
  'company|10-15': 'test_company',
  'department': null,
  'name|2-10': '殷鹏程'
})

export default [
  {
    url: '/BI/commons/getUserDetail.do',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: data
      }
    }
  }
]
