import VideoCard from "../video-card/VideoCard";
import { getPopularVideos, getPopVids } from "../../api/getVideos";
// import { useEffect, useState } from "react";

const Homepage = () => {
  // const [popularVideos, setPopularVideos] = useState([]);
  const { items } = getPopVids.data;

  // useEffect(() => {
  //   const getVideos = async () => {
  //     setPopularVideos(await getPopularVideos());
  //   };
  //   getVideos();
  // }, []);

  return (
    <div className="homepage">
      {items.map((item, index) => {
        return <VideoCard info={item} key={index} />;
      })}
    </div>
  );
};
export default Homepage;
