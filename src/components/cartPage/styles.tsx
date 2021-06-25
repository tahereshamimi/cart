import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    container: {
        background: '#f7f7f7',
        height:'100vh',
        paddingTop:117
    },
    header: {
        background: '#ffffff',
        margin: [0, 119, 11, 121],
        height: '149px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0px 2px 6px 3px rgb(178 178 178 / 45%)',
    },
    logoBox: {
        position: 'absolute',
        height: 100,
        width: 100,
        // border: [1, 'solid', 'black'],
        background: '#ffffff',
        top: '-50px',
        boxShadow: '0px 2px 6px 3px rgb(178 178 178 / 45%)',


    },
    headerTexts: {
        height: '99px',
        position: 'absolute',
        top: 50,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        "& div:first-child": {
            // marginTop: 11,
            fontSize: '18pt',
            color: '#2f3641',
            fontWeight: 'bold'
        },
        "& div:nth-child(2)": {
            marginTop: 5
        },
        "& div:nth-child(3)": {
            color: "#6b727e",
            fontSize: '14pt'
        }
    },
    products:{
        margin:[0, 119, 11, 121]
    }
})
export { useStyles }