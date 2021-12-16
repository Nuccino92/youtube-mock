import { useEffect, useState } from "react";
import { getChannelIcon } from "../../api/getChannelIcons";
import youtubePublishedAt from "../../utils/youtubePublishedAt";
import youtubeViewCount from "../../utils/youtubeViewCount";
import youtubeVideoDuration from "../../utils/youtubeVideoDuration";

const VideoCard = ({ info }) => {
  const [channelIcon, setChannelIcon] = useState(undefined);
  const { snippet } = info;
  const publishedAt = youtubePublishedAt(snippet.publishedAt);
  const viewCount = youtubeViewCount(parseFloat(info.statistics.viewCount));
  const duration = youtubeVideoDuration(info.contentDetails.duration);

  useEffect(() => {
    const getIcon = async () => {
      setChannelIcon(await getChannelIcon(snippet.channelId));
    };
    getIcon();
  }, [snippet]);

  return (
    <div className="video-card">
      <div>
        <img src={info.snippet.thumbnails.medium.url} alt="thumbnail"></img>
        <div className="video-card-duration">{duration}</div>
      </div>

      <div className="video-card-lower-container">
        <div className="channel-icon-container">
          <img src={channelIcon} alt="channel-icon" />
        </div>
        <div className="lower-container-info-container">
          <h3>{snippet.title}</h3>
          <div className="video-card-channel-title">{snippet.channelTitle}</div>
          <div className="video-card-count-date-container">
            <div>{viewCount} views</div>
            <div>&#8226; {publishedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
