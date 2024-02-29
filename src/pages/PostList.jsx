import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AddPost from "../components/AddPost";
import { deletePost, fetchPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

export const PostList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  //Mutation for Delete operation
  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleDeletePost = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <h2>Loading....</h2>;
  if (isError) return `Error: ${error.message}`;

  return (
    <div>
      <AddPost />
      {data.map((post) => (
        <div
          key={post.id}
          style={{
            background: "#777",

            margin: "20px 25px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{ padding: "15px" }}
            onClick={() => navigate(`/post/${post.id}`)}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
          <div style={{ padding: "15px" }}>
            <button
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => navigate(`/post/${post.id}/edit`)}
            >
              Edit
            </button>
            <button
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => handleDeletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
