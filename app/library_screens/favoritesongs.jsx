import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Fontisto, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
import Playbutton from '../../components/Playbutton';
import ShuffleButton from '../../components/ShuffleButton';
import { Link } from 'expo-router';

const favoritesongs = () => {
  return (
    <View style={styles.playListContainer}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => (
            <LeftHeader navigation={'/library_screens/playList'} />
          ),
          headerRight: () => <RightHeader />,
          headerStyle: { backgroundColor: '#000000' },
          headerShown: true,
        }}
      />
      <Image
        source={require('../../assets/images/FavoriteSongs.jpeg')}
        style={styles.albumImageA}
      />
      <View style={styles.textContainer}>
        <View style={styles.text1Container}>
          <Text style={styles.text1style}>Favourite Songs</Text>
          <Fontisto name="star" size={18} color="#0AE78A" />
        </View>
        <View style={styles.text2Container}>
          <Text style={styles.text2style}>Michael Ofosu Ampofo</Text>
        </View>
        <View style={styles.text3Container}>
          <Text style={styles.text3style}>Updated 21hr ago</Text>
        </View>
      </View>
      <View style={styles.songButtonContainer}>
        <Playbutton />
        <View style={styles.buttonSpacer} />
        <ShuffleButton />
      </View>
      <GestureHandlerRootView>
      <ScrollView>
      <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/songscreenimages/black-sherif-kilos-milos-scaled.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Kilos Milos</Text>
                  <Text style={styles.albumYear}>Black Sherif</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/songscreenimages/KingPromise.jpeg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Favorite Story</Text>
                  <Text style={styles.albumYear}>
                    King Promise x Sarkodie X Olive the Boy
                  </Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/StoneBwoy2.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Overlord</Text>
                  <Text style={styles.albumYear}>Stonebwoy</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>


          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/Davido2.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Skelewu</Text>
                  <Text style={styles.albumYear}>Davido</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/Stonebwoy.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>African Party</Text>
                  <Text style={styles.albumYear}>Stonebwoy</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/CT.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Gospel</Text>
                  <Text style={styles.albumYear}>Cindy Thompson</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/Shatta.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>
                    1 Don
                  </Text>
                  <Text style={styles.albumYear}>Shatta Wale</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/Kinaata.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Things Fall Apart</Text>
                  <Text style={styles.albumYear}>Kofi Kinaata</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/Arthur Kwasi.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Porpi</Text>
                  <Text style={styles.albumYear}>Kwesi Arthur</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/KilosMilos.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>January 9th</Text>
                  <Text style={styles.albumYear}>Black Sherif</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/Adel2.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Hello</Text>
                  <Text style={styles.albumYear}>Adele</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/SongsAlbum/Sark.jpg')}
                style={styles.albumImage}
              />
              <View style={styles.textIconstyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Otan</Text>
                  <Text style={styles.albumYear}>Sarkodie</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>
        </ScrollView>
        </GestureHandlerRootView>

    </View>
  );
};

export default favoritesongs;
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  albumImageA: {
    width: 180,
    height: 180,
    marginTop: 30,
    marginBottom: 20,
  },
  albumImage: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 10,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  text1Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text2Container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  text3Container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text1style: {
    fontSize: 30,
    color: '#FFFFFFFF',
    marginLeft: 20,
  },
  text2style: {
    fontSize: 20,
    color: '#0AE78A',
    marginLeft: 10,
  },
  text3style: {
    fontSize: 13,
    color: '#484848',
    marginLeft: 5,
  },
  songButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Adjusted to reduce space
   justifyContent:'center'
  },
  buttonSpacer: {
    width: 10, // Adjust as needed for desired spacing
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Adjusted to reduce space
  },
  album1Image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
  },
  textIconstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#302F2F',
    marginLeft: 5,
  },
  textImageStyle: {
    marginRight: 20,
  },
  albumTitle: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  albumYear: {
    fontSize: 13,
    color: '#6D6A6A',
    marginBottom: 5,
  },

});
