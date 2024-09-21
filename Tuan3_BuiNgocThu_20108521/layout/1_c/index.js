import { View, Text, Button, TextInput, Pressable, TouchableOpacity, SafeAreaView  } from 'react-native'
import {styles} from "./style"
import { LinearGradient } from 'expo-linear-gradient'


export default function Bai04(){
    return (
        <LinearGradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
            style={styles.container}
        >
            <View style={styles.containerLogo}>
                <Text  style={styles.logoText}>CODE</Text>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>VERIFICATION</Text>
            </View>
            <View style={styles.containerContent}>
                <Text style={styles.textContent}>Enter ontime password sent on ++849092605798</Text>
            </View>
            <View style={styles.containerInputForm}>
                <SafeAreaView style={styles.inputForm}>
                    <TextInput
                        style={styles.inputcode}
                    />
                    <TextInput
                        style={styles.inputcode}
                    />
                     <TextInput
                        style={styles.inputcode}
                    />
                    <TextInput
                        style={styles.inputcode}
                    />
                     <TextInput
                        style={styles.inputcode}
                    />
                    <TextInput
                        style={styles.inputcode}
                    />
                </SafeAreaView>
            </View>
           <View style={styles.containerBtn}>
           <Pressable style={styles.btn}>
                <Text style={styles.textBtn}>VERIFY CODE</Text>
            </Pressable>
           </View>
        </LinearGradient>
    );
}
