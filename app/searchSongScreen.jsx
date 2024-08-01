import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import HomeMadeForYou from '../components/HomeMadeForYou';
import LeftHeader from '../components/LeftHeader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SongScreenSearchComponent from '../components/SongScreenSearchComponent';
import Playbutton from '../components/Playbutton';
import ShuffleButton from '../components/ShuffleButton';
import TrackListButton from '../components/TrackListButton';
import CardList from '../components/CardList';
import FansLikeCardList from '../components/FansLikeCardList';
import { Link } from 'expo-router';
import { Fontisto, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import HomeMadeForYouCardList from '../components/HomeMadeForYouCardList';
import EntertainmentCardList from '../components/EntertainmentCardList';



const searchSongScreen = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.searchSongScreenContainer}>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerLeft: () => <LeftHeader text="Back" navigation={'/(tabs)'} />,
            headerStyle: { backgroundColor: '#000000' },
            headerShown: true,
          }}
        />

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/AnlogaAlbum.jpeg')}
            style={styles.albumImage1}
          />
        </View>

        <View style={styles.songButtonContainer}>
          <Playbutton />
          <ShuffleButton />
        </View>

        <ScrollView>
          <FansLikeCardList />
          <TrackListButton />

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../assets/images/songscreenimages/Stonebwoy_overlord.jpeg')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
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
                source={require('../assets/images/songscreenimages/skelewu.jpg')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
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
                source={require('../assets/images/AnlogaAlbum.jpeg')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>African Party</Text>
                  <Text style={styles.albumYear}>Stonebwoy</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>

          <HomeMadeForYouCardList />
          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../assets/images/CindyThompson.jpeg')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
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
                source={require('../assets/images/songscreenimages/ShattaWale_Cover_.png')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
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
                source={require('../assets/images/songscreenimages/Kofi-Kinaata.jpg')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
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
                source={require('../assets/images/songscreenimages/KwesiArthur.jpg')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
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
                source={require('../assets/images/songscreenimages/black-sherif2.jpg')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
                <View style={styles.textImageStyle}>
                  <Text style={styles.albumTitle}>January 9th</Text>
                  <Text style={styles.albumYear}>black sherif</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </Link>
          <EntertainmentCardList />

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../assets/images/songscreenimages/Popcaan.jpg')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
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
                source={require('../assets/images/songscreenimages/ObidiHova.jpg')}
                style={styles.trackAlbumImage1}
              />
              <View style={styles.textIconStyle2}>
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
    </GestureHandlerRootView>
  );
};

export default searchSongScreen;
const styles = StyleSheet.create({
  searchSongScreenContainer: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#000',
  },
  songButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    marginBottom: 20,
  },
  searchStyle: {
    padding: 13,
  },
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumImage1: {
    width: 230,
    height: 200,
    marginTop: 10,
    marginLeft: 20,
  },
  albumImage: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 10,
  },
  trackAlbumImage: {
    width: 180,
    height: 180,
    marginTop: 30,
    marginBottom: 20,
  },
  trackAlbumImage1: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
  },
  textIconstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#302F2F',
    borderBottomWidth: 1,
  },
  textIconStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#302F2F',
    marginLeft: 10,
  },

  textImageStyle: {
    marginLeft: 20,
    marginRight: 120,
    marginTop: 20,
    flexDirection: 'column',
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
