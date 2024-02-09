import React from 'react';
import { Box, Container, Stack, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const svg1 = (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: 100 }}>
    <path
      fill="#F59F85"
      d="M46.7,-49.1C57.4,-36,60.8,-18,58.7,-2.1C56.6,13.8,49.1,27.7,38.4,36C27.7,44.4,13.8,47.2,0.7,46.5C-12.5,45.9,-25.1,41.8,-37.1,33.4C-49.2,25.1,-60.8,12.5,-62.6,-1.8C-64.5,-16.2,-56.6,-32.4,-44.5,-45.5C-32.4,-58.6,-16.2,-68.5,0.9,-69.4C18,-70.3,36,-62.1,46.7,-49.1Z"
      transform="translate(100 100)"
    />
  </svg>
);

const svg2 = (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: 100 }}>
    <path
      fill="#F1C21B"
      d="M46.7,-49.1C57.4,-36,60.8,-18,58.7,-2.1C56.6,13.8,49.1,27.7,38.4,36C27.7,44.4,13.8,47.2,0.7,46.5C-12.5,45.9,-25.1,41.8,-37.1,33.4C-49.2,25.1,-60.8,12.5,-62.6,-1.8C-64.5,-16.2,-56.6,-32.4,-44.5,-45.5C-32.4,-58.6,-16.2,-68.5,0.9,-69.4C18,-70.3,36,-62.1,46.7,-49.1Z"
      transform="translate(100 100)"
    />
  </svg>
);

const svg3 = (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: 100 }}>
    <path
      fill="#08BDBA"
      d="M46.7,-49.1C57.4,-36,60.8,-18,58.7,-2.1C56.6,13.8,49.1,27.7,38.4,36C27.7,44.4,13.8,47.2,0.7,46.5C-12.5,45.9,-25.1,41.8,-37.1,33.4C-49.2,25.1,-60.8,12.5,-62.6,-1.8C-64.5,-16.2,-56.6,-32.4,-44.5,-45.5C-32.4,-58.6,-16.2,-68.5,0.9,-69.4C18,-70.3,36,-62.1,46.7,-49.1Z"
      transform="translate(100 100)"
    />
  </svg>
);

const cardList = [
  {
    id: 1,
    count: '55000+',
    text: 'Downloads',
    blob: svg1
  },
  {
    id: 2,
    count: '120+',
    text: 'Countries',
    blob: svg2
  },
  {
    id: 3,
    count: '10,000+',
    text: 'Users',
    blob: svg3
  }
];

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Footer: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {cardList.map((item) => (
          <Grid item xs={12} sm={4} key={item.id} sx={{marginTop:30}}>
            <Item sx={{ position: "relative" }}>
              {item.blob}
              <Typography variant='h4' sx={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%, -50%)' }} fontSize={40} fontWeight={700}>
                {item.count}
              </Typography>
              <Typography variant='body2' fontWeight={700} sx={{ marginLeft: 2 }}>
                {item.text}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Footer;
