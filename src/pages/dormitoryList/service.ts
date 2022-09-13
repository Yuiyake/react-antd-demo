import request from '@/utils/request';
import { TableListQueryParams, TableListItem } from './data';

export async function queryList(params?: TableListQueryParams): Promise<any> {
  return request({
    url: '/pages/list',
    method: 'get',
    params,
  });
}

// Omit:在TableListItem类的基础上剔除某些属性，这里是剔除了id这个属性
export async function createData(params: Omit<TableListItem, 'id'>): Promise<any> {
  return request({
    url: '/pages/list',
    method: 'POST',
    data: params,
  });
}

export async function updateData(id: number, params: Omit<TableListItem, 'id'>): Promise<any> {
  return request({
    url: `/pages/list/${id}`,
    method: 'PUT',
    data: params,
  });
}

export async function removeData(id: number): Promise<any> {
  return request({
    url: `/pages/list/${id}`,
    method: 'DELETE',
  });
}

export async function detailData(id: number): Promise<any> {
  return request({
    url: `/pages/list/${id}`,
  });
}
