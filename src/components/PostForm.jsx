import { useState } from "react";

const PostForm = ({ onSubmit, initialiValue }) => {
  const [post, setPost] = useState({
    title: initialiValue.title || "", //I don't know why am i getting error in this part.
    body: initialiValue.body || "", // I don't know why am i getting error in this part.
  });

  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const renderField = (label) => {
    return (
      <div>
        <label>{label}</label>
        <input
          type="text"
          onChange={handleChangeInput}
          name={label.toLowerCase()}
          value={post[label.toLowerCase()]}
        />
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {renderField("Title")}
        {renderField("Body")}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PostForm;
