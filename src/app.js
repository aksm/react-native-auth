import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyA-ZATSBpNpys6yv6GRQr2h-3UD3ZhavVk',
    authDomain: 'reactnativeauth-4855b.firebaseapp.com',
    databaseURL: 'https://reactnativeauth-4855b.firebaseio.com',
    projectId: 'reactnativeauth-4855b',
    storageBucket: 'reactnativeauth-4855b.appspot.com',
    messagingSenderId: '501427989444'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;