import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundImage:'linear-gradient(to bottom, #D4ECEF, #00CCF9)'
    },
    style1:{
      flex : 2,
      justifyContent: 'space-around',
      alignItems: 'center',
      
    },
  
    style2: {
      flex : 1,
      alignContent : "center",
      
    },
  
    style3:{
      flex : 1,
      justifyContent : 'center',
    },
  
    style4: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: "85%",
      marginHorizontal: "auto"
    },
  
    tile1:{
      marginTop: 52,
      fontWeight: 700,
      fontSize: '25px',
      lineHeight: '29.3px',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  
    // tile2: {
    //   fontWeight: 700,
    //   fontSize: '25px',
    //   lineHeight: '29.3px',
    //   textAlign: 'center',
    //   textTransform: 'uppercase',
    // },
    tile3: {
  
      fontSize : "17px",
      fontWeight : "17.58px",
      fontWeight: 'bold',
      textAlign: 'center',
    }
  });