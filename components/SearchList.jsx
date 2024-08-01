import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import searchCardList from '../data/searchtabdata';
import SearchCard from './SearchCard';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

const SearchList = () => {
  return (
    <FlatList
      ListHeaderComponent={() => (
        <Text style={styles.headingText}>Browse Categories</Text>
      )}
      data={searchCardList}
      renderItem={({ item }) => (
        <SearchCard img={item.imgUrl} label={item.label} text={item.text} />
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.flatListContainer}
      columnWrapperStyle={styles.row}
    />
  );
};

export default SearchList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
    marginHorizontal: 10, // Add margin to make it look consistent with content
  },
  flatListContainer: {
    paddingBottom: 60,
    padding:10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
