import youtubeViewCount from "../../../utils/youtubeViewCount";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import { getDate } from "../../../utils/getDate";
import { BiLike, BiDislike } from "react-icons/bi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { RiPlayListAddFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const WatchScreenVideoContainer = ({ state, channelIcon, channelSubs }) => {
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
          <div>{viewCount}</div>
          <div>&#8226;{publishedAt}</div>
        </div>
        <div className="watch-screen-video-stats-container-right">
          <div>
            {" "}
            <BiLike />
            {likeCount}
          </div>
          <div>
            <BiDislike />
            {dislikeCount}
          </div>
          <div>
            <TiArrowForwardOutline />
            share
          </div>
          <div>
            <RiPlayListAddFill />
            save
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
      </div>

      <div className="watch-screen-video-channel-container">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default WatchScreenVideoContainer;
