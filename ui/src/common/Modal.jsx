import { useCallback, useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Portal, { createContainer } from './Portal';
import styles from './modal.styles'; 

const MODAL_CONTAINER_ID = 'modal-container-id';

const useStyles = createUseStyles(styles);

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