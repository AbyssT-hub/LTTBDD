import { View, Text, Image, Pressable, TouchableOpacity, Button} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import {styles} from "./style";


export default function Bai02() {
  return (
    <LinearGradient
    colors={['#C7F4F6','#D1F4F6','#E5F4F5','#00CCF9']}
    style={styles.container}>

      <View style={styles.viewLogo}>
        <Image
          style={styles.logo_img}
          source={require('../../assets/Ellipse8.png')}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>GROW {'\n'} YOUR BUSINESS</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.content}>We will help you to grow your business using online server</Text>
      </View>

      <View style={styles.viewButtonContainer}>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>SIGN UP</Text>
        </Pressable>
      </View>
      <Pressable style={styles.btnHow}>
        <Text style={styles.textBtnHow}>HOW WE WORK?</Text>
      </Pressable>

      </LinearGradient>
  );
}