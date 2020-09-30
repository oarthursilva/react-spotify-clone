import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { AlbumType } from '../../types';
import Album from '../Album';

import styles from '../AlbumCategory/styles';

export interface IAlbumCategory {
    title: string;
    albums: AlbumType[]
}

const AlbumCategory: React.FC<IAlbumCategory> = ({ title, albums }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={albums}
                renderItem={({ item }) => <Album album={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}>
            </FlatList>
        </View>
    );
}

export default AlbumCategory;
