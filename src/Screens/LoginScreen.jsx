import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const Register = ()=>{
    navigation.navigate("SignUp");
  }
  return (
    <View style={styles.container}>
      <View style={styles.topimgcontainer}>
        <Image source={require("../assets/topimg.png")} style={styles.topimg} />
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.helloText}>Hello</Text>
        <Text style={styles.Text}>Sign in to your acount.</Text>
      </View>

      {/* <FontAwesome name={"user"} style={styles.icon}/> */}
      <View style={styles.inputContainer}>
        <FontAwesome name={"user"} size={20} color="rgb(137, 135, 135)" style={styles.inputicon} />
        <TextInput style={styles.textInput} placeholder='UserId od Email' />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name={"lock"} size={20} color="rgb(137, 135, 135)" style={styles.inputicon} />
        <TextInput style={styles.textInput} placeholder='Password' secureTextEntry />
      </View>

      <Text style={styles.forgotpass}>Forget Your Password ?</Text>

      <View style={styles.signincont}>
        <Text style={styles.signintext}>Sign In</Text>

        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
          <AntDesign name={"arrowright"} color="white" size={24}/>
        </LinearGradient>
      </View>

     <TouchableOpacity onPress={Register}>
     <Text style={styles.Account}>Don't have an account? <Text style={{textDecorationLine:"underline"}}>Create</Text></Text>
     </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,

  },
  topimg: {
    width: "100%",
    height: 150,
  },
  helloText: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 500
  },
  Text: {
    textAlign: 'center',
    color: "rgba(94, 93, 93, 0.79)",
  },
  icon: {
    color: "rgb(87, 85, 85)"
  },
  inputContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    marginInline: 40,
    elevation: 10,
    marginBlock: 20,
    alignItems: "center",
    paddingInline: 10,
    height: 50
  },
  textInput: {
    flex: 1,
    marginInline: 10
  },
  forgotpass: {
    color: "rgba(94, 93, 93, 0.79)",
    textAlign: "right",
    width: "90%",
    fontSize: 15,
    textDecorationLine: "underline",
    marginTop: 10
  },
  signincont: {
    flexDirection:"row",
    marginTop:100,
    width:"90%",
    justifyContent:"flex-end"
  },
  signintext: {
    color: "rgb(57, 54, 54)",
    fontWeight: "bold",
    fontSize: 25,

  },
  linearGradient:{
    height:34,
    width:56,
    borderRadius:17,
    alignItems:'center',
    justifyContent:"center",
    marginInline:10
  },
  Account:{
    color: "rgb(87, 85, 85)",
    fontSize:18,
    textAlign:"center",
    marginTop:60
  }
})