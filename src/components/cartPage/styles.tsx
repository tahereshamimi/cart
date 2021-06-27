import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    background: "#f7f7f7",
    height: "100vh",
    paddingTop: 117,
    overflow: "scroll",
  },
  content: {
    margin: [0, "auto", 11],
    width: "960px",
  },
  "@media(max-width: 1200px)": {
    content: {
      width: "calc(95vw - 100px)",
    },
  },
  header: {
    background: "#ffffff",
    height: "149px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 2px 6px 3px rgb(178 178 178 / 45%)",
  },

  logoBox: {
    position: "absolute",
    height: 100,
    width: 100,
    background: "#ffffff",
    top: "-50px",
    boxShadow: "0px 2px 6px 3px rgb(178 178 178 / 45%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: 93,
  },
  headerTexts: {
    height: "99px",
    position: "absolute",
    top: 50,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& div:first-child": {
      // marginTop: 11,
      fontSize: "18pt",
      color: "#2f3641",
      fontWeight: "bold",
    },
    "& div:nth-child(2)": {
      marginTop: 5,
    },
    "& div:nth-child(3)": {
      color: "#6b727e",
      fontSize: "14pt",
    },
  },
  products: {
    marginTop: 6,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(230px, 1fr))",
    flexWrap: "wrap",
    columnGap: "13px",
    marginBottom: 109,
  },
  product: {
    // flexBasis:230,
    // flex:1,
    height: 274,
    boxShadow: "0px 2px 6px 3px rgb(178 178 178 / 45%)",
    background: "#ffffff",
    marginTop: 16,
    textAlign: "center",
    padding: [16, 16, 16],
  },
  productImage: {
    width: 99,
    height: 116,
  },
  productName: {
    fontSize: "16pt",
    color: "#2f3641",
    margin: [5, 0],
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  plusMinusBtn: {
    background: "#ffffff",
    color: "#c3c4ca",
    borderColor: "#f0f1f2",
    "&:hover,&:active,&:focus": {
      background: "#ffffff",
      borderColor: "#f0f1f2",
      color: "#c3c4ca",
    },
  },
  countBtn: {
    background: "#f0f1f2",
    color: "#000",
    borderColor: "#f0f1f2",
    "&:hover,&:active,&:focus,&:focus-within": {
      background: "#f0f1f2",
      borderColor: "#f0f1f2",
      color: "#000",
    },
  },
  buttonGroup: {
    width: 138,
    height: 48,
  },
  amount: {
    color: "#ef553b",
  },
  footer: {
    width: "100%",
    height: 68,
    background: "#19a4e1",
  },
  footerContent: {
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: [0, 57],
    color: "#ffffff",
    "& div": {
      flex: 1,
    },
  },
  BasketName: {
    fontSize: "22pt",
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedProduct: {
    borderRadius: "50%",
    width: 36,
    height: 36,
    background: "#0c7dae",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  cartAndNumber: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& img:hover": {
      cursor: "pointer",
    },
  },
  modalList: {
    display: "flex",
    justifyContent: "space-between",
  },
  rate: {
    fontSize: "14pt",
    color: "#c7c7c7",
  },
  starLine: {
    display: "flex",
  },
});
export { useStyles };
