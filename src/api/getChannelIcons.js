import { request } from "./request";

export const getChannelIcon = async (channelId) => {
  //   const channelIcon = await request("/channels", {
  //     params: {
  //       part: "snippet",
  //       id: channelId,
  //     },
  //   }).catch((err) => {
  //     console.log(err.message);
  //   });
  //   return channelIcon.data.items[0].snippet.thumbnails.default.url;
  return `https://yt3.ggpht.com/DbDvgeVOlsICg7uTvhxj7goKnHRVb7gmfXFTYh76tUHn7FfdjjXFpOTq2pwutqtdQ-Yy6YmENQ=s88-c-k-c0x00ffffff-no-rj`;
};
