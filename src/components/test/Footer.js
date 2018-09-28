import React from 'react';
import FooterLink from './Link';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.bindClick = this.bindClick.bind(this);
  }
  bindClick(val) {
    console.log(val);
  }
  render() {
    return (
      <p>
        show:{' '}
        <FooterLink filter="SHOW_ALL" onClick={this.bindClick}>
          all
        </FooterLink>
        {','}
        <FooterLink filter="SHOW_ACTIVE" onClick={this.bindClick}>
          active
        </FooterLink>
        {','}
        <FooterLink filter="SHOW_COMPLETED" onClick={this.bindClick}>
          completed
        </FooterLink>
      </p>
    );
  }
}
