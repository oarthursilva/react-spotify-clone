import React from 'react';
import { Image, Text, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import { SongType } from '../../types';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IPlayerWidget {
    song?: SongType
}

const song = {
    id: "1",
    imageURI:
        "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
    title: "High on You",
    artist: "Helen",
}

const PlayerWidget: React.FC<IPlayerWidget> = ({ }) => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: song.imageURI }} />

                <View style={styles.left}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.dot}>●</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>

                <View style={styles.right}>

                    <TouchableOpacity
                        delayLongPress={0}
                        delayPressIn={0}
                        activeOpacity={0.8}>
                        <AntDesign name='hearto' size={26} color={'white'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        delayLongPress={0}
                        delayPressIn={0}
                        activeOpacity={0.8}>
                        <FontAwesome name='play' size={26} color={'white'} />
                    </TouchableOpacity>
                </View>
            </View >
        </>
    );
}

export default PlayerWidget;
