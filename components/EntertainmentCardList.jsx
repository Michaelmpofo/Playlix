import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import entertainmentCardList from '../data/entertainmentdata';
import { Link } from 'expo-router';

const EntertainmentCardList = () => {
  return (
    <ScrollView horizontal={true}>
      {entertainmentCardList.map((item) => (
        <View key={item.id} style={styles.EntertainmentCardlistContainer}>
          <Link href="/homeSongScreen" asChild>
            <TouchableOpacity>
              <Image
                source={item.imgUrl}
                style={{ width: 200, height: 200, borderRadius: 10 }}
              />
            </TouchableOpacity>
          </Link>

          <Text style={{ color: 'white' }}>{item.label}</Text>
          <Text style={{ color: 'white' }}>{item.album}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default EntertainmentCardList;

const styles = StyleSheet.create({
  EntertainmentCardlistContainer: {
    marginTop: 1,
    marginLeft: 17,
  },
});
