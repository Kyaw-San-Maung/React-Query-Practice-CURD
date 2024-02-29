import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostForm from "./PostForm";
import { createPost } from "../api/posts";
import uuid from "react-uuid";

const AddPost = () => {
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  const handleAddPost = (post) => {
    createPostMutation.mutate({
      id: uuid(),
      ...post,
    });
  };
  return (
    <div>
      <h2>Add New Post</h2>
      <PostForm onSubmit={handleAddPost} initialiValue={{}} />
    </div>
  );
};

export default AddPost;
