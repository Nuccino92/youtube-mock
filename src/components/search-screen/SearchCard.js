import youtubePublishedAt from "../../utils/youtubePublishedAt";
import youtubeViewCount from "../../utils/youtubeViewCount";
import { getChannelIcon } from "../../api/getChannelIcons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ info }) => {
  const [channelIcon, setChannelIcon] = useState(undefined);
  const { snippet } = info;
  const { statistics } = info;

  useEffect(() => {
    const getIcon = async () => {
      setChannelIcon(await getChannelIcon(snippet.channelId));
    };
    getIcon();
  }, [snippet]);

  const shortenDescription = () => {
    const array = [];
    const words = snippet.description.split(" ");
    for (let i = 0; i < 18; i++) {
      array.push(words[i], " ");
    }
    array.push("...");
    return array;
  };

  console.log(info);

  return (
    <Link to={`/watch/${info.id}`} state={info}>
      <div className="search-screen-card">
        <div className="search-screen-thumbnail-container">
          <img src={snippet.thumbnails.medium.url} alt="video-thumbnail" />
        </div>

        <div className="search-screen-card-info-container">
          <h2>{snippet.localized.title}</h2>
          <span>{youtubeViewCount(statistics.viewCount)} &#8226; </span>
          <span> {youtubePublishedAt(snippet.publishedAt)}</span>
          <div className="search-screen-card-channel-container">
            <img src={channelIcon} alt="channel-icon" />
            <div>{snippet.channelTitle}</div>
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
