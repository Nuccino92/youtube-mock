import { request } from "./request";

export const getPopularVideos = async () => {
  const response = await request("/videos", {
    params: {
      part: "snippet, contentDetails, statistics",
      chart: "mostPopular",
      RegionCode: "CA",
      maxResults: 20,
      pageToken: "",
    },
  }).catch((err) => {
    console.log(err.message);
  });
  return response.data.items;
};
