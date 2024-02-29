export async function fetchPost() {
  const response = await fetch("http://localhost:3000/posts").then((res) =>
    res.json()
  );

  return response;
}

export async function fetchPostById(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`).then(
    (res) => res.json()
  );

  return response;
}

export async function createPost(newPost) {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  }).then((res) => res.json());
  return response;
}

export async function updatePost(updatedPost) {
  const response = await fetch(
    `http://localhost:3000/posts/${updatedPost.id}`,
    {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    }
  ).then((res) => res.json());
  return response;
}

export async function deletePost(id) {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
