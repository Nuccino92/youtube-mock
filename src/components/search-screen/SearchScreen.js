import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SearchCard from "./SearchCard";
import { CgFormatLineHeight } from "react-icons/cg";
import InfiniteScroll from "react-infinite-scroll-component";
import { getSearchResults } from "../../api/getSearchedResults";

const SearchScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { input } = useParams();

  const getVids = async () => {
    const moreVideos = await getSearchResults(input);
    setSearchResults((prev) => [...prev, ...moreVideos]);
  };

  useEffect(() => {
    const getResults = async () => {
      setSearchResults(await getSearchResults(input));
    };
    getResults();
  }, [input]);

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
