import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  state = { loggedIn: null };
	componentWillMount() {

		firebase.initializeApp({
		    apiKey: "AIzaSyApjskp9RH-pZwEUagZwpmYlFXHXCt5S3U",
		    authDomain: "auth-49d72.firebaseapp.com",
		    databaseURL: "https://auth-49d72.firebaseio.com",
		    projectId: "auth-49d72",
		    storageBucket: "auth-49d72.appspot.com",
		    messagingSenderId: "220070576732"
  		});
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true});
      }
      else{
        this.setState({ loggedIn: false});
      }
    });
	}

  renderContent(){
    console.log(this.state.loggedIn);
    switch (this.state.loggedIn){
      case true:
        return( 
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>);
      case false:
        return <LoginForm/>;
      default:
        return <Spinner size="large"/>;

    }
  }

	render(){
		return(
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;