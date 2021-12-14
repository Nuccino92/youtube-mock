//https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900

const youtubeViewCount = (count) => {
  if (count >= 1000000000) {
    return (count / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (count >= 1000) {
    return (count / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return count;
};

export default youtubeViewCount;
