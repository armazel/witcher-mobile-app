import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';

import Dashboard from './src/components/dashboard/dashboard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dashboard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
