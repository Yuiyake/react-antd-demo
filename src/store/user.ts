import { atom, selector } from 'recoil';
import { queryMessage } from '@/services/user';
import { ResponseData } from '@/utils/request';

export interface CurrentUser {
  id: number;
  name: string;
  avatar: string;
  roles: string[];
}

export const initialState: CurrentUser = {
  id: 0,
  name: '',
  avatar: '',
  roles: [],
};

export const userState = atom({
  key: 'userState',
  default: initialState,
});

// selector是用来计算过滤数据的，跟atom隔离，也可以理解成是把atomdeepClone了一份用来单独作为一个变量
export const userMessageState = selector({
  key: 'userMessageState',
  get: async () => {
    const response: ResponseData<number> = await queryMessage();
    const { data, code } = response;
    if (code !== 0) {
      throw response.msg;
    }
    return data || 0;
  },
});
