import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import homeMadeCard from '../data/HomeMadeForYoudata';
import { Link } from 'expo-router';

const HomeMadeForYouCardList = () => {
  return (
    <ScrollView horizontal={true}>
      {homeMadeCard.map((item) => (
        <View key={item.id} style={styles.HomeMadeForYouCardListcontainer}>
          <Text style={{ color: 'white' }}>{item.label}</Text>
          <Link href="/homeSongScreen" asChild>
            <TouchableOpacity>
              <Image
                source={item.imgUrl}
                style={{ width: 250, height: 300, borderRadius: 10 }}
              />
            </TouchableOpacity>
          </Link>
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeMadeForYouCardList;

const styles = StyleSheet.create({
  HomeMadeForYouCardListcontainer: {
    marginTop: 1,
    marginLeft: 10,
    marginBottom: 1,
  },
});
