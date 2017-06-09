import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.viewImageThumbnail}> 
                    <Image 
                        style={styles.thumbnailImage} 
                        source={{ uri: props.album.thumbnail_image }} 
                    />
                </View>
                <View style={styles.headerContent}>    
                    <Text style={styles.headerText}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>    
            </CardSection>   

            <CardSection>
                <Image 
                    source={{ uri: props.album.image }}
                    style={styles.imageAlbumArt}
                />
            </CardSection>   

            <CardSection>
                <Button 
                onPress={() => {
                    Linking.openURL(props.album.url);
                }}
                >
                Buy Now
                </Button>
            </CardSection>     
        </Card>        
    );
};

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18
    },
    thumbnailImage: {
        height: 50,
        width: 50
    },
    viewImageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageAlbumArt: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
