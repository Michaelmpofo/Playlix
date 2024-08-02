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
import LeftHeader from '../components/LeftHeader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Playbutton from '../components/Playbutton';
import ShuffleButton from '../components/ShuffleButton';
import TrackListButton from '../components/TrackListButton';
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
            headerLeft: () => <LeftHeader text="Back" navigation={'/(tabs)/search'} />,
            headerStyle: { backgroundColor: '#000000' },
            headerShown: true,
          }}
        />

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/searchimages/Audio.jpeg')}
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
                source={require('../assets/images/SongsAlbum/StoneBwoy2.jpg')}
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
                source={require('../assets/images/SongsAlbum/Davido2.jpg')}
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
                source={require('../assets/images/SongsAlbum/Stonebwoy.jpg')}
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

          <HomeMadeForYouCardList />
          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../assets/images/SongsAlbum/CT.jpg')}
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
                source={require('../assets/images/SongsAlbum/Shatta.jpg')}
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
                source={require('../assets/images/SongsAlbum/Kinaata.jpg')}
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
                source={require('../assets/images/SongsAlbum/ArthurKwasi.jpg')}
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
                source={require('../assets/images/SongsAlbum/KilosMilos.jpg')}
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
          <EntertainmentCardList />

          <Link href="/trackPlayerScreen" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <FontAwesome name="star" size={15} color="#0AE78A" />
              <Image
                source={require('../assets/images/SongsAlbum/Adel2.jpg')}
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
                source={require('../assets/images/SongsAlbum/Sark.jpg')}
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
    marginBottom: 10, // Optional: Add spacing between items if needed
  },
  albumImage1: {
    width: 155,
    height: 160,
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
  textIconstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#302F2F',
    borderBottomWidth: 1,
    flex: 1,
  },

  textImageStyle: {
    marginLeft: 20,
    flexDirection: 'column',
    flex: 1,
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
