// firebaseStorage.js
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../Auth_Screens/firebase'; // Adjust the path based on your file structure

const getMusicUrls = async () => {
  try {
    console.log('Initializing Firebase Storage reference...');
    const listRef = ref(
      storage,
      'gs://playlix-a21e3.appspot.com/Playlix/PLAYLIX/Stonebwoy African Party Audio.mp3',
    ); // Folder where your music files are stored
    console.log('Fetching music list from Firebase Storage...');
    const result = await listAll(listRef);

    console.log('Music list fetched:', result.items);
    const urlPromises = result.items.map((itemRef) => getDownloadURL(itemRef));
    console.log('Fetching download URLs...');

    const urls = await Promise.all(urlPromises);
    console.log('Fetched music URLs:', urls);

    return urls;
  } catch (error) {
    console.error('Error fetching music URLs:', error);
    return [];
  }
};

export { getMusicUrls };
