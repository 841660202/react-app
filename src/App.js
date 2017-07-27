<<<<<<< HEAD
import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import DangerButton from './DangerButton';
import {hashHistory} from 'react-router';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import RouteMap from './router/RouterMap';
import ScrollToTop from './Component/ScrollToTop';
import RecursivePatch from './containers/Home/RecursivePatch';
import SideBar from './containers/Home/SideBar';
import AnimationRouter from './containers/Home/AnimationRouter';


import AntButton from './containers/Ant/Ant';
=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
>>>>>>> cfdcebf6e372d580a261d23c182413e2830223f7

class App extends Component {
  render() {
    return (
<<<<<<< HEAD

      <div style={{height:'100%',width:'100%'}}>
        <AntButton></AntButton>
        {/*<h2 className="red">嵌套路由</h2>

        <RouteMap/>
        ----------------------
        <h2 className="red">递归路由</h2>
        <RecursivePatch/>
        <h2 className="red">侧边栏路由</h2>
        <SideBar/>
        <h2 className="red">动画路由</h2>
        <AnimationRouter/>*/}
        {/*<ScrollToTop/>*/}
      </div>

    );
  }

}
=======
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

>>>>>>> cfdcebf6e372d580a261d23c182413e2830223f7
export default App;
