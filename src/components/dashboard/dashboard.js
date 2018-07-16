import React, { Component } from 'react';

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

import NavigationBar from './navigationBar';

export default class Dashboard extends Component {

  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <NavigationBar />
      </ThemeContext.Provider>
    );
  }
}

const uiTheme = {
  palette:{
    primaryColor: COLOR.green500,
  },
  toolbar:{
    container: {

    },
  }
}