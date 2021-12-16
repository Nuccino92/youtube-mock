import { request } from "./request";

export const getChannelSubs = async (channelId) => {
  const channelSubs = await request("/channels", {
    params: {
      part: "statistics",
      id: channelId,
    },
  }).catch((err) => {
    console.log(err.message);
  });
  return channelSubs.data.items[0].statistics.subscriberCount;
};
