import { StyleSheet, View, Text, Pressable, Image, Button } from "react-native";
// import {styles} from "./style"
import Ellipse8 from "../../assets/Ellipse8.png";

export default function bai01() {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Image
          source={require("../../Image/Ellipse8.png")}
          style={{ width: "150px", height: "150px" }}
        ></Image>

        {/* <Image source={require('./assets/Ellipse8.png')}
              style= {{width : '150px' , height : '150px'}}
        >         
        </Image> */}
      </View>
      <View style={styles.style2}>
        <text style={styles.tile1}>
          GROW <br /> YOUR BUSINESS
        </text>
        {/* 
          <Text style={styles.tile1}>GROW</Text>
          <Text style={ styles.tile2}>YOUR BUSINESS </Text> */}
      </View>
      <View style={styles.style3}>
        <text style={styles.tile3}>
          We will help you to grow your business using online server
        </text>
      </View>
      <View style={styles.style4}>
        <Button title="LOGIN">Login</Button>
        <Button title="SIGN UP">Sign Up</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(to bottom, #D4ECEF, #00CCF9)",
  },
  style1: {
    flex: 2,
    justifyContent: "space-around",
    alignItems: "center",
  },

  style2: {
    flex: 1,
    alignContent: "center",
  },

  style3: {
    flex: 1,
    justifyContent: "center",
  },

  style4: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "85%",
    marginHorizontal: "auto",
  },

  tile1: {
    marginTop: 52,
    fontWeight: 700,
    fontSize: "25px",
    lineHeight: "29.3px",
    textAlign: "center",
    textTransform: "uppercase",
  },

  // tile3: {
  //   fontWeight: 700,
  //   fontSize: '25px',
  //   lineHeight: '29.3px',
  //   textAlign: 'center',
  //   textTransform: 'uppercase',
  // },
  tile2: {
    fontSize: "17px",
    fontWeight: "17.58px",
    fontWeight: "bold",
    textAlign: "center",
  },
});
