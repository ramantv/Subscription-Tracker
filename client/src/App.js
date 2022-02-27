import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

// material-ui imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// Our own pages
import SignIn from "./pages/SignInSide";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import Auth from "./utils/auth";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route component={NotFound} />
            </Switch>
          </Box>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
