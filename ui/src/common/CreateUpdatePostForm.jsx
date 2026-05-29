import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import PostsContext from '../postsContext';
import { postsAPI } from './postsAPI';

const styles = {
    input: {
        width: '100%',
        height: 32,
        border: '1px solid grey',
        borderRadius: 5,
        marginBottom: 24
    },
    submitBtn: {
        backgroundColor: '#6c2de0',
        borderColor: '#6c2de0',
        borderRadius: 5,
        color: 'white',
        height: 28,
        cursor: 'pointer',
        '&:active': {
            backgroundColor: 'darkgrey',
            transform: 'scale(0.95)',
        },
    }
};

const useStyles = createUseStyles(styles);

const CreateUpdatePostForm = ({ setModalActive, isCreatePost, postToEdit }) => {
    const classes = useStyles();
    const { getAllPosts } = useContext(PostsContext);

    const onPostSubmit = async (formData) => {
        const data = Object.fromEntries(formData);

        if (!data.author && !data.title && !data.content) {
            return;
        }

        await isCreatePost ?  postsAPI.create(data) : postsAPI.update({ ...postToEdit, ...data });

        await getAllPosts();

        setModalActive(false);
    };

    return (
        <div>
            <h4>{`${isCreatePost ? 'Create your new post' : 'Edit post'}`}</h4>
            <form action={onPostSubmit}>
                <label htmlFor="author">Author:</label>
                <input
                    id="author"
                    type="text"
                    name="author"
                    className={classes.input}
                />

                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    className={classes.input}
                />

                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    type="text"
                    name="content"
                    className={classes.input}
                />

                <button type='submit' className={classes.submitBtn}>Submit post</button>
            </form>
        </div>
    );
};

export default CreateUpdatePostForm;