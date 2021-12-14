//stackoverflow.com/questions/22148885/converting-youtube-data-api-v3-video-duration-format-to-seconds-in-javascript-no/30134889#30134889

const youtubeVideoDuration = (duration) => {
  let match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  match = match.slice(1).map((x) => {
    if (x != null) {
      return x.replace(/\D/, "");
    }
    return false;
  });

  let hours = parseInt(match[0]) || 0;
  let minutes = parseInt(match[1]) || 0;
  let seconds = parseInt(match[2]) || 0;

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  let hr = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let min = Math.floor(totalSeconds / 60);
  let sec = totalSeconds % 60;

  min = String(min).padStart(2, "0");

  sec = String(sec).padStart(2, "0");

  return hr === 0
    ? String(parseInt(min)) + ":" + sec
    : String(parseInt(hr)) + ":" + min + ":" + sec;
};
export default youtubeVideoDuration;
