import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
const ListItemLink = ({ to, ...rest }) => {
  const { name, age } = { ...rest };
  return (
    <Route
      path={to}
      children={({ match }) => {
        return (
          <li className={match ? 'active' : ''}>
            <Link to={to} {...rest}>
              link-item
              <div className={match ? 'active' : ''}>{name}</div>
              <div>{age}</div>
            </Link>
          </li>
        );
      }}
    />
  );
};
export default ListItemLink;
