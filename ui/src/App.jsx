import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
const queryClient = new QueryClient();

export default function App() {
  const classes = useStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.container}>
        <PostsProvider />
      </div>
    </QueryClientProvider>
  );
};
