import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "../api/posts";
import { useNavigate, useParams } from "react-router-dom";

export const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPostById(id),
  });

  console.log(data);

  if (isLoading) return <h2>Loading....</h2>;
  if (isError) return <p>{JSON.stringify(error.message)}</p>;

  return (
    <>
      <button onClick={() => navigate("/")}>Back To List</button>
      <div key={data.id}>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    </>
  );
};
