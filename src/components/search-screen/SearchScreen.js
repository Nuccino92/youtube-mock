import { useEffect, useState } from "react";
import { getPopVids } from "../../api/getPopularVideos";
import SearchCard from "./SearchCard";
import { CgFormatLineHeight } from "react-icons/cg";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchScreen = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(getPopVids.data.items);
  }, []);

  const getVids = async () => {
    const items = getPopVids.data.items;
    setSearchResults((prev) => [...prev, ...items]);
  };

  return (
    <div className="search-screen" id="scrollableSearch">
      <div className="search-screen-filter-container">
        <CgFormatLineHeight className="search-screen-icon" />
        FILTERS
      </div>
      <InfiniteScroll
        className="search-screen-scroll"
        dataLength={searchResults.length}
        next={getVids}
        hasMore={true}
        scrollableTarget="scrollableSearch"
        scrollThreshold={0.92}
      >
        {searchResults.map((info, index) => {
          return <SearchCard info={info} key={index} />;
        })}
      </InfiniteScroll>
    </div>
  );
};
export default SearchScreen;
