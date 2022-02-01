import React, { useEffect, useState } from 'react';
import {  Outlet, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TitlebarImageList } from '../..';
import { getPhotos } from '../../../actions/';
import './dashboard.scss';
import { VerticalTabs, Aside} from "./../../../components"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
 
  const theme = useTheme();

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
  const DarkPaper = styled('Paper')({
    
  });
  return (
    <>
   
    <Grid container sx={{pt:'0px !important'}} className='main-content' style={style.leftNav} >
      
        <Grid item   >
           <VerticalTabs></VerticalTabs>
          </Grid>
          <Grid item xs>
             
          
            <Grid container>
                 <Grid item xs={9}>
                 <Paper square sx={{ border:'1px solid #ccc', height:1,p:1, mx:'2px'}}  >
                     This is Dash

                     ssjsjjsjsj
                 </Paper>  
                    
                 </Grid>
                 <Grid item xs>
                    <Aside></Aside>
                 </Grid>
                
            </Grid>
            
          </Grid>
          
     </Grid>  
     
    
    
    </>
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
  leftNav:{
     paddingLeft:'-10px'
  }
};
