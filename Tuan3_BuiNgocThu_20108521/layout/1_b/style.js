import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1
    },
    flex5: {
        flex: 5
    },
    containerFirstChild:{
        alignItems: "center",
        justifyContent: "center"
    },
    imageLock: {
        width: "105px",
        height: "117px",

    },
    textForgotPass:{
        fontSize: "25px",
        fontWeight: 700,
        width: "50%",
        textAlign: "center",
        marginTop: "28px"
    },
    containerSecondChild: {
        width: "85%",
        marginHorizontal: "auto"
    },
    textDescForgetPass:{
        textAlign: "center",
        fontSize: "15px",
        fontWeight: 700,
        marginBottom: "30px"
    },
    boxInputEmail:{ 
        width: "100%",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "40px"
    },
    imageMailIcon: {
         width:"45px", 
         position: "absolute",
         left: 0,
         height: "100%"
    },
    inputMail: {
        width: "100%",
        outlineWidth: "0",
        paddingVertical: "10px",
        backgroundColor: "#c4c4c4",
        paddingLeft: "45px",
    },
    btnSubmit: {
        width: "100%",
        textAlign: "center",
        fontWeight: 700,
        backgroundColor: "#E3C000",
        paddingVertical: "12px"
    }
})