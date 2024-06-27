// import { useState } from 'react';
import { Layout } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';

const { Header, Sider} = Layout

function App() {
  return (
    <>
      <Layout className='body'>
        <Sider className='sidebar'>
          <Logo/>
          <MenuList/>
        </Sider>
      </Layout>
    </>
  )
}

export default App
