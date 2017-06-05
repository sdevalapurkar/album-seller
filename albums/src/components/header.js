//import libraries
import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

//make component
const Header = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>Albums</Text>
        </View>
    );
};

//add styles for components
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: 'orange'
    }
});

//make component available to other parts of the application
export default Header;
