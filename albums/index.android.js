//import libraries to create components
import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

//create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
  );
};

//Render to device
AppRegistry.registerComponent('albums', () => App);

