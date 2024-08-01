import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import homeCardList from '../data/data';
import { Link } from 'expo-router';

const CardList = () => {
  return (
    <ScrollView horizontal={true}>
      {homeCardList.map((item) => (
        <View key={item.id} style={styles.homecardllistcontainer}>
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

export default CardList;

const styles = StyleSheet.create({
  homecardllistcontainer: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
});
