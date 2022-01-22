import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider, useSelector, useDispatch } from 'react-redux';
import { Layout, Header, Home, About, Aside, Dashboard } from './components/';
import Store from './store/Store';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faCheckSquare);
function App() {
  return (
    <div className="container">
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="private" element={<Dashboard />}>
          
          <Route path="about" element={<About />} />
          <Route path="home/:id" element={<Home />} />
        </Route>
      </Routes>
    </Layout>
  </div>
  );
}

export default App;
