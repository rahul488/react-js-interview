import { useEffect, useState } from "react";
import "./Post.css";
import useFetch from "../../hooks/useFetch";
import { getPost } from "../../constants/constant";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
const Post = () => {
  const [page, setPage] = useState(0);
  const { data = {}, loading } = useFetch(getPost(10 * page));
  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="post-container">
        {data?.posts?.map((post, index) => (
          <div className="card" key={post.id}>
            <div className="post-title">
              <p>{post.title}</p>
            </div>
            <div className="post-desc">
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
      {data ? (
        <div className="pagination">
          <Pagination
            total={data?.total}
            limit={10}
            currPage={data?.skip}
            setPage={(index) => setPage(index)}
          />
        </div>
      ) : null}
    </>
  );
};
export default Post;
