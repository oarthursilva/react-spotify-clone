import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AlbumType } from '../../types';

import styles from './styles';

interface IAlbumHeader {
    album: AlbumType
}

const AlbumHeader: React.FC<IAlbumHeader> = ({ album }) => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.cover} source={{ uri: album.imageURI }} />

                <Text style={styles.title}>{album?.name}</Text>

                <Text style={styles.subtitle}>
                    BY {album.by} - {album.likes} LIKES
                </Text>

                <TouchableOpacity
                    delayLongPress={0}
                    delayPressIn={0}
                    activeOpacity={0.8}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>PLAY</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default AlbumHeader