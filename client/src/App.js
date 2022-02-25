import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import SignIn from './pages/SignInSide';
import SignUp from './pages/SignUp';

import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';

import Auth from './utils/auth';

const client = new ApolloClient({
	request: operation => {
		const token = localStorage.getItem('id_token');
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : '',
			},
		});
	},
	uri: '/graphql',
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Container maxWidth="lg">
					<Box sx={{ my: 4 }}>
						{Auth.loggedIn() ? (
							<>

								<div className='container'>
									<Switch>
										<Route exact path='/dashboard' component={LandingPage} />
										<Route exact path='/' component={LandingPage} />
										<Route component={NotFound} />
									</Switch>
								</div>
							</>
						) : (
							<>
								{/* <Switch> */}
								<Route exact path='/login' component={SignIn} />
								<Route exact path='/' component={LandingPage} />
								<Route exact path='/signup' component={SignUp} />
								{/* </Switch> */}
							</>
						)}
					</Box>
				</Container>
			</Router>
		</ApolloProvider>
	);
}

// function App() {
// 	return (
// 		<ApolloProvider client={client}>
// 			<Router>
// 				<div>
// 					{Auth.loggedIn() ? (
// 						<>
// 							<Header />
// 							<div className='container'>
// 								<Switch>
// 									<Route exact path='/dashboard' component={LandingPage} />
// 									<Route exact path='/' component={LandingPage} />
// 									<Route component={NotFound} />
// 								</Switch>
// 							</div>
// 						</>
// 					) : (
// 						<>
// 							{/* <Switch> */}
// 							<Route exact path='/login' component={SignIn} />
// 							<Route exact path='/' component={LandingPage} />
// 							<Route exact path='/signup' component={SignUp} />
// 							{/* </Switch> */}
// 						</>
// 					)}
// 					<Footer />
// 					<Chatbot />
// 				</div>
// 			</Router>
// 		</ApolloProvider>
// 	);
// }

export default App;
