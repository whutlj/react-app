import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Button } from 'antd';
const style = {
  outDiv: {
    color: '#ff6800',
    fontSize: '20px'
  }
}
class WithComponent extends Component {
  constructor(props) {
    super(props);
    this.linkToRoute = this.linkToRoute.bind(this);
  }
  linkToRoute() {
    console.log(this);
    this.props.history.push('/nest/secondNest');
  }
  render() {
    const { match, location, history, btnName } = this.props;
    return <div style={{ ...style.outDiv }}>
        这是withcomponent
        <div>
          正在路由的位置
          {location.pathname}
        </div>
        <Button onClick={this.linkToRoute}>{ btnName }</Button>
      </div>;
  }
}

WithComponent.propTypes = {
  history: PropTypes.object.isRequired
};

const WithComponentWrapper = withRouter(WithComponent);
export default WithComponentWrapper;