import VideoCard from "../video-card/VideoCard";
import { getPopularVideos } from "../../api/getPopularVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [homeVideos, setHomeVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      setHomeVideos(await getPopularVideos());
    };

    loadVideos();
  }, []);

  const getVids = async () => {
    let moreVideos = await getPopularVideos();
    setHomeVideos((prev) => [...prev, ...moreVideos]);
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
        style={{
          border: "none",
        }}
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
