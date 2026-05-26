import { createUseStyles } from 'react-jss';
import PostsProvider from './PostsProvider';

const styles = {
    container: {
        display: 'flex',
        padding: 25,
        fontFamily: 'Noto Sans, sans-serif'
    }
};

const useStyles = createUseStyles(styles);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PostsProvider />
    </div>
  );
};
