import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MovieIcon from '@mui/icons-material/Movie';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Redirect } from "react-router";
import Auth from "../utils/auth";


const logout = () => {
  if (Auth.loggedIn()) {
    Auth.logout();
    return <Redirect to="/login" />;
  }
};

const ResponsiveAppBar = () => {

  return (
    <AppBar position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <DashboardIcon />
              Dashboard
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <SubscriptionsIcon />
              Manage Subscriptions
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <MovieIcon />
              Watch List
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <AccountCircleIcon />
              User Profile
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="logout">
              <IconButton color="inherit" onClick={logout}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

