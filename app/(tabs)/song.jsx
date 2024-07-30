import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import { Fontisto, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import SongScreenHeaderLeft from '../../components/SongScreenHeaderLeft';
import Playbutton from '../../components/Playbutton';
import ShuffleButton from '../../components/ShuffleButton';
import { Link } from 'expo-router';
import NowPlayingBar from '../../components/NowPlayingBar';




const song = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.songScreenContainer}>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerTitle: 'Songs',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              color: '#0AE78A',
              fontSize: 35,
            },
            headerShadowVisible: false,
          }}
        />
        <SongScreenSearchComponent text={'   Find in Songs'} />
        <View style={styles.playButtonContainer}>
          <Playbutton />
          <ShuffleButton />
        </View>

        <ScrollView>
          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/songscreenimages/black-sherif-kilos-milos-scaled.jpg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
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
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
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
                source={require('../../assets/images/songscreenimages/Stonebwoy_overlord.jpeg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
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
                source={require('../../assets/images/songscreenimages/skelewu.jpg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
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
                source={require('../../assets/images/AnlogaAlbum.jpeg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
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
                source={require('../../assets/images/CindyThompson.jpeg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
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
                source={require('../../assets/images/songscreenimages/ShattaWale_Cover_.png')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>
                    Prove you wrong (Prod by Shatta wale)
                  </Text>
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
                source={require('../../assets/images/songscreenimages/Kofi-Kinaata.jpg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
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
                source={require('../../assets/images/songscreenimages/KwesiArthur.jpg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Pray for Me</Text>
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
                source={require('../../assets/images/songscreenimages/black-sherif2.jpg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>January 9th</Text>
                  <Text style={styles.albumYear}>black sherif</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/songscreenimages/Popcaan.jpg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Family</Text>
                  <Text style={styles.albumYear}>Popcaan</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../../assets/images/songscreenimages/ObidiHova.jpg')}
                style={styles.album1Image}
              />
              <View style={styles.textIconStyle}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>Otan</Text>
                  <Text style={styles.albumYear}>Sarkodie</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>
        </ScrollView>
      </View>
      <NowPlayingBar />
    </GestureHandlerRootView>
  );
};

export default song;

const styles = StyleSheet.create({
  songScreenContainer: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  playButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  albumImage: {
    width: 180,
    height: 180,
    marginTop: 30,
    marginBottom: 20,
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
    justifyContent: 'center',
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
  textIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#302F2F',
    marginLeft: 10,
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
