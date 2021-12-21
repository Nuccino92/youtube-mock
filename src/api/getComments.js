import { request } from "./request";

export const getComments = async (id) => {
  const response = await request("/commentThreads", {
    params: {
      part: "snippet",
      videoId: id,
      order: "relevance",
    },
  }).catch((err) => {
    console.log(err.message);
  });
  return response.data.items;
};
