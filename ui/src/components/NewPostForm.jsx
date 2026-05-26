import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import PostsContext from '../postsContext';
import { postsAPI } from '../common/postsAPI';

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

const NewPostForm = ({ setModalActive }) => {
    const classes = useStyles();
    const { getAllPosts } = useContext(PostsContext);

    const onPostSubmit = async (formData) => {
        const data = Object.fromEntries(formData);
        console.log(data);
        if (!data.author && !data.title && !data.content) {
            console.log('No data found');
            return;
        }

        await postsAPI.create(data);

        await getAllPosts();

        setModalActive(false);
    };

    return (
        <div>
            <h4>Create your new post</h4>
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

export default NewPostForm;