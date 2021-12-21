import { request } from "./request";

export const getRelatedVideos = async (id) => {
  const response = await request("/search", {
    params: {
      part: "snippet",
      relatedToVideoId: id,
      type: "video",
      RegionCode: "CA",
      maxResults: 10,
    },
  }).catch((err) => {
    console.log(err.message);
  });

  return response.data.items;
};
