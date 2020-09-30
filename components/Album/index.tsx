import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

import { AlbumType } from '../../types';
import styles from './styles';

interface IAlbum {
    album: AlbumType
}

const Album: React.FC<IAlbum> = ({ album }) => {

    const { navigate } = useNavigation();

    const onAlbumPress = (album_id: string) => {
        navigate('Album', { id: album_id });
    }

    return (
        <TouchableWithoutFeedback onPress={() => onAlbumPress(album.id)}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: album.imageURI }} />
                <Text style={styles.headline}>{album.headline}</Text>
            </View >
        </TouchableWithoutFeedback>
    );
}

export default Album;
