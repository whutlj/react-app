import React, { Component } from 'react';
import { NavLink, Link, Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Loadable from 'react-loadable';
import LoadingComponent from './components/common/LoadingComponent';
import LinkItem from './components/LinkItem';
import PropTypes from 'prop-types';
// 代码拆分
const Dashboard = Loadable({
  loader: () => import('./components/DashBoard'),
  loading: LoadingComponent
});
const DashboardUser = Loadable({
  loader: () => import('./components/DashBoardUser'),
  loading: LoadingComponent
});
const NestRoute = Loadable({
  loader: () => import('./components/NestRoute'),
  loading: LoadingComponent
});
const DefinePureComponent = Loadable({
  loader: () => import('./components/DefinePureComponent'),
  loading: LoadingComponent
});
const WithComponent = Loadable({
  loader: () => import('./components/WithComponent'),
  loading: LoadingComponent
});

const navStyle = {
  fontWeight: 'bold',
  fontSize: '20px'
};
class App extends Component {
  constructor(props) {
    super(props);
    this.linkToRoute = this.linkToRoute.bind(this);
  }
  // shouldComponentUpdate() {
  //   // console.log('shouldComponentUpdate');
  //   // 初始（第一次）/(forceUpdate)渲染，不会调用该生命周期
  //   return true;
  // }
  /**
   * 路由跳转
   */
  linkToRoute() {
    // 不能使用这种方式
    // this.props.history.push('/app/nest/secondNest');
    console.log(this);
    // return <Redirect to="/nest/secondNest" />;
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WithComponent btnName={'js路由跳转'} />
        <Link className="nav-selected" to="/dashboard">
          跳转
        </Link>
        <Link to="/nest/secondNest">跳转</Link>
        <div>
          <NavLink to={{ pathname: '/dashboard' }} activeClassName="nav-selected" activeStyle={navStyle}>
            有样式的的跳转NavLink
          </NavLink>
        </div>
        <Route name="Dashboard" path="/dashboard/user" component={DashboardUser} />
        <Route name="Dashboard" path="/dashboard" exact component={Dashboard} />
        <div>
          <div>这里测试嵌套路由</div>
          <Route path="/nest" component={NestRoute} />
          <div>嵌套的div底部</div>
        </div>
        <ul>
          <LinkItem to="/dashboard/user" name="children" age="23" />
        </ul>
        <DefinePureComponent>
          <NavLink to="/dashboard/user">报表</NavLink>
          <Link to="/nest/secondNest">嵌套</Link>
          <Route name="Dashboard" path="/dashboard" exact component={Dashboard} />
        </DefinePureComponent>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
};
App.defaultProps = {
  name: 'WhutLj'
};
export default App;
