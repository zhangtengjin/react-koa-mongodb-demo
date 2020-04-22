## react-koa-mongodb-demo

**极简单的登陆注册 demo 示例**

### 目录大致结构
```
├── README.md
├── client **// 客户端**
│   ├── README.md
│   ├── public
│   ├── src
│   │   ├── api // api 文件
│   │   ├── app.js
│   │   ├── index.js // 入口文件
│   │   ├── pages // 主页面
│   │   │   ├── login
│   │   │   └── register
│   │   ├── routers.js // 前端路由文件
│   │   └── setupProxy.js // proxy 代理
└── server **// 服务端**
    ├── README.md
    ├── app.js // 入口文件
    ├── controller // 逻辑层
    │   └── user.js
    ├── db  // 数据库连接
    │   └── index.js
    ├── models // Schema 定义，构造 documents
    │   └── user.js
    ├── mongodb_client_test.js
    ├── package.json
    ├── routers // 路由匹配文件
    │   ├── index.js
    │   └── user.js
    └── utils // 工具类
        ├── response.js
```
### 技术栈
react、webpack、koa、mongodb
### 本地启动

node、mongoDB、navicat 等工具确定已安装基础下启动

```
+ 克隆项目
git clone git@github.com:zhangtengjin/react-koa-mongodb-demo.git

前端启动
+ 首先 cd 到 client 根目录
+ npm i
+ npm run start

后端服务启动
mongoDB 数据库修改为自己本地本地数据库连接, 确定 mongodb 服务已启动
+ 首先 cd 到 server 根目录
+ npm i
+ npm run start
```