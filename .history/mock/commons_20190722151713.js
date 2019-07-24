import Mock from 'mockjs'

const data = Mock.mock({'password':null,'username':'ypc--test_company','authorities':[],'accountNonExpired':true,'accountNonLocked':true,'credentialsNonExpired':true,'enabled':true,'userId':'1104281310718988288','company':'test_company','department':null,'name':'殷鹏程'})

export default [
  {
    url: '/BI/commons/getUserDetail.do',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
