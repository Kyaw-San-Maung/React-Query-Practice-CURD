import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, fetchPostById, updatePost } from "../api/posts";

export const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPostById(id),
  });

  //mutation
  const queryClient = useQueryClient();
  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });

  if (isLoading) return "Loading...";
  if (isError) return `Error: ${error.message}`;

  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({ id, ...updatedPost });
  };
  return (
    <div>
      <PostForm onSubmit={handleSubmit} initialiValue={data} />
    </div>
  );
};
