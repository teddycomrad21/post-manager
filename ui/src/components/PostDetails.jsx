import { useContext, useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import moment from 'moment';
import { PersonStanding, X, Calendar, Copy, Pencil, Trash2 } from 'lucide-react';
import PostsContext from '../postsContext';
import { postsAPI } from '../common/postsAPI';
import Modal from '../common/Modal';
import CreateUpdatePostForm from '../common/CreateUpdatePostForm';
import styles from './postDetails.styles';

const useStyles = createUseStyles(styles);

const PostDetails = () => {
    const classes = useStyles();
    const { selectedPostId, setSelectedPostId, getAllPosts } = useContext(PostsContext);
    const [selectedPostData, setSelectedPostData] = useState(undefined);
    const [isModalActive, setModalActive] = useState(false);

    const onClose = () => {
        setSelectedPostId(null);
        setSelectedPostData(undefined);
    };

    const handleEditModalOpen = () => {
      setModalActive(true);
    };

    const handleModalClose = () => {
      setModalActive(false);
    };

    const onDeletePost = () => {
        if (!selectedPostId) {
            return;
        }

        postsAPI.delete(selectedPostId)
            .then(response => console.log(response))
            .then(() => getAllPosts());
    };

    const handleCopy = async (id) => {
        try {
            await navigator.clipboard.writeText(id);
            alert("Copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    useEffect(() => {
        if (!selectedPostId) {
            return;
        }

        postsAPI.getOne(selectedPostId).then(postData => setSelectedPostData(postData));
    }, [selectedPostId, setSelectedPostData]);

    if (!selectedPostData || Object.keys(selectedPostData).length === 0) {
        return (
            <div className={classes.postDetailsContainer}>
                <p className={classes.noPosts}>No posts selected</p>
            </div>
        );
    }

    return (
        <div className={classes.postDetailsContainer}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4>Post details</h4>
                    <button className={classes.closeBtn} onClick={onClose}>{<X size={22} />}</button>
                </div>

                {isModalActive && (
                    <Modal title="Edit post form" onClose={handleModalClose}>
                        <CreateUpdatePostForm setModalActive={setModalActive} postToEdit={selectedPostData} />
                    </Modal>
                )}

                {selectedPostData.picture ? (
                    <img
                        src={`http://localhost:3000/${selectedPostData.picture}`}
                        alt={selectedPostData.title}
                        width={330}
                        height={200}
                        style={{ borderRadius: '5px' }}
                    />
                ) : (
                    <p style={{ textAlign: 'center', height: 190 }}>No image found...</p>
                )}

                <h4 className={classes.title}>{selectedPostData.title}</h4>
                <div className={classes.iconDataContainer}>
                    <PersonStanding size={18} />
                    <h5 className={classes.author} >{selectedPostData.author}</h5>
                </div>
                <div className={classes.iconDataContainer}>
                    <Calendar color="grey" size={14} />
                    <p className={classes.date}>{moment(selectedPostData.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>

                <div className={classes.divider} />

                <p>{selectedPostData.content}</p>

                <p style={{ margin: 0, fontSize: 14 }}>Post ID</p>
                <div 
                    className={classes.copyId} 
                    onClick={() => handleCopy(selectedPostData._id)}
                    style={{ cursor: "pointer" }}
                >
                    <p>{selectedPostData._id}</p>
                    <Copy color="grey" size={14} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                    <button className={classes.editBtn} onClick={handleEditModalOpen}>
                        <Pencil size={12} /> Edit
                    </button>
                    <button className={classes.deleteBtn} onClick={onDeletePost}>
                        <Trash2 size={12} /> Delete
                    </button>
                </div>
        </div>
    );
};

export default PostDetails;