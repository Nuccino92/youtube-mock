import axios from "axios";

export const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY,
  },
});
