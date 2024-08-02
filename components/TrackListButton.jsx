import { View, Text ,StyleSheet,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const TrackListButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.buttonStyle}>
          <View style={styles.iconStyle}>
            <FontAwesome name="star" size={15} color="#0AE78A" />
          </View>

          <Image
            source={require('../assets/images/AnlogaAlbum.jpeg')}
            style={styles.albumImage}
          />

          <View style={styles.textIconstyle}>
            <View style={styles.textImageStyle}>
              <Text style={styles.albumTitle}>African Party</Text>
              <Text style={styles.albumYear}>Stonebwoy</Text>
            </View>
            <View>
              <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Link href="/trackPlayerScreen" asChild>
        <TouchableOpacity style={styles.buttonStyle}>
          <FontAwesome name="star" size={15} color="#0AE78A" />
          <Image
            source={require('../assets/images/songscreenimages/black-sherif-kilos-milos-scaled.jpg')}
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
            source={require('../assets/images/songscreenimages/KingPromise.jpeg')}
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
              <Text style={styles.albumTitle}>1 Don</Text>
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
    </View>
  );
};

export default TrackListButton;
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 5,
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: 20,
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
    justifyContent: 'space-between',
  },
  textImageStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
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
  text1style: {
    marginBottom: 8,
    fontSize: 30,
    color: '#FFFFFF',
    marginLeft: 20,
  },
  iconDotsStyle: {
    marginTop: 20,
    marginRight: 20,
  },
});