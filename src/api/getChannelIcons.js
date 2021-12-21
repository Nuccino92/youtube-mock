import { request } from "./request";

export const getChannelIcon = async (channelId) => {
  const channelIcon = await request("/channels", {
    params: {
      part: "snippet",
      id: channelId,
    },
  }).catch((err) => {
    console.log(err.message);
  });
  return channelIcon.data.items[0].snippet.thumbnails.default.url;
};
