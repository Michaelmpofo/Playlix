import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const SearchCard = ({ label, img, text }) => {
  return (
    <View style={styles.searchCardListContainer}>
      <Text style={{ color: 'white' }}>{label}</Text>
      <View
        style={{
          position: 'absolute',
          zIndex: 10,
          height: 20,
          width: 104,
          marginRight: 10,
          marginBottom: 10,
          backgroundColor: '#000000',
          bottom: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </View>
           <Link href= '/searchSongScreen' asChild>

        <TouchableOpacity>
          <Image
            source={img}
            style={{
              width: 176,
              height: 141.69,
              borderRadius: 10,
              resizeMode: 'cover',
            }}
          />
        </TouchableOpacity>
        </Link>
   
    </View>
  );
};

export default SearchCard;
const styles = StyleSheet.create({
  searchCardListContainer: {
    marginLeft: 1,
    marginBottom: 1,
    position: 'relative',
    height: 141.69,
    width: 160,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 22,
    color: '#fff',
    marginTop: 10,
  },
  textStyle: {
    fontSize: 13,
    color: '#0AE78A',
  },
});
