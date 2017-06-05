//import libraries to create components
import React from 'react';
import {
  Text,
  AppRegistry
} from 'react-native';

//create a component
const App = () => {
  return (
    <Text>Some text</Text>
  );
};

//Render to device
AppRegistry.registerComponent('albums', () => App);

