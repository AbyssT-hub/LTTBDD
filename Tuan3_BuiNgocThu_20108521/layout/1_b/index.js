import {  View, Text, Image, TextInput, Pressable, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from "./style";

export default function Bai03() {
    return(
        <View style={styles.container}>
        <LinearGradient
           colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
           style={styles.linearGradient}
        >
         <View style={[styles.flex5, styles.containerFirstChild]}>
             <Image style={styles.imageLock} source={require("../../assets/Lock.png")}/>
             <Text style={styles.textForgotPass}>FORGET PASSWORD</Text>
         </View>
         <View style={[styles.flex5, styles.containerSecondChild]}>
             <Text style={styles.textDescForgetPass}>Provide your account’s email for which you want to reset your password</Text>
 
             <View style={styles.boxInputEmail}>
                 <Image style={styles.imageMailIcon} source={require("../../assets/mail.png")}/>
                 <TextInput style={styles.inputMail} placeholder="Email"></TextInput>
             </View>
             <TouchableOpacity>
                 <Text style={styles.btnSubmit}>NEXT</Text>
             </TouchableOpacity>
         </View>
        </LinearGradient>
     </View>
);
}
