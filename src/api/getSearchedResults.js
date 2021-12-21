import { request } from "./request";

export const getSearchResults = async (input) => {
  const response = await request("/search", {
    params: {
      part: "snippet",
      q: input,
      type: "video",
      RegionCode: "CA",
      maxResults: 10,
    },
  }).catch((err) => {
    console.log(err.message);
  });
  console.log(response.data.items);
  return response.data.items;
};
