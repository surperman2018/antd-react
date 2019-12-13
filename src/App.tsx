import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import Header from "./layout/header";
import Sider from "./layout/sider";
import Breadcrumb from "./layout/breadcrumb";

import routes from './routes'


import { Layout } from 'antd';
const { Content } = Layout;


const App: React.FC<{}> = function App (){
  return (
    <BrowserRouter>
      <Layout className='app'>
        {/* 头部 */}
        <Header />
        <Layout>
          {/* 侧栏 */}
          <Sider />
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* 面包屑 */}
            <Breadcrumb />
            {/* 内容区域 */}
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
            <Suspense fallback={<div>loading</div>}>
              {renderRoutes(routes)}
            </Suspense>
            </Content>
          </Layout>
        </Layout>
      </Layout>
   </BrowserRouter>
  );
};

export default App;
