import youtubeViewCount from "../../../utils/youtubeViewCount";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import { getDate } from "../../../utils/getDate";
import { BiLike, BiDislike } from "react-icons/bi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { RiPlayListAddFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

const WatchScreenVideoContainer = ({ state, channelIcon, channelSubs }) => {
  const [showMore, setShowMore] = useState(false);

  const { snippet } = state;
  const { statistics } = state;

  const likeCount = youtubeViewCount(statistics.likeCount);
  const dislikeCount = youtubeViewCount(statistics.dislikeCount);
  const subCount = youtubeViewCount(channelSubs);
  const viewCount = numberWithCommas(statistics.viewCount);
  const publishedAt = getDate(snippet.publishedAt);

  return (
    <div className="watch-screen-video-container">
      <div className="watch-screen-iframe-container">
        <iframe
          src={`https://www.youtube.com/embed/${state.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2>{snippet.title}</h2>

      <div className="watch-screen-video-stats-container">
        <div className="watch-screen-video-stats-container-left">
          <span>{viewCount} views </span>
          <span>&#8226; {publishedAt}</span>
        </div>
        <div className="watch-screen-video-stats-container-right">
          <span title="i like this">
            <BiLike className="watch-screen-icons" />
            {likeCount}
          </span>
          <span title="i dislike this">
            <BiDislike className="watch-screen-icons" />
            {dislikeCount}
          </span>
          <span title="Share">
            <TiArrowForwardOutline className="watch-screen-icons" />
            SHARE
          </span>
          <span title="Save">
            <RiPlayListAddFill className="watch-screen-icons" />
            SAVE
          </span>
          <span>
            <BsThreeDots className="watch-screen-icons" />
          </span>
        </div>
      </div>

      <div
        className={
          showMore
            ? "watch-screen-video-channel-container read-more"
            : "watch-screen-video-channel-container"
        }
      >
        <img src={channelIcon} alt="watch-screen-channel-icon"></img>
        <div className="watch-screen-video-channel-stats-inner">
          <button>SUBSCRIBE</button>
          <div
            className="watch-screen-channel-title"
            title={snippet.channelTitle}
          >
            {snippet.channelTitle}
          </div>
          <div className="watch-screen-channel-subcount">
            {subCount} subscribers
          </div>
          <div className="watch-screen-description-container">
            <div>{snippet.description}</div>
            <div
              className="show-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "SHOW LESS" : "SHOW MORE"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchScreenVideoContainer;
