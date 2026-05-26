export default {
    postDetailsContainer: {
        border: '1px solid #dcdcdc',
        margin: 5,
        flexBasis: '25%',
        padding: [0, 18, 18, 18]
    },
    noPosts: {
        margin: [90, 0, 0, 90]
    },
    iconDataContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        marginBottom: 12,
        '& > h5': {
            margin: 0
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
    divider: {
        borderBottom: '1px solid #dcdcdc' 
    },
    closeBtn: {
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit'
    },
    copyId: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        '& > p': {
            fontSize: 14,
            color: 'grey',
            margin: [3, 0, 0, 0]
        }
    },
    editBtn: {
        backgroundColor: '#6c2de0',
        borderColor: '#6c2de0',
        borderRadius: 5,
        color: 'white',
        height: 28,
        width: '45%',
        cursor: 'pointer',
        '&:active': {
            backgroundColor: 'darkgrey',
            transform: 'scale(0.95)',
        },
    },
    deleteBtn: {
        backgroundColor: '#d42654',
        borderColor: '#d42654',
        borderRadius: 5,
        color: 'white',
        height: 28,
        width: '45%',
        cursor: 'pointer',
        '&:active': {
            backgroundColor: 'darkgrey',
            transform: 'scale(0.95)',
        },
    }
};