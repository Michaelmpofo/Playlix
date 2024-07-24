import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import Done from '../../components/Done';

const SetUpProfilePage4 = () => {
  const on = require('../../assets/images/homeScreenimages/on.png');
  const off = require('../../assets/images/homeScreenimages/off.png');

  const [isEveryoneSelected, setIsEveryoneSelected] = useState(false);
  const [isPeopleYouApproveSelected, setIsPeopleYouApproveSelected] = useState(false);
  const [isContactsAllowed, setIsContactsAllowed] = useState(false);
  const [isAppleIDAllowed, setIsAppleIDAllowed] = useState(false);

  return (
    <View style={styles.SetUpProfilePageContainer}>
      <View>

        <Link href='/HomeScreens/SetUpProfilePage3' asChild>
          <TouchableOpacity>
            <View>
            <AntDesign name="left" size={20} color="#0AE78A" style={styles.arrow} />
            </View>
          </TouchableOpacity>
        </Link>
          <View>
        <Text style={styles.txt}>Choose who can follow you</Text>
        </View>
        <View style={styles.InfContainer}>
          <Text style={[styles.text2, isEveryoneSelected && { color: '#0AE78A' }]}>Everyone</Text>
          <View>
            <TouchableOpacity onPress={() => setIsEveryoneSelected(!isEveryoneSelected)}>
              {isEveryoneSelected ? (
                <AntDesign name="checkcircle" size={24} color="#0AE78A" style={styles.tickImage} />
              ) : (
                <Entypo name="circle" size={21} color="grey" style={styles.tickImage} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Inf2Container}>
          <Text style={[styles.text2, isPeopleYouApproveSelected && { color: '#0AE78A' }]}>People you approve</Text>
          <View>
            <TouchableOpacity onPress={() => setIsPeopleYouApproveSelected(!isPeopleYouApproveSelected)}>
              {isPeopleYouApproveSelected ? (
                <AntDesign name="checkcircle" size={24} color="#0AE78A" style={styles.tickImage2} />
              ) : (
                <Entypo name="circle" size={21} color="grey" style={styles.tickImage2} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text}>FRIEND RECOMMENDATIONS</Text>
        <Text style={styles.text2}>Contacts on Playlix</Text>
        <View style={styles.IContainer}>
          <Text style={styles.text3}>
            Allow Playlix to periodically check the contacts on your device to recommend new friends
          </Text>
          <View>
            <TouchableOpacity onPress={() => setIsContactsAllowed(!isContactsAllowed)}>
              {isContactsAllowed ? (
                <Image source={on} style={styles.toggleImage} />
              ) : (
                <Image source={off} style={styles.toggleImage} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text2}>Allowing Finding by Apple ID</Text>
        <View style={styles.InContainer}>
          <Text style={styles.text4}>
            People who have the email address or phone number you use for your Apple ID in their contacts may see you as a recommended friend
          </Text>
          <View>
            <TouchableOpacity onPress={() => setIsAppleIDAllowed(!isAppleIDAllowed)}>
              {isAppleIDAllowed ? (
                <Image source={on} style={styles.toggleImage2} />
              ) : (
                <Image source={off} style={styles.toggleImage2} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Done />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SetUpProfilePageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    borderBlockEndColor: '#4A4A4A',
  },
  toggleImage: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 1,
    marginBottom: 0,
    bottom: 70,
    left: -65,
  },
  tickImage: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    bottom: 75,
    left: 205,
  },
  toggleImage2: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    bottom: 95,
    left: -65,
  },
  tickImage2: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    bottom: 75,
    left: 120,
  },
  arrow: {
    marginTop: 0,
    marginLeft: -31,
    top: -155,
    left: 55,
  },
  txt: {
    fontSize: 22,
    color: '#ffff',
    top: -130,
    textAlign: 'left',
    fontWeight: 'bold',
    marginRight: 180,
    marginLeft: -10,
    left: 35,
    marginBottom: -45,
  },
  text: {
    fontSize: 11,
    color: '#616161',
    top: -50,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 20,
    left: 10,
  },
  text2: {
    fontSize: 17,
    color: '#ffff',
    marginBottom: 50,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 20,
    left: 10,
    top: -50,
  },
  text3: {
    fontSize: 10,
    color: '#ffff',
    marginRight: 130,
    marginLeft: 20,
    left: 10,
    top: -70,
  },
  text4: {
    fontSize: 10,
    color: '#ffff',
    marginRight: 130,
    marginLeft: 20,
    left: 10,
    top: -97,
  },
  InfContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 0,
    borderTopWidth: 1,
    borderColor: '#474646',
    width: 340,
  },
  Inf2Container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 0,
    borderTopWidth: 1,
    borderColor: '#474646',
    width: 340,
  },
  InContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 0,
    width: 340,
  },
  IContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 0,
    borderTopWidth: 1,
    borderColor: '#474646',
    width: 340,
    top: -25,
  },
});

export default SetUpProfilePage4;
