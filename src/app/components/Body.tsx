import React from 'react';
import { Box, Button, Container, Typography, styled } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import descriptions from './description';
import Image from 'next/image';

const CustomContainer = styled(Box)({
  backgroundColor: '#11235F',position:"relative" , marginRight:50,display: 'flex', minHeight: '100vh', alignItems: 'center', width: '100%',
  paddingInline: 100,
  '& img': {
    maxWidth: '500px',
    width: '100%',
    objectFit: 'contain',
    
  },
  '@media(max-width: 767px)': {
    flexDirection: 'column',
    minHeight: 'unset',
    paddingTop: 150,
  },
  '@media(max-width: 1199px)': {
    '& img': {
      maxWidth: '300px',
      width: '100%',
    },
    '& h2': {
      fontSize: '24px'
    },
  },
})

const Body: React.FC = () => {
  return (
    <CustomContainer>
      <Box sx={{flex: 1}}>
      <Typography variant="h6" gutterBottom sx={{color:"#FFFFFF" , fontWeight:'bold'}} >
        {descriptions.des1}
      </Typography>
      <Typography variant="h2" fontWeight={"bold"}  sx={{color:"#FFFFFF" }}>
       {descriptions.des2}
      </Typography> 
       <Typography variant="h2" fontWeight={"bold"} sx={{color:"#FFFFFF" }}>
       {descriptions.des3}
      </Typography>
      <Typography variant="h2" fontWeight={"bold"} sx={{color:"#FFFFFF" }}>
        {descriptions.des4}
      </Typography>
      <Typography variant="body1" paragraph sx={{color:"#FFFFFF", marginTop:"2rem"}}>
        {descriptions.des5}
      </Typography >
      <Button style={{color:"black" , backgroundColor:"#67F4DB",fontSize:10 , fontFamily:'sans-serif' , borderRadius:19, width:120 }} >
        {descriptions.des6}
        <KeyboardArrowRightIcon sx={{position:'absolute' , right:12 , height:15, width:15}} />
      </Button>
      <Button style={{color:"#FFFFFF", borderRadius:19 , backgroundColor:"#11235F" , border: "1px solid #FFFFFF" , width:120 , fontSize:10 , marginLeft:20 }} > 
        Download
      </Button>
      </Box>
      <Image style={{flex: 1 , }} src={require('../components/mainImages.png')} alt='default'/>
    </CustomContainer>
  );
};

export default Body;
