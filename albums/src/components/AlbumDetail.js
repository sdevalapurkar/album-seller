import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View> 
                    <Image 
                        style={styles.thumbnailImage} 
                        source={{ uri: props.album.thumbnail_image }} 
                    />
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
    },
    thumbnailImage: {
        height: 50,
        width: 50
    }
});

export default AlbumDetail;
