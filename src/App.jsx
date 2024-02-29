import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PostList } from "./pages/PostList";
import { Post } from "./pages/Post";
import { EditPost } from "./pages/EditPost";

function App() {
  return (
    <>
      <h1>Awesome Blog</h1>
      <Routes>
        <Route index element={<PostList />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/post/:id/edit" element={<EditPost />}></Route>
      </Routes>
    </>
  );
}

export default App;
