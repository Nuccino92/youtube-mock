import { useEffect, useState } from "react";
import { getVideoInfo } from "../../../api/getVideoInfo";
import { Link } from "react-router-dom";
import youtubePublishedAt from "../../../utils/youtubePublishedAt";
import youtubeViewCount from "../../../utils/youtubeViewCount";
import youtubeVideoDuration from "../../../utils/youtubeVideoDuration";

const WatchScreenVideoCard = ({ info }) => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      setLoading(true);
      setVideoInfo(await getVideoInfo(info.id.videoId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    videoInfo.length !== 0 ? setLoading(false) : setLoading(true);
  }, [videoInfo]);

  const shortenTitle = () => {
    const array = [];
    const words = info.snippet.description.split(" ");
    for (let i = 0; i < 7; i++) {
      array.push(words[i], " ");
    }
    array.push("...");
    return array;
  };

  return loading ? (
    <div></div>
  ) : (
    <Link
      className="watch-screen-video-card"
      to={`/watch/${videoInfo[0].id}`}
      state={videoInfo[0]}
    >
      <div className="watch-screen-video-card-first-container">
        <img
          src={videoInfo[0].snippet.thumbnails.medium.url}
          alt="channel icon"
        />
        <div>{youtubeVideoDuration(videoInfo[0].contentDetails.duration)}</div>
      </div>
      <div className="watch-screen-video-card-second-container">
        <h4>{shortenTitle(videoInfo[0].snippet.title)}</h4>
        <h5>{videoInfo[0].snippet.channelTitle}</h5>
        <span>{youtubeViewCount(videoInfo[0].statistics.viewCount)} views</span>
        <span>
          {" "}
          &#8226; {youtubePublishedAt(videoInfo[0].snippet.publishedAt)}
        </span>
      </div>
    </Link>
  );
};

export default WatchScreenVideoCard;
