import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import FindFriendsTab from '../../components/FindFriendsTab';

const SetUpProfilePage2 = () => {
  const Handshake = require('../../assets/images/homeScreenimages/handshake.png');
  const Rectangle = require('../../assets/images/homeScreenimages/Rectangle.png');

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={styles.SetUpProfilePageContainer}>
      <View>
        <Link href='/HomeScreens/SetUpProfilePage' asChild>
          <TouchableOpacity>
            <AntDesign name="left" size={20} color="#0AE78A" style={styles.arrow} />
          </TouchableOpacity>
        </Link>
        <Text style={styles.txt}>Help others find you</Text>
       
        <Image source={Handshake} style={styles.playlixImg} />
        
        <View>
          <TouchableOpacity>
        <Image source={Rectangle} style={styles.Img} />
        </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.InfContainer, styles.usernameContainer]}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ffff"
          fontSize='19'
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={[styles.InfContainer, styles.nameContainer]}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#ffff"
          fontSize='19'
          value={name}
          onChangeText={setName}
        />
      </View>
      <Text style={styles.newtext}>
        Certain profile information is always public, but you can control who
        follows your activity. Playlix does not learn your contacts when
        recommending friends.
      </Text>
      <Text style={styles.text}>See how your data is managed</Text>
      <View>
        <FindFriendsTab />
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
  newtext: {
    fontSize: 10,
    color: '#ffff',
    marginTop: 270,
    marginLeft: 19,
    marginRight: 10,
    textAlign: 'center',
    marginBottom: 0,
    top: 65,
  },
  text: {
    fontSize: 10,
    color: '#0AE78A',
    marginTop: 10,
    marginBottom: -70,
    textAlign: 'center',
    top: 65,
  },
  text1: {
    fontSize: 17,
    color: '#ffff',
    marginTop: 9,
    marginBottom: -10,
    textAlign: 'left',
    top: -8,
  },
  InfContainer: {
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  text3: {
    fontSize: 17,
    color: '#ffff',
    marginTop: 0,
    marginBottom: -20,
    textAlign: 'left',
    top: -20,
  },
  textnew: {
    fontSize: 15,
    color: '#0AE78A',
    marginTop: 20,
    marginLeft: 0,
    marginRight: 220,
    textAlign: 'left',
  },
  txtnew: {
    fontSize: 18,
    color: '#ffff',
    marginTop: -200,
    marginBottom: 300,
    marginLeft: 0,
    marginRight: 280,
    textAlign: 'left',
  },
  text2: {
    fontSize: 15,
    color: '#0AE78A',
    marginTop: 0,
    marginBottom: 0,
    marginRight: 15,
    marginLeft: 280,
  },
  playlixImg: {
    width: 71,
    height: 70,
    marginTop: 410,
    marginBottom: -600,
    marginLeft: 100,
    marginRight: 80,
    top: 130,
  },
  Img: {
    width: 92,
    height: 98,
    marginTop: 180,
    marginBottom: -30,
    marginLeft: 0,
    marginRight: 0,
    alignSelf: 'center',
  },
  arrow: {
    marginTop: -155,
    marginLeft: -40,
    marginRight: 0,
    marginBottom: 70,
    alignSelf: 'left',
  },
  txt: {
    fontSize: 22,
    color: '#ffff',
    marginTop: -130,
    marginBottom: -50,
    textAlign: 'left',
    fontWeight: 'bold',
    marginRight: 70,
    marginLeft: -30,
  },
  usernameContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#474646',
    top: 95,
    marginBottom:0,
    width: 340,
  },
  nameContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#474646',
    top: -20,
    width: 340,
  },
  input: {
    height: 40,
    color: '#fff',
    paddingHorizontal: 10,
  },
});

export default SetUpProfilePage2;
