import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import Next from '../../components/Next';
import Follow from '../../components/Follow';
const SetUpProfilePage3 = () => {
  const Ellipse23 = require('../../assets/images/homeScreenimages/Ellipse 23.png');
  const Ellipse13= require('../../assets/images/homeScreenimages/Ellipse 13.png');
  const Ellipse14= require('../../assets/images/homeScreenimages/Ellipse 14.png');
  const Ellipse15= require('../../assets/images/homeScreenimages/Ellipse 15.png');
  const Ellipse16= require('../../assets/images/homeScreenimages/Ellipse 16.png');
  const Ellipse17= require('../../assets/images/homeScreenimages/Ellipse 17.png');
  const Ellipse18= require('../../assets/images/homeScreenimages/Ellipse 18.png');
  const Ellipse19= require('../../assets/images/homeScreenimages/Ellipse 19.png');
  const Ellipse20= require('../../assets/images/homeScreenimages/Ellipse 20.png');
  const Ellipse21= require('../../assets/images/homeScreenimages/Ellipse 21.png');
  const Ellipse22= require('../../assets/images/homeScreenimages/Ellipse 22.png');
  const Ellipse24= require('../../assets/images/homeScreenimages/Ellipse 24.png');

  return (
    <GestureHandlerRootView>
      
    <View style={styles.SetUpProfilePageContainer}>
    <ScrollView>
      <View style={styles.headerContainer}>
        <Link href='/HomeScreens/SetUpProfilePage2' asChild>
          <TouchableOpacity>
            <AntDesign name="left" size={20} color="#0AE78A" style={styles.arrow} />
          </TouchableOpacity>
        </Link>
        <Text style={styles.txt}>Follow friends</Text>
      </View>
      <Text style={styles.text}>CONTACTS SHARING MUSIC</Text>
      {[
        { img: Ellipse23, name: "Elvis Frimpong Aboagye" },
        { img: Ellipse13, name: "Beatrice Owusuwaa" },
        { img: Ellipse14, name: "Ransford Appiah Enchill" },
        { img: Ellipse15, name: "Michael Ofosu Ampofo" },
        { img: Ellipse16, name: "Gladys Agyeman-Duah" },
        { img: Ellipse17, name: "Karikari Osei Ansah" },
        { img: Ellipse18, name: "Michael Yeboah Quaysel" },
        { img: Ellipse19, name: "Shadrack Acheampong" },
        { img: Ellipse20, name: "Samuella Antwi" },
        { img: Ellipse21, name: "Asiedu Kyei Baffour" },
        { img: Ellipse22, name: "Marvin Opoku Nti" },
        { img: Ellipse24, name: "Gabriel Ngemah Cudjoe" }
      ].map((contact, index) => (
        <View key={index} style={styles.InfContainer}>
          <Image source={contact.img} style={styles.Img} />
          <Text style={styles.newtext}>{contact.name}</Text>
          <Follow />
        </View>
      ))}
      <View>
        
      </View>
      </ScrollView>
      <Next />
    </View>
    
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  SetUpProfilePageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  arrow: {
    marginRight: 10,
    marginTop:10
  },
  txt: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop:60,
    right:27,
  },
  text: {
    fontSize: 12,
    color: '#807676',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  InfContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#4A4A4A',
  },
  Img: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  newtext: {
    fontSize: 12,
    color: '#ffffff',
    flex: 1,
    fontWeight: 'bold',
  },
});

export default SetUpProfilePage3;