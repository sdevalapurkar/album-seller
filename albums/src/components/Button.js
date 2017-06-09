import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity 
                onPress={this.props.onPress}
                style={styles.button}
            >
                <Text style={styles.text}>{this.props.children}</Text>
            </TouchableOpacity>    
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'orange',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginLeft: 5,
        marginRight: 5
    },
    text: {
        alignSelf: 'center',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default Button;
