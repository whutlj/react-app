import React, { Component } from 'react';
import { Route } from 'react-router';
import Loadable from 'react-loadable';
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
  }
  componentDidMount() {
    console.log(`${this.state.name} 挂载`);
  }
  render() {
    return (
      <div>
        {this.state.name} 页面
        <div>
          这里是第二嵌套
          <Route path={this.props.match.path + '/secondNest'} component={SecondNest} />
        </div>
      </div>
    );
  }
}
export default NestRoute;
