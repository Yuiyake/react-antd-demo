# admin-antd-react-vite

此分支是 Vite + React 18 + Ant Design + Recoil 版本

## Demo

**注意：Demo 用的是在线mock服务，不稳定，若在线登录不了pull到本地可直接运行查看demo**

| **[http://vite-demo.admin-antd-react.liqingsong.cc](http://vite-demo.admin-antd-react.liqingsong.cc/)**             |
:-------------------------:
| ![Home](http://admin-antd-react.liqingsong.cc/v2_vite/images/home.png)  |



## 使用文档

 - [http://admin-antd-react.liqingsong.cc](http://admin-antd-react.liqingsong.cc/)
 - [Github](https://github.com/lqsong/admin-antd-react) 
 - [Gitee](https://gitee.com/lqsong/admin-antd-react)


## 后台前端解决方案列表

 - admin-element-vue（[GitHub](https://github.com/lqsong/admin-element-vue)、[Gitee](https://gitee.com/lqsong/admin-element-vue)）
 - admin-antd-vue（[GitHub](https://github.com/lqsong/admin-antd-vue)、[Gitee](https://gitee.com/lqsong/admin-antd-vue)）
 - admin-antd-react（[GitHub](https://github.com/lqsong/admin-antd-react)、[Gitee](https://gitee.com/lqsong/admin-antd-react)）
 - electron-admin-element-vue（[GitHub](https://github.com/lqsong/electron-admin-element-vue)、[Gitee](https://gitee.com/lqsong/electron-admin-element-vue)）
 - electron-admin-antd-vue（[GitHub](https://github.com/lqsong/electron-admin-antd-vue)、[Gitee](https://gitee.com/lqsong/electron-admin-antd-vue)）
 - electron-admin-antd-react（[GitHub](https://github.com/lqsong/electron-admin-antd-react)、[Gitee](https://gitee.com/lqsong/electron-admin-antd-react)）
 - admin-vue3-micro-qiankun（[GitHub](https://github.com/lqsong/admin-vue3-micro-qiankun)、[Gitee](https://gitee.com/lqsong/admin-vue3-micro-qiankun)）

## 前台前端SSR解决方案列表

 - midway-vue3-ssr（[GitHub](https://github.com/lqsong/midway-vue3-ssr)、[Gitee](https://gitee.com/lqsong/midway-vue3-ssr)）


## 功能

```
- 登录 / 注销 / 注册

- 权限验证
  - 页面权限
  - 按钮操作
  - 权限配置

- 全局功能
  - 国际化多语言
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑（支持自定义配置）
  - Svg Sprite 图标
  - Mock 数据

- 综合实例
  - 引导页
  - 组件示例
    - 编辑器
      - CKEditor
      - tui-editor
    - 图标
      - IconSvg
  - 页面示例
    - 列表页面
      - 标准列表
      - 表格列表
      - 高度自适应表格
      - 搜索列表
    - 表单页面
      - 基础表单
      - 高级表单      
    - 详情页面
      - 基础详情
      - 模块详情
      - 表格详情
  - 权限验证
```


## 自定义配置

### **(建议)** 本地或开发模式下，不要直接修改 '.env.development'
复制 '.env.development' 重命名为 '.env.development.local' , 启用修改对应的参数.

### **(建议)** 生产模式下，不要直接修改 '.env.production'
复制 '.env.production' 重命名为 ' .env.production.local' , 修改对应的参数.


## 项目设置

### 一、Install dependencies,


```
$ pnpm install
```

 推荐使用 pnpm , **[pnpm的安装与使用](http://liqingsong.cc/article/detail/26)** 。

### 二、Start the dev server,

```
$ pnpm run dev
```


### 三、Compiles and minifies for production

```
$ pnpm run build
```

### 四、精简 svg icon

```
$ pnpm run svgo
```

