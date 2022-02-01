import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './';

const Layout = (props) => {
  return (
    <>
      <Header />
      <>
        {props.children}
      </>
     
      <footer  class="footer"></footer>
    </>
  );
};
export default Layout;


