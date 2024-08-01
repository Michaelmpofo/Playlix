import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const OneFamilyPlan = ({ isSelected, onPress, moveBelowIndividual }) => {
  const Group125 = require('../assets/images/homeScreenimages/Group125.png');
  const AppleTV = require('../assets/images/homeScreenimages/AppleTV.png');
  const Group9 = require('../assets/images/homeScreenimages/Group9.png');
  const Group7 = require('../assets/images/homeScreenimages/Group7.png');

  return (
    <TouchableOpacity onPress={onPress}>
      {isSelected ? (
        <View style={styles.OneFamilyContainer}>
          <View>
            <View style={styles.infoContainer}>
              <Text style={styles.mainText}>Family</Text>
              <Text style={styles.Text}>US$12.95/month</Text>
              <Entypo name="star" size={16} color="#0AE78A" />
              <View style={styles.inContainer}>
                <Image source={Group125} resizeMode='contain' style={styles.unknownImgB} />
                <Image source={AppleTV} resizeMode='contain' style={styles.unknownImg2B} />
                <Image source={Group9} resizeMode='contain' style={styles.unknownImg3B} />
                <Image source={Group7} resizeMode='contain' style={styles.unknownImg4B} />
              </View>
            </View>
            <Text style={styles.Text2}>RECOMMENDED</Text>
            <Ionicons name="checkmark-circle" size={30} color="#0AE78A" style={styles.tickImage} />
          </View>
          <View style={styles.inOContainer}>
            <Text style={styles.Text6}>iCloud+ with 200GB of storage</Text>
            <Text style={styles.Text5}>Over 200 ad-free games</Text>
            <Text style={styles.Text4}>Apple Original shows and movies</Text>
            <Text style={styles.Text3}>100 million songs, all ad-free</Text>
          </View>
        </View>
      ) : (
        <View style={[styles.OneFamilyPlanContainer, moveBelowIndividual && styles.moveBelow]}>
          <View style={styles.infoContainer}>
            <Text style={styles.mainText}>Family</Text>
            <Text style={styles.Text}>US$12.95/month</Text>
            <Entypo name="circle" size={24} color="grey" style={styles.tickImage} />
            <View style={styles.infContainer}>
              <Image source={Group125} resizeMode='contain' style={styles.unknownImg} />
              <Image source={AppleTV} resizeMode='contain' style={styles.unknownImg2} />
              <Image source={Group9} resizeMode='contain' style={styles.unknownImg3} />
              <Image source={Group7} resizeMode='contain' style={styles.unknownImg4} />
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default OneFamilyPlan;

const styles = StyleSheet.create({
  OneFamilyPlanContainer: {
    position: 'absolute',
    backgroundColor: '#2C2C2E',
    bottom: 0,
    marginLeft: -165,
    marginRight: 0,
    marginBottom: 415, // Adjusted marginBottom
    padding: 15,
    borderColor: '#2C2C2E',
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 17,
    height: 105,
    width: 330,
  },
  OneFamilyContainer: {
    position: 'absolute',
    backgroundColor: '#2C2C2E',
    bottom: 0,
    marginLeft: -165,
    marginRight: 0,
    marginBottom: 255, // Adjusted marginBottom
    padding: 15,
    borderColor: '#0AE78A',
    borderWidth: 1,
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 17,
    height: 255,
    width: 330,
  },
  moveBelow: {
    marginBottom: 265, // Adjust this value as needed to position below the expanded OneIndividualPlan
  },
  unknownImg: {
    width: 55,
    height:53,
    marginRight:-9,
    marginTop:-8,
  }, 
  unknownImg2: {
  width: 40,
  height:38,
  marginTop:0,
  }, 
  unknownImg3: {
  width: 40,
  height:28,
  marginTop:4,
  }, 
  unknownImg4: {
  width: 40,
  height:28,
  marginTop:3,
  }, 
  unknownImgB: {
    width: 55,
    height:53,
    marginRight:-9,
    marginTop:3,
  }, 
  unknownImg2B: {
  width: 40,
  height:38,
  marginTop:-5,
  marginLeft:9,
  }, 
  unknownImg3B: {
  width: 40,
  height:28,
  marginTop:5,
  marginLeft:9,
  }, 
  unknownImg4B: {
  width: 40,
  height:28,
  marginTop:8,
  marginLeft:9,
  }, 
  tickImage: {
    position: 'absolute',
    top: 0,
    marginRight: -4,
    bottom:0,
    marginLeft:274,
  },
  gradientBackground: {
    position: 'absolute',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 550,
    padding: 15,
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 17,
    height: 75,
    width: 330,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  infContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft:10,
  },
  inContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft:10,
    borderTopColor:'grey',
    borderTopWidth:1,
    width:300,
    right:15,
    
  },
  inOContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft:0,
    marginTop:35,

  },
  
  mainText: {
    fontSize: 23,
    fontWeight: 'bold',
    marginRight: 0,
    color: 'white',
  },
  Text: {
    fontSize: 15,
    color: 'white',
  },
  Text2: {
    fontSize: 11,
    color: '#938D8D',
    marginBottom:161,
    marginLeft:17,
  },
  Text3: {
    fontSize: 15,
    color: 'white',
    marginLeft:44,
    marginBottom:10,
    marginTop:-45,
    
  },
  Text4: {
    fontSize: 15,
    color: 'white',
    marginLeft:44,
    marginBottom:-10,
    marginTop:-37,
    
  },
  Text5: {
    fontSize: 15,
    color: 'white',
    marginLeft:44,
    marginBottom:-20,
    marginTop:-57,
    
  },
  Text6: {
    fontSize: 15,
    color: 'white',
    marginLeft:44,
    marginBottom:0,
    marginTop:-60,
    
  },
});