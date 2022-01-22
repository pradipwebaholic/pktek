import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
  const parmas = useParams();
  return <>This is Home Page {parmas.id}</>;
};
export default Home;
const style = {
  ul: {
    listStyle: 'none',
    display: 'flex',
  },
};
