import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import App from '../App' 
import NotFound from '../containers/404' 
import Homees6out from '../containers/Home/Home' 
import NoMatch from '../containers/Home/NoMatch' 
// RouterMap extends React.Component {
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }
// 函数组件 or 外部组件
const Homefun = () => (
  <div>
    <h2>Home 函数组件写法</h2>
  </div>
)
//类组件

var Homees5=React.createClass(
  {
    render:function(){
      return(
          <div>
            <h2>Home ES5写法</h2>
          </div>
      )
    }
  }
)
class homees6 extends React.Component{
  render(){
    return (
       <div>
          <h2>Home ES6内部写法</h2>
        </div>
    )
  }
}


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
//函数组件
const Topic = ({match}) => (
  <div>
    {console.info(match)}
    <h3>{match.params.topicId}</h3>
  </div>
)
//topics组件
const Topics = ({match}) => (
  <div>

    {/*{console.info(match.url)}*/}
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link  to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>{/*将三个写在一起*/}
    <Route
      exact
      path={match.url}
      render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    
    <div>
      {/*一级路由*/}
      <ul>
        <li>
          <Link to="/">Home 函数组件</Link>
        </li>
         <li>
          <Link   to="/es5">Home es5写法组件</Link>
        </li>
        <li>
          <Link replace to="/es6out">Home es6外部引用组件 权限路由 类似路由守卫</Link>
        </li>
        <li>
          <Link to="/es6in">Home es6内部引用组件</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/NoMatch">NoMatch</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
       
      </ul>

      <hr/>

      <Route exact path="/" component={Homefun}/>{/*精准匹配，必须只有/时才会显示home组件*/}
      <Route path="/es5" component={Homees5}/>
      <Route path="/es6out" component={Homees6out}/>
      <Route path="/es6in" component={homees6}/>
      <Route path="/about" component={About}/>
      <Route path="/NoMatch" component={NoMatch}/>
      <Route path="/topics" component={Topics}/>{/*正规路由嵌套*/}
    </div>
  </Router>
)

export default BasicExample
