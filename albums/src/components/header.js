//import libraries
import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

//make component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

//add styles for components
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 2,
        position: 'relative'
    }
});

//make component available to other parts of the application
export default Header;
