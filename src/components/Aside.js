import React from 'react';


import { dp } from '../img/';
import { leftCss } from '../css/';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Typography} from '@mui/material'
import Paper from '@mui/material/Paper';



const Aside = () => {
  
  return (
    <aside>
  
   <Stack  direction="row" spacing={2}>
      
      <Avatar
        alt="Remy Sharp"
        src={dp}
        sx={{ width: '100%', height:'auto' }}
      />
      </Stack>
        <Typography  pt={2} variant="h5" component="h5" align="center">
          About Me
       </Typography>
       <Typography  px={2} py={2} variant="body1" className="aboutMe" >
       Hi, I’m Pradip. I have 9+ years of experience in Frontend Development. I have discovered my interest for Books lately. I spend most of my time coding and dreaming. Writing is my hobby and I love to have an spiritited discussion on any topic related to Science, Religion, Politics, Economics and current affair.
       </Typography>
      
      
    </aside>
  );
};
export default Aside;

