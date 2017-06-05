//import libraries
import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';

//make component
const Header = () => {
    return (
        <Text style={styles.textStyle}>Albums</Text>
    );
};

//add styles for components
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
});

//make component available to other parts of the application
export default Header;
