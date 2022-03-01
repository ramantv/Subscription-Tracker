import * as React from 'react';
import Button from '../widgets/Button';
import Typography from '../widgets/Typography';
import SubtracktHeroLayout from './SubtracktHeroLayout';

import backgroundImage from '../assets/stream-splash.png';

export default function SubtracktHero() {
  return (
    <SubtracktHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome to Subtrackt
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Your Video Streaming Subscriptions Tracker and a handy-dandy ready-reckoner for what you watch.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover how you could watch more for less...
      </Typography>
    </SubtracktHeroLayout>
  );
}
