import youtubePublishedAt from "../../utils/youtubePublishedAt";
import youtubeViewCount from "../../utils/youtubeViewCount";
import { getChannelIcon } from "../../api/getChannelIcons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVideoInfo } from "../../api/getVideoInfo";

const SearchCard = ({ info }) => {
  const [channelIcon, setChannelIcon] = useState(undefined);
  const [videoInfo, setVideoInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadVideos = async () => {
    try {
      setLoading(true);
      setChannelIcon(await getChannelIcon(info.snippet.channelId));
      setVideoInfo(await getVideoInfo(info.id.videoId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    videoInfo.length !== 0 ? setLoading(false) : setLoading(true);
  }, [videoInfo]);

  const shortenDescription = () => {
    const array = [];
    const words = videoInfo[0].snippet.description.split(" ");
    for (let i = 0; i < 18; i++) {
      array.push(words[i], " ");
    }
    array.push("...");
    return array;
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Link to={`/watch/${videoInfo[0].id.videoId}`} state={videoInfo[0]}>
      <div className="search-screen-card">
        <div className="search-screen-thumbnail-container">
          <img
            src={videoInfo[0].snippet.thumbnails.medium.url}
            alt="video-thumbnail"
          />
        </div>

        <div className="search-screen-card-info-container">
          <h2>{videoInfo[0].snippet.localized.title}</h2>
          <span>
            {youtubeViewCount(videoInfo[0].statistics.viewCount)} views &#8226;{" "}
          </span>
          <span> {youtubePublishedAt(videoInfo[0].snippet.publishedAt)}</span>
          <div className="search-screen-card-channel-container">
            <img src={channelIcon} alt="channel-icon" />
            <div>{videoInfo[0].snippet.channelTitle}</div>
          </div>
          <div className="search-screen-card-description">
            {shortenDescription()}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SearchCard;
