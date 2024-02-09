"use client"

import React from 'react';
import Navbar from '../app/components/Navbar';
import Body from '../app/components/Body';
import ImageBody from './components/ImageBody';
import Footer from './components/Footer';
import { Box } from '@mui/material';

const Page: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Body/>
      
      <Box style={{ minHeight:'20vh', position: 'absolute', top: '52%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#FEF2DF', borderRadius:60, width:"60%"}}>
        <ImageBody/> 
      </Box>
      <Box style={{backgroundColor:"#FFFFFF" , minHeight:'100vh'}}>
          <Footer/>
      </Box>
    
    </div>
  );
};

export default Page;