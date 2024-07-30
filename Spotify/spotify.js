import * as AuthSession from 'expo-auth-session';
import axios from 'axios';

const CLIENT_ID = 'a9b189652dcc4b828e28bdfca196d00d'; // Replace with your Spotify Client ID
const CLIENT_SECRET = '4d5077423f544e2e881fea5748d1a604'; // Replace with your Spotify Client Secret
const REDIRECT_URI = AuthSession.makeRedirectUri({
  useProxy: true,
});
const SCOPES = [
  'user-library-read',
  'user-read-private',
  'user-read-email',
  'playlist-read-private',
];
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

let accessToken = null;

export async function authenticate() {
  const authUrl = `${AUTH_ENDPOINT}?response_type=code&client_id=${CLIENT_ID}&scope=${SCOPES.join(
    '%20',
  )}&redirect_uri=${REDIRECT_URI}`;

  try {
    const result = await AuthSession.startAsync({
      authUrl,
    });

    if (result.type === 'success' && result.params.code) {
      const response = await axios.post(
        TOKEN_ENDPOINT,
        new URLSearchParams({
          grant_type: 'authorization_code',
          code: result.params.code,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      accessToken = response.data.access_token;
      return accessToken;
    }

    throw new Error('Authentication failed');
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
}

export async function fetchNewReleases() {
  if (!accessToken)
    throw new Error('No access token, please authenticate first');

  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/browse/new-releases',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data.albums.items;
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    throw error;
  }
}
