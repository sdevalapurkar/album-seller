//import libraries
import React, { Component } from 'react';
import {
    View
} from 'react-native';
import AlbumDetail from './AlbumDetail';

//make component
class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        fetch('http://rallycoding.herokuapp.com/api/music_albums', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((result) => {
            console.log(result); 
            this.setState({
                albums: result
            });   
        })
        .catch((err) => {
            console.log(err);
        });
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>    
        );
    }
}

//make component available to other parts of the application
export default AlbumList;
