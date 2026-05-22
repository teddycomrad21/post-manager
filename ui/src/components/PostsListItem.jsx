import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { Calendar } from 'lucide-react';
import moment from 'moment';
import PostsContext from '../postsContext';


const styles = {
    postsListItemContainer: {
        display: 'flex',
        padding: 12,
        flexBasis: '50%',
        textAlign: 'center',
        border: '1px solid transparent'
    },
    litItemBtn: {
        display: 'flex',
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit'
    },
    title: {
        fontWeight: 600
    },
    postContent: {
        textAlign: 'left',
        marginLeft: 25,
        display: 'flex',
        flexDirection: 'column',
        '& h4, h5': {
            margin: [0, 0, 6, 0]
        }
    },
    author: {
        color: '#6c2de0',
        fontWeight: 0
    },
    date: {
        margin: [0, 0, 0, 5],
        fontSize: 12,
        color: 'grey'
    },
    id: {
        margin: 0,
        fontSize: 12,
        color: 'grey'
    },
    selected: {
        border: '1px solid #6c2de0',
        borderRadius: 5
    }
};

const useStyles = createUseStyles(styles);

const PostsListItem = ({ author, title, content, date, _id, picture, isSelected = false }) => {
    const classes = useStyles();
    const { onPostClick } = useContext(PostsContext);

    return (
        <div className={`${classes.postsListItemContainer} ${isSelected && classes.selected}`}>
            <button className={classes.litItemBtn} onClick={() => onPostClick(_id)}>
                {picture ? (
                <img
                    src={`http://localhost:3000/${picture}`}
                    alt={title}
                    width={180}
                    height={130}
                    style={{ borderRadius: '5px' }}
                />
            ) : (
                <div style={{ width: 180, height: 130, border: '1px solid grey', borderRadius: 5 }}>
                    <p>No image found...</p>
                </div>
            )}

            <div className={classes.postContent}>
                <h4 className={classes.title}>{title}</h4>
                <h5 className={classes.author} >{author}</h5>
                <p>{content}</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Calendar color="grey" size={14} />
                        <p className={classes.date}>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>

                    <p className={classes.id}>{`ID: ${_id}`}</p>
                </div>
            </div>
            </button>
        </div>
    );
};

export default PostsListItem;