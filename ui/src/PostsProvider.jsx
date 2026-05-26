import { useState, useEffect } from 'react';
import PostsContext from './postsContext';
import LeftPanel from './components/LeftPanel';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import { postsAPI } from './common/postsAPI';

const PostsProvider = () => {
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [posts, setPosts] = useState([]);

    const getAllPosts = () => {
        postsAPI.getAll().then(response => setPosts(response));
    };

    const onPostClick = (id) => {
      setSelectedPostId(id);
    };

    useEffect(() => {
      getAllPosts();
    }, []);

  return (
    <PostsContext.Provider value={{ posts, getAllPosts, selectedPostId, setSelectedPostId, onPostClick }}>
      <LeftPanel />
      <PostsList />
      <PostDetails />
    </PostsContext.Provider>
  );
};

export default PostsProvider;