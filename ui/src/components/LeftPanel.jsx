import { Atom, StickyNote, StickyNotePlus, StickyNotes, WebhookIcon, Cog, Info } from 'lucide-react';
import { createUseStyles } from 'react-jss';

const styles = {
    panelContainer: {
        margin: 5,
        border: '1px solid #dcdcdc',
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        flexBasis: '18%',
        padding: 12,
        '& h1': {
            margin: 0,
            fontSize: 28
        }
    },
    labelContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
    },
    panelButton: {
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit'
    },
    btnContainer: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
    }
};

const useStyles = createUseStyles(styles);

const LeftPanel = () => {
    const classes = useStyles();

    return (
        <div className={classes.panelContainer}>
            <div className={classes.labelContainer}>
                <Atom color="#6c2de0" />
                <h1>Post manager</h1>
            </div>

            <div className={classes.btnContainer}>
                <StickyNote size={16} />
                <button onClick={() => console.log('Posts')} className={classes.panelButton}>
                    Posts
                </button>
            </div>

            <div className={classes.btnContainer}>
                <StickyNotePlus size={16} />
                <button onClick={() => console.log('Create post')} className={classes.panelButton}>
                    Create post
                </button>
            </div>

            <div className={classes.btnContainer}>
                <WebhookIcon size={16} />
                <button onClick={() => console.log('API playground')} className={classes.panelButton}>
                    API playground
                </button>
            </div>


            <div className={classes.btnContainer}>
                <StickyNotes size={16} />
                <button onClick={() => console.log('JSON response')} className={classes.panelButton}>
                    JSON response
                </button>
            </div>

            <div className={classes.btnContainer}>
                <Cog size={16} />
                <button onClick={() => console.log('Settings')} className={classes.panelButton}>
                    Settings
                </button>
            </div>

            <div className={classes.btnContainer}>
                <Info size={16} />
                <button onClick={() => console.log('About')} className={classes.panelButton}>
                    About
                </button>
            </div>
        </div>
    );
};

export default LeftPanel;