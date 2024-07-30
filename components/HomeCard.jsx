import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const HomeCard = ({ label, img }) => {
  return (
    <View style={styles.HomeCardContainer}>
      <Text>{label}</Text>
      <Image source={img} style={styles.homeCardImg} />
    </View>
  );
};
export default HomeCard;

const styles = StyleSheet.create({
  homeCardImg: {
    width: 270,
    height: 365,
    boarderRadius: 13,
    marginLeft: 10,
  },
  HomeCardContainer: {
    flex: 1,
    flexDflexDirection: 'row',
  },
});
