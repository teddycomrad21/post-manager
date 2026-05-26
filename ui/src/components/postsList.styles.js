export default {
    postsListContainer: {
        border: '1px solid #dcdcdc',
        padding: 12,
        margin: 5,
        flexBasis: '50%',
        textAlign: 'center'
    },
    postsListHeader: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between'
    },
    header: {
      margin: 0
    },
    headerDescription: {
      margin: 0,
      textAlign: 'left'
    },
    postsList: {
      paddingTop: 25
    },
    searchInput: {
      width: '100%',
      height: 32,
      border: '1px solid grey',
      borderRadius: 5,
      marginBottom: 24
    },
    createPostBtn: {
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
