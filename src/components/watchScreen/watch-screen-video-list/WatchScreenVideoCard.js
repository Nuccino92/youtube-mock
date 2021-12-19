import { useEffect, useState } from "react";
import { getVideoInfo } from "../../../api/getRelatedVideos";
import { Link } from "react-router-dom";
import youtubePublishedAt from "../../../utils/youtubePublishedAt";
import youtubeViewCount from "../../../utils/youtubeViewCount";
import youtubeVideoDuration from "../../../utils/youtubeVideoDuration";

const WatchScreenVideoCard = ({ info }) => {
  const [videoInfo, setVideoInfo] = useState([]);
  //   const { snippet } = videoInfo;
  //   const { statistics } = videoInfo;
  //   const { statistics } = videoInfo;
  const { snippet } = info;
  const { statistics } = info;
  const { contentDetails } = info;

  useEffect(() => {
    const getInfo = async () => {
      //   setVideoInfo(await getVideoInfo(info.id.videoId));
      setVideoInfo(info);
    };
    getInfo();
  }, [info]);

  return (
    <Link
      className="watch-screen-video-card"
      to={`/watch/${videoInfo.id}`}
      state={videoInfo}
    >
      <div className="watch-screen-video-card-first-container">
        <img src={snippet.thumbnails.default.url} alt="channel icon" />
        <div>{youtubeVideoDuration(contentDetails.duration)}</div>
      </div>
      <div className="watch-screen-video-card-second-container">
        <h4>{snippet.title}</h4>
        <h5>{snippet.channelTitle}</h5>
        <span>{youtubeViewCount(statistics.viewCount)} views </span>
        <span> &#8226; {youtubePublishedAt(snippet.publishedAt)}</span>
      </div>
    </Link>
  );
};

export default WatchScreenVideoCard;
