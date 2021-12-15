import VideoCard from "../video-card/VideoCard";
import { getPopularVideos, getPopVids } from "../../api/getVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log(homeVideos);
  });

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
          return <VideoCard info={item} key={index} />;
        })}
      </InfiniteScroll>
    </div>
  );
};
export default Homepage;
