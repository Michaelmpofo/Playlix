import {
  View,
  Text,
  ScrollView,
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headingText}>Browse Categories</Text>
      <FlatList
        data={searchCardList}
        renderItem={({ item }) => (
          <SearchCard img={item.imgUrl} label={item.label} text={item.text} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.row}
      />

    </ScrollView>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  headingText: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
  flatListContainer: {
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
