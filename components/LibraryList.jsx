import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import libraryCardList from '../data/libraryscreendata';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

const LibraryList = () => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollContainer}
    >
      {libraryCardList.map((item) => (
        <View key={item.id} style={styles.libraryListContainer}>
          <Link href="/library_screens/favoritesongs" asChild>
            <TouchableOpacity>
              <Image source={item.imgUrl} style={styles.image} />
            </TouchableOpacity>
          </Link>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default LibraryList;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  libraryListContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 169,
    height: 153,
    borderRadius: 10,
  },
  label: {
    color: 'white',
    marginTop: 5,
  },
  text: {
    color: 'white',
  },
});
