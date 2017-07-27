import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
// import Button from 'antd/lib/button';
import './Ant.css'
// class AntButton extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Button type="primary">Button</Button>
//       </div>
//     );
//   }
// }

// export default AntButton;
import Side from './side';
import Nomatch from '../404';
/*---------子页面----------- */
import Subpage1 from '../../subpage/subpage1';
import Subpage2 from '../../subpage/subpage2';
import Subpage3 from '../../subpage/subpage3';
import Subpage4 from '../../subpage/subpage4';
import Subpage5 from '../../subpage/subpage5';
import Subpage6 from '../../subpage/subpage6';
import Subpage7 from '../../subpage/subpage7';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;









export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
        <Router>
            <Layout className='ant-layout-has-sider'>
                <Side />
                <Layout>
                    <Header style={{ background: '#000', padding: 0,color:'#fff',textAlign:'center' }} >wo 需要用redux来动态改变实现交互</Header>
                    <Content style={{ margin: '0 16px'}}>
                        Content组件 
                        {/*<Breadcrumb style={{ margin: '12px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        Bill is a cat.
                        </div>*/}
                        <Switch>
                            <Route exact path="/" component={Subpage1}/>{/*精准匹配，必须只有/时才会显示home组件*/}
                            <Route path="/key2" component={Subpage2}/>
                            <Route path="/key3" component={Subpage3}/>
                            <Route path="/key4" component={Subpage4}/>
                            <Route path="/key5" component={Subpage5}/>
                            <Route path="/key6" component={Subpage6}/>
                            <Route path="/key7" component={Subpage7}/>{/*正规路由嵌套*/}
                            <Route  component={Nomatch}/>{/*正规路由嵌套*/}
                        </Switch>
                       
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                       this app ©2017 Created by chen
                    </Footer>
                </Layout>
            </Layout>
      </Router>
    );
  }
}
