import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
	componentWillMount() {
		firebase.initializeApp({
		    apiKey: "AIzaSyApjskp9RH-pZwEUagZwpmYlFXHXCt5S3U",
		    authDomain: "auth-49d72.firebaseapp.com",
		    databaseURL: "https://auth-49d72.firebaseio.com",
		    projectId: "auth-49d72",
		    storageBucket: "auth-49d72.appspot.com",
		    messagingSenderId: "220070576732"
  		});
	}

	render(){
		return(
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;