import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';
import { BottomNavigation, } from 'react-native-material-ui';

import styles from './styles';

export default class NavigationBar extends Component{
  state = {
    active: 'main',
  }

  render(){
    const {active} = this.state;
    return(
      <View style={styles.container}>
        <BottomNavigation active={active} hidden={false}>
          <BottomNavigation.Action
            key="main"
            icon="person"
            label="Main"
            onPress={()=> this.setState({active: 'main'})}
          />
          <BottomNavigation.Action
            key="people"
            icon="people"
            label="People"
            onPress={() => this.setState({ active: 'people' })}
          />
          <BottomNavigation.Action
            key="bookmark-border"
            icon="bookmark-border"
            label="Bookmark"
            onPress={() => this.setState({ active: 'bookmark-border' })}
          />
          <BottomNavigation.Action
            key="settings"
            icon="settings"
            label="Settings"
            onPress={() => this.setState({ active: 'settings' })}
          />
        </BottomNavigation>
      </View>
    )
  }
}