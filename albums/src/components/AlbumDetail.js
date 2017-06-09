import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View> 

                </View>
                <View style={styles.headerContent}>    
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>    
            </CardSection>    
        </Card>        
    );
};

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
});

export default AlbumDetail;
