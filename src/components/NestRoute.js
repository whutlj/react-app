import React, { Component } from 'react';
import { Route } from 'react-router';
import Loadable from 'react-loadable';
import { Button } from 'antd';
const SecondNest = Loadable({
  loader: () => import('./SecondNest'),
  loading: () => <div>loading...</div>
});

class NestRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'NestRoute'
    };
    this.linkToRoute = this.linkToRoute.bind(this);
  }
  componentDidMount() {
    console.log(`${this.state.name} 挂载`);
    console.log(this.props);
  }

  linkToRoute() {
    const { history } = this.props;
    console.log('第二层嵌套的页面');
    console.log(history);
    history.goBack();
  }

  render() {
    return (
      <div>
        {this.state.name} 页面
        <div>
          这里是第二嵌套
          <Button onClick={this.linkToRoute} />
          <Route path={this.props.match.path + '/secondNest'} component={SecondNest} />
        </div>
      </div>
    );
  }
}
export default NestRoute;
