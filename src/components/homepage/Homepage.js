import VideoCard from "../video-card/VideoCard";
import { getPopularVideos, getPopVids } from "../../api/getVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { items } = getPopVids.data;
  const [homeVideos, setHomeVideos] = useState([]);

  useEffect(() => {
    setHomeVideos(items);
  }, []);

  const getVids = async () => {
    // let moreVideos = await getPopularVideos();
    setHomeVideos((prev) => [...prev, ...items]);
  };

  return (
    <div className="homepage" id="scrollableDiv">
      <InfiniteScroll
        className="homepage"
        dataLength={homeVideos.length}
        next={getVids}
        hasMore={true}
        scrollableTarget="scrollableDiv"
        scrollThreshold={0.92}
      >
        {homeVideos.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/watch/${item.id}`}
              state={item}
              className="video-card-link"
            >
              <VideoCard info={item} key={index} />
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};
export default Homepage;
