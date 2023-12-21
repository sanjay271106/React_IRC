import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import {useNavigate} from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1,my:5}}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8 }>
          <Container fixed>
            <Box sx={{height:'40vh' ,backgroundColor:'black'}}/>
            hello
          </Container>
        </Grid>
        <Grid item xs={8}>
        <Container fixed>
            <Box sx={{height:'40vh' ,backgroundColor:'blue'}}/>
            <item>sanjay</item>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}