import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerLogo: {
        flex: 3,
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    logoText: {
        height: 70,
        fontSize:60,
        fontWeight:700,
        textAlign:"center"

    },
    containerTitle: {
        flex: 2,
        marginTop:20,
        justifyContent: "center",
        alignItems: "center",
    },
    textTitle: {
        width: 300,
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
    },
    containerContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textContent: {
        width: '80%',
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'center',
    },
    containerInputForm: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputForm:{
        flexDirection:"row",
        width:'80%',
        height: 45,
        marginTop:10,
        flexDirection: "row",
        justifyContent:"flex-start"
    },
    inputcode:{
        width:'100%',
        fontSize:15,
        fontWeight:400,
        borderWidth:1,

    },
    containerBtn: {
        flex: 3,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    btn: {
        width: '90%',
        height: 48,
        marginTop: 30,
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn:{
        fontSize: 18,
        fontWeight: 700,
        textAlign:"center"
    }

});