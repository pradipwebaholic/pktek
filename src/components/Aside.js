import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { Header, Home, About } from './';
const Aside = () => {
  return (
    <aside>
      <div className="breadCrumb">This is Aside</div>
    </aside>
  );
};
export default Aside;
const style = {
  ul: {
    listStyle: 'none',
    display: 'flex',
  },
};
