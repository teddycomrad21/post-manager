import { useContext, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Search, RefreshCcw } from 'lucide-react';
import PostsListItem from './PostsListItem';
import PostsContext from '../postsContext';
import Modal from '../common/Modal';
import NewPostForm from './NewPostForm';
import styles from './postsList.styles';

const useStyles = createUseStyles(styles);

const Posts = () => {
    const classes = useStyles();
    const { posts, selectedPostId } = useContext(PostsContext);

    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
      setModalActive(true);
    };

    const handleModalClose = () => {
      setModalActive(false);
    };

  return (
    <div className={classes.postsListContainer}>
      {isModalActive && (
          <Modal title="New post form" onClose={handleModalClose}>
            <NewPostForm setModalActive={setModalActive} />
          </Modal>
      )}
      <div>
        <div className={classes.postsListHeader}>
          <h2 className={classes.header}>Posts</h2>
          <button className={classes.createPostBtn} onClick={handleModalOpen}>+ New Post</button>
        </div>

        <p className={classes.headerDescription}>Manage and explore your posts</p>
      </div>

      <div className={classes.postsList}>
        <div style={{ display: 'flex', gap: 8 }}>
          <Search color="grey" size={28} />
          <input
            id="searchPost"
            type="search"
            name="searchPost"
            placeholder="Search for posts by title or author..."
            className={classes.searchInput}
            onChange={() => console.log('searchInput action')}
          />
          <RefreshCcw style={{ cursor: 'pointer' }} color="grey" size={28} onClick={() => window.location.reload()} />
        </div>

        {posts.map(listItem => {
          return (
            <PostsListItem
              key={listItem._id}
              {...listItem}
              isSelected={selectedPostId === listItem._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;