//import libraries to create components
import React from 'react';
import {
  AppRegistry
} from 'react-native';
import Header from './src/components/header.js';

//create a component
const App = () => {
  return (
    <Header headerText={'Albums'} />
  );
};

//Render to device
AppRegistry.registerComponent('albums', () => App);

