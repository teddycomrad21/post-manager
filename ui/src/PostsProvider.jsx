import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PostsContext from './postsContext';
import LeftPanel from './components/LeftPanel';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';

const PostsProvider = () => {
    const [selectedPostId, setSelectedPostId] = useState(null);

    const onPostClick = (id) => {
      setSelectedPostId(id);
    };
  
    const { isPending, error, data } = useQuery({
      queryKey: ['posts'],
      queryFn: async () => {
        const response = await fetch('/api/posts');

        return response.json();
      }
    });

    if (isPending) {
      return 'Loading...';
    }

    if (error) {
      return 'An error has occurred: ' + error.message;
    }

  return (
    <PostsContext.Provider value={{ posts: data, selectedPostId, setSelectedPostId, onPostClick }}>
      <LeftPanel />
      <PostsList />
      <PostDetails />
    </PostsContext.Provider>
  );
};

export default PostsProvider;