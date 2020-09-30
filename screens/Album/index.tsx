import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import SongList from '../../components/SongList';

import AlbumHeader from '../../components/AlbumHeader';
import album from '../../data/albumDetails';

import styles from './styles';

const AlbumPage = () => {
    const route = useRoute();

    useEffect(() => {
        // route.params.id
    }, []);

    return (
        <View>
            <SongList
                songs={album.songs}
                header={() => <AlbumHeader album={album} />}
            />
        </View>
    );
}
export default AlbumPage;
