import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Image from "next/image";

const img1 = require('../components/capterra.png')
const img2 = require('../components/goodfirms.png');
const img3 = require('../components/softsuggests.png')
const img4 = require('../components/techjockey.png')

const descr1 = "We Got Featured !"
const descr2 = "We got mentioned and listed on various platforms. You can find us here."

const ImageBody: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h6" gutterBottom fontWeight={700} sx={{ marginTop: 4 }}>
        {descr1}
      </Typography>
      <Typography variant="body2" paragraph sx={{ marginBottom: -1 }}>
        {descr2}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={img1} alt="default" width={120} height={50} style={{ marginRight: 27 , marginTop:47}} />
        <Image src={img2} alt="default" width={120} height={60} style={{ marginRight: 25 , marginTop:45}} />
        <Image src={img3} alt="default" width={120} height={40} style={{ marginRight: 25, marginTop:50 }} />
        <Image src={img4} alt="default" width={180} height={150} />
      </Box>
    </Container>
  );
}

export default ImageBody;