import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'300px',
    height:'240px',
    borderRadius:'10px',
    backgroundColor:'#FFFFFF',
    '&:hover':{
      borderRadius:'8px',
      border:'1px solid #363f45',
      boxShadow:'0 -1px 4px 0 rgba(25,32,36,0.04)',
    }
  },
  img:{
    width:'32px',
    height:'32px',
    marginRight:'18px'
  },
  hoveredContent:{
    display:'flex',
    flexDirection:'column'
  },
  hoveredTitle:{
    padding:'0',
    margin:'0',
    fontFamily: "HelveticaNeue",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#192024",
  },
  hoveredText:{
    padding:'0',
    margin:'0',
    maxWidth:'200px',
    fontFamily: "HelveticaNeue",
    fontSize: "14px",
    fontWeight: "normal",
    color: "#192024",
    wordWrap:'break-word',
  },
  hoveredURL:{
    maxWidth:'200px',
    fontFamily: "HelveticaNeue",
    fontSize: "14px",
    fontWeight: "normal",
    color: "#5a6872",
    wordWrap:'break-word',
    padding:'0',
    margin:'0',
  }
}));