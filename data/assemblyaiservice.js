import axios from 'axios';

const API_KEY = '7c390e58198e41a5bfa4d72e53a7b1e5';

export const uploadAudio = async (uri) => {
  try {
    const formData = new FormData();
    formData.append('file', {
      uri: uri,
      type: 'audio/wav', // or the correct type for your file
      name: 'audiofile.wav', // Ensure this matches the file type
    });

    const response = await axios.post(
      'https://api.assemblyai.com/v2/upload',
      formData,
      {
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data.upload_url; // Return the URL for transcription
  } catch (error) {
    console.error('Failed to upload audio:', error);
    throw error; // Handle error appropriately in your app
  }
};

export const transcribeAudio = async (audioUrl) => {
  try {
    const response = await axios.post(
      'https://api.assemblyai.com/v2/transcript',
      {
        audio_url: audioUrl,
      },
      {
        headers: {
          Authorization: API_KEY,
        },
      },
    );
    return response.data.id; // Return the transcript ID to poll for status
  } catch (error) {
    console.error('Failed to transcribe audio:', error);
    throw error; // Handle error appropriately in your app
  }
};

export const checkTranscriptionStatus = async (transcriptId) => {
  try {
    const response = await axios.get(
      `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
      {
        headers: {
          Authorization: API_KEY,
        },
      },
    );
    return response.data; // Return the transcription status and result
  } catch (error) {
    console.error('Failed to check transcription status:', error);
    throw error; // Handle error appropriately in your app
  }
};
