import * as React from 'react';
import { FlatList, View } from 'react-native';

import AlbumCategory from '../../components/AlbumCategory';
import categories from '../../data/albumCategories';

import styles from './styles';

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) =>
            <AlbumCategory
              title={item.title}
              albums={item.albums}
            />
          }
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
}
