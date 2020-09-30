import React from 'react';
import { Image, Text, View } from 'react-native';
import { SongType } from '../../types';

import styles from './styles';

interface ISong {
    song: SongType
}

const Song: React.FC<ISong> = ({ song }) => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: song.imageURI }} />
                <View style={styles.right}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View >
        </>
    );
}

export default Song;
