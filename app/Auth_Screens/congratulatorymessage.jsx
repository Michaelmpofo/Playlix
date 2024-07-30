import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';


const congratulatorymessage = () => {
  return (
    <Link href='/(tabs)' asChild>
      <TouchableOpacity>
        <View style={styles.playListContainer}>
          <View style={styles.container1}>
            <View style={styles.imageStyle}>
              <Image
                source={require('../../assets/images/happyman.png')}
                style={styles.albumImage1}
              />
            </View>
            <View style={styles.iconStyle}>
              <AntDesign name="checkcircle" size={70} color="#0AE78A" />
            </View>
            <View style={styles.textStyle}>
              <Text style={styles.text1Style}>Congratulations</Text>
              <Text style={styles.text2Style}>
                You have successfully created an account on
              </Text>
              <Text style={styles.text3Style}>Playlix</Text>
              <Text style={styles.text4Style}>
                Get ready for exciting and nice music
              </Text>
              <Text style={styles.text5Style}>and Tunes</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

export default congratulatorymessage
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#0AE78A',
    width: '100%',
    height: '100%',
  },
  container1: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    marginTop: 100,
    borderRadius: 30,
  },
  imageStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumImage1: {
    width: 300,
    height: 300,
    marginLeft:30,
  },
  iconStyle: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFFFFF',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle2: {
    color: '#FFFFFF',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text1Style: {
    fontSize: 24,
    color: '#0AE78A',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  text2Style: {
    fontSize: 15,
    justifyContent: 'center',
    marginBottom: 5,
  },
  text3Style: {
    fontSize: 24,
    color: '#0AE78A',
    justifyContent: 'center',
    marginBottom: 5,
  },
  text4Style: {
    fontSize: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text5Style: {
    fontSize: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonStyle: {
    width: '45%',
    height: 55,
    padding: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0AE78A',
    backgroundColor: '#0AE78A',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 70,
    marginLeft: 120,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 325,
    height: 54,
    marginLeft: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#0AE78A',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
    height: '100%',
    color: '#000',
  },
  iconLeft: {
    marginRight: 10,
    color: '#000000',
  },
  iconRight: {
    marginLeft: 10,
    color: '#000000',
  },
  criteriaContainer: {
    marginTop: 20,
    paddingHorizontal: 45,
  },
  criteriaHeader: {
    fontSize: 15,
    marginBottom: 10,
    color: '#000',
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  criteriaText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#000',
  },
});
