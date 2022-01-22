import React, { useEffect, useState } from 'react';
import {  Outlet, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TitlebarImageList } from './';
import { getPhotos } from '../actions/';
const Dashboard = () => {
  const [inputs, setInputs] = useState('');

  const [imageList, setImageList] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const { images } = useSelector((state) => {
    console.log('State', state);

    return state.images;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos(10));
    console.log('Images Displaced once', images);
  }, []);
  const handleChange = (event) => {};

  const handleTwo = (event) => {
    event.preventDefault();
    dispatch(getPhotos(2));
  };
  const handleThree = (event) => {
    event.preventDefault();
    dispatch(getPhotos(3));
  };
  return (
    <aside>
      <div className=" ">
        <NavLink style={style.navLinks} to="./home/pradip">
          Home
        </NavLink>
        <NavLink style={style.navLinks} to="./about">
          About
        </NavLink>
        <br />
        <Outlet />
       
        <TitlebarImageList  images={images}/>

        <div>
          <button onClick={handleTwo}>Show Two</button>{' '}
          <button onClick={handleThree}>Show Three</button>
        </div>
      </div>
    </aside>
  );
};
export default Dashboard;


const style = {
  ul: {
    listStyle: 'none',
    display: 'flex',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '11px',
  },
  addButton: {
    height: '30px',
    width: '100px',
    alignSelf: 'center',
    margin: '10px',
  },
  navLinks: {
    fontSize: '18px',
    padding: '10px',
  },
};
