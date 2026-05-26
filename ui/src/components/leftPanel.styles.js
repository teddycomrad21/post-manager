export default {
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
