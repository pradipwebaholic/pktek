import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Home, About, Aside } from './';
const Layout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Aside />
      <footer></footer>
    </>
  );
};
export default Layout;
