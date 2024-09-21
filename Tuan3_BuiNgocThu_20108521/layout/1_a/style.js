import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00CCF9',
        // backgroundColor: linear-gradient('#00CCF9','#00CCF9'),
        alignItems: 'center',
        flexDirection: 'column'
      },
    
      //Logo
      viewLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      logo_img: {
        width: 150,
        height: 150,
        marginTop:50,
        resizeMode: 'stretch'
      },
    
      //Title
      titleContainer: {
        flex: 1,
        margin:20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 25,
        lineHeight: 29,
        fontWeight: 700,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      //Content
      contentContainer: {
        margin: 30,
        width: 322,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
        fontSize: 15,
        fontWeight: 700,
        lineHeight: 17,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      //Button
      viewButtonContainer: {
        flex: 1,
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        alignSelf: 'center',
    
      },
      btn: {
        width: 119,
        height: 48,
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textBtn: {
        fontSize: 20,
        fontWeight: 700,
      },
      btnHow:{
        flex : 1,
        width: '302px',
        height: '53px',
        justifyContent: 'center',
        alignItems: 'center',

      },
      textBtnHow:{
        fontWeight: 700,
        fontSize : "20px",
        fontWeight : "21.09px",
        fontWeight: 'bold',
        textAlign: 'center',
      }
    })