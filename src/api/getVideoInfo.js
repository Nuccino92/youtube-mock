import { request } from "./request";

export const getVideoInfo = async (id) => {
  const response = await request("/videos", {
    params: {
      part: "snippet, contentDetails, statistics",
      id: id,
      type: "video",
      RegionCode: "CA",
      pageToken: "",
    },
  }).catch((err) => {
    console.log(err.message);
  });
  return response.data.items;
};
