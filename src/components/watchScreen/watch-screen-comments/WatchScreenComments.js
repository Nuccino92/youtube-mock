import { useContext, useEffect, useState } from "react";
import Comments from "./Comment";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import { MdSort } from "react-icons/md";
import { AuthContext } from "../../../context/authContext";
import { getComments } from "../../../api/getComments";

const WatchScreenComments = ({ item, commentCount }) => {
  const [comments, setComments] = useState([]);

  const { snippet } = item;
  const { profile, online, logIn } = useContext(AuthContext);

  const handleClick = () => {
    return online ? null : logIn();
  };

  useEffect(() => {
    const getVideoComments = async () => {
      setComments(await getComments(item.id));
    };
    getVideoComments();
  }, [snippet, item.id]);

  return (
    <div className="watch-screen-comments">
      <div className="watch-screen-comments-upper-container">
        <span>{numberWithCommas(commentCount)} Comments </span>
        <span style={{ cursor: "pointer" }}>
          <MdSort className="watch-screen-comments-icon" /> SORT BY
        </span>
      </div>
      <div className="add-comment-container">
        <img
          src={
            online
              ? profile.photo
              : "https://firebasestorage.googleapis.com/v0/b/mock-e69d2.appspot.com/o/offline-add-comment.jpg?alt=media&token=5fd03e09-61f5-40c8-ba92-53971271ca2a"
          }
          alt="profile silhouette"
        ></img>
        <textarea
          onClick={handleClick}
          readOnly
          placeholder="Add a public comment..."
          className="add-comment-section"
        ></textarea>
      </div>
      {comments.map((comment, index) => {
        return <Comments info={comment} key={index} />;
      })}
    </div>
  );
};
export default WatchScreenComments;
