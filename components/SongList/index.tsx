import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import AlbumHeader from '../AlbumHeader';
import Song from '../Song';

import { SongType } from '../../types';
import styles from './styles';

interface ISongList {
    songs: SongType[]
    header?: typeof AlbumHeader
}

const SongList: React.FC<ISongList> = ({ songs, header }) => {
    return (
        <>
            <FlatList
                data={songs}
                renderItem={({ item }) => <Song song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={header}
                showsHorizontalScrollIndicator={false}>
            </FlatList>
        </>
    );
}

export default SongList;
