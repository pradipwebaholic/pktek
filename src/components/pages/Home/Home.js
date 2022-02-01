import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {Aside} from "../../../components"
import "./Home.scss"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { VerticalTabs} from "./../../../components"
import Paper from '@mui/material/Paper';
const Home = () => {
  const parmas = useParams();
  const theme = useTheme();
  //Custom Styles
  //Use Theme Veriables
  const Ram = styled('div')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    color:theme.palette.grey[100]
  });
  
  
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>

<Grid container sx={{pt:'0px !important'}} className='main-content' style={style.leftNav} >
      
      <Grid item   >
         <VerticalTabs></VerticalTabs>
        </Grid>
        <Grid item xs>
           
        
          <Grid container sx={{ height:1}}>
               <Grid item xs={12} >
               <Paper square sx={{ border:'1px solid #ccc', height:1,p:1, mx:'2px'}}  >
                  Home Page
               </Paper>  
                  
               </Grid>
              
              
          </Grid>
          
        </Grid>
        
   </Grid>  
   </>
  );
};
export default Home;
const style = {
  ul: {
    listStyle: 'none',
    display: 'flex',
  },
};
