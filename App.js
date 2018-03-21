import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/SignUp';
import {Provider} from 'react-redux';
import store from './store'
import styles from './App.styles';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <SignUp />
      </View>
        </Provider>
    );
  }
}

