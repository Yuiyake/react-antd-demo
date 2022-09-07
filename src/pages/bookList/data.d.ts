// 表格查询字段
export interface TableListQueryParams {
  page: number;
  per: number;
}

// 分页数据
export interface PaginationConfig {
  total: number;
  current: number;
  pageSize: number;
  showSizeChanger: boolean;
  showQuickJumper: boolean;
}

// 表格字段限制
export interface TableListItem {
  id: number;
  name: string;
  desc: string;
  href: string;
  type: string;
}

export interface IResponseData {
  list: TableListItem[];
  total: number;
}
