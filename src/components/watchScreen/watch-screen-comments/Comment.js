import { BiLike, BiDislike } from "react-icons/bi";
import youtubeViewCount from "../../../utils/youtubeViewCount";
import youtubePublishedAt from "../../../utils/youtubePublishedAt";

const Comments = ({ info }) => {
  const { snippet } = info;
  const { topLevelComment } = snippet;
  const likeCount = youtubeViewCount(topLevelComment.snippet.likeCount);
  const publishedAt = youtubePublishedAt(topLevelComment.snippet.publishedAt);

  return (
    <div className="comments">
      <img
        src={topLevelComment.snippet.authorProfileImageUrl}
        alt="commentors profile"
      ></img>
      <div className="comments-info-container">
        <div style={{ display: "flex" }}>
          <h4>{topLevelComment.snippet.authorDisplayName}</h4>
          <span>{publishedAt}</span>{" "}
        </div>
        <div className="comments-comment">
          {topLevelComment.snippet.textDisplay}
        </div>
        <span>
          <BiLike className="comment-icon" />{" "}
          {likeCount === 0 ? null : likeCount}
        </span>
        <span>
          <BiDislike className="comment-icon" />
        </span>
        <span>REPLY</span>
      </div>
    </div>
  );
};
export default Comments;
