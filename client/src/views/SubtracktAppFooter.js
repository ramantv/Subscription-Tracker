import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../widgets/Typography';

import tmdbAttributionImg from '../assets/tmdb2.svg';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="/">
        Subtrackt
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mr: 1,
};

export default function SubtracktAppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Copyright />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer"><img src={tmdbAttributionImg} alt="TMDB" /></a>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
