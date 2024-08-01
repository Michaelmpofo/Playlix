import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import NewReleaseCardList from '../data/NewReleasesData';
import { Link } from 'expo-router';

const NewReleasesCardList = () => {
  return (
    <ScrollView horizontal={true}>
      {NewReleaseCardList.map((item, index) => (
        <View
          key={item.id || index}
          style={styles.NewReleasesCardListContainer}
        >
          <Link href="/homeSongScreen" asChild>
            <TouchableOpacity>
              <Image source={item.imgUrl} style={styles.image} />
            </TouchableOpacity>
          </Link>

          <Text style={styles.text}>{item.label}</Text>
          <Text style={styles.text}>{item.album}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default NewReleasesCardList;

const styles = StyleSheet.create({
  NewReleasesCardListContainer: {
    marginTop: 1,
    marginLeft: 13,
    marginBottom: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  text: {
    color: 'white',
  },
});
