import mockjs from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';
const ajaxHeadersTokenKey = 'x-token';
export default [
  {
    url: '/api/pages/list/:id',
    method: 'get',
    response: ({ body }) => {
      return  {
        code: 0,
        data: mockjs.mock({
          id: '@integer(1)',
          'name|1': ['个人博客', '网页小功能'],
          'desc|1': ['李庆松的个人博客', '原创定制最好的网页插件小功能'],
          'href|1': ['http://liqingsong.cc', 'http://wyxgn.com'],
          'type|1': ['header', 'footer'],
        }),
      };
    },
  },
  {
    url: '/api/pages/list',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 0,
        data: mockjs.mock({
          total: 1000,
          currentPage: 1,
          'list|10': [
            {
              id: '@integer(1)',
              'name|1': ['个人博客', '网页小功能'],
              'desc|1': ['李庆松的个人博客', '原创定制最好的网页插件小功能'],
              'href|1': ['http://liqingsong.cc', 'http://wyxgn.com'],
              'type|1': ['header', 'footer'],
            },
          ],
        }),
      };
    },
  },
  {
    url: '/api/pages/list',
    method: 'post',
    response: ({ headers, body }) => {
        return {
          code: 0,
          data: '',
        };
    },
  },
  {
    url: '/api/pages/list/:id',
    method: 'put',
    response: ({ headers, body }) => {
        return {
          code: 0,
          data: '',
        };
    },
  },
  {
    url: '/api/pages/list/:id',
    method: 'delete',
    response: ({ headers, body }) => {
        return {
          code: 0,
          data: '',
        };
    },
  },
  {
    url: '/api/pages/form',
    method: 'post',
    response: ({ headers, body }) => {
        return {
          code: 0,
          data: '',
        };
    },
  },
  {
    url: '/api/pages/detail',
    method: 'get',
    response: ({ body }) => {
      return{
        code: 0,
        data: mockjs.mock({
          userInfo: {
            name: '小李',
            tel: '13770779817',
            courier: '宇宙快递',
            address: '宇宙地球',
            remark: '无',
          },
          refundApplication: {
            ladingNo: '1000000000',
            saleNo: '1234123421',
            state: '已取货',
            childOrders: '3214321432',
          },
          'returnGoods|5': [
            {
              id: '@integer(1,99999)',
              name: '@ctitle(5,10)',
              barcode: '@integer(100000000000000,999999999999999)',
              price: '@float(1,15,0,2)',
              num: '@integer(1,5)',
              amount: function() {
                return Number(this.price) * Number(this.num);
              },
            },
          ],
          'returnProgress|5': [
            {
              key: '@integer(1,99999)',
              time: '@datetime',
              rate: '@csentence(3, 5)',
              statuskey: '@boolean',
              status: function() {
                return this.statuskey ? 'success' : 'processing';
              },
              operator: '取货员 ID @integer(1000,9999)',
              cost: '@integer(1,5) h',
            },
          ],
        }),
      };
    },
  },
] as MockMethod[];

