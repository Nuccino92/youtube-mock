import VideoCard from "../VideoCard";
import { getPopularVideos, getPopVids } from "../../api/getVideos";

const Homepage = () => {
  const { items } = getPopVids.data;

  return (
    <div className="homepage">
      {items.map((item, index) => {
        return <VideoCard info={item} key={index} />;
      })}
    </div>
  );
};
export default Homepage;
