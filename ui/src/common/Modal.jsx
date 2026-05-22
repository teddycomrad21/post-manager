import { useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';

import Portal, { createContainer } from './Portal';

const MODAL_CONTAINER_ID = 'modal-container-id';

const useStyles = createUseStyles({
  wrap: {
    background: 'rgba(255, 255, 255, 0.4)',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: 5,
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    border: '1px solid',
    position: 'relative',
    background: 'rgba(255, 255, 255, 1)',
    borderRadius: '5px',
    padding: '10px 40px 20px 20px',
  },
  closeButton: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    padding: 0,
    margin: 0,
    right: 0,
    top: 0,
    border: 'none',
    cursor: 'pointer',
    background: 'none',
    color: 'rgba(0, 0, 0, 0.6)',
    '&:hover': {
      color: 'rgba(0, 0, 0, 1)',
    },
  },
  title: {
    margin: '0 0 10px',
    fontFamily: 'Noto Sans, sans-serif',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '16px',
    lineHeight: '20px',
    color: 'black',
  },
});

const Modal = (props) => {
  const { title, onClose, children } = props;
  const classes = useStyles();

  const rootRef = useRef(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event) => {
      if (event.target === rootRef.current) {
        onClose?.();
      }
    };

    const handleEscapePress = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [onClose]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className={classes.wrap} ref={rootRef} data-testid='wrap'>
        <div className={classes.content}>
          <button
            type='button'
            className={classes.closeButton}
            onClick={handleClose}
          >
            Х
          </button>
          <p className={classes.title}>{title}</p>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;