import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const SignUpscreen = () => {
  return (
    <View>
      <View style={styles.imageConainer}>
        <Image source={require("../assets/form.png")}  style={styles.image}/>
      </View>
      <View>
        <Text style={styles.heading}>Create Account</Text>
      </View>
      <View style={styles.inputFlied}>
        <FontAwesome name={"user"} size={20} color="rgb(137, 135, 135)"/>
        <TextInput style={styles.textinput} placeholder='UserId'/>
      </View>

      <View style={styles.inputFlied}>
        <FontAwesome name={"lock"} size={20} color="rgb(137, 135, 135)"/>
        <TextInput style={styles.textinput} placeholder="Password" secureTextEntry/>
      </View>

      <View style={styles.inputFlied}>
        <FontAwesome name={"envelope"} size={20} color="rgb(137, 135, 135)"/>
        <TextInput style={styles.textinput} placeholder='Email'/>
      </View>

      <View style={styles.inputFlied}>
        <FontAwesome name={"mobile"} size={20} color="rgb(137, 135, 135)"/>
        <TextInput style={styles.textinput} placeholder='Contact'/>
      </View>

      <View style={styles.signup}>
        <Text style={styles.signupText}>Create </Text>
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.LinearGradient}>
           <FontAwesome name={"long-arrow-right"} size={20} color="white"/>
        </LinearGradient>
      </View>
      <Text style={styles.text}>Or Create Account usig Social media. </Text>
      <TouchableOpacity>
        <View style={styles.socialmediacont}>
        <Entypo name={"facebook-with-circle"} size={35} color="blue" style={styles.icon}/>
        <Entypo name={"twitter-with-circle"} size={35} color="blue" style={styles.icon}/>
        <Entypo name={"google--with-circle"} size={35} color="blue" style={styles.icon}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpscreen

const styles = StyleSheet.create({
  image:{
    width:"100%",
    height:170
  },
  heading:{
    textAlign:"center",
    fontSize:22,
    fontWeight:500
  },
  inputFlied:{
    backgroundColor:"white",
    flexDirection:"row",
    height:50,
    marginInline:40,
    marginBlock:15,
    borderRadius:17,
    elevation:20,
    paddingInline:10,
    alignItems:"center"
  },
  textinput:{
    flex:1,
    marginInline:10
  },
  signup:{
    flexDirection:"row",
    width:"90%",
    justifyContent:"flex-end",
    marginTop:20
  },
  LinearGradient:{
    height:34,
    width:56,
    borderRadius:17,
    justifyContent:"center",
    alignItems:"center",
    marginInline:10
  },
  signupText:{
    color: "rgb(57, 54, 54)",
    fontWeight: "bold",
    fontSize: 25,
  },
  text:{
    fontSize:15,
    color: "rgb(87, 85, 85)",
    fontSize:15,
    textAlign:"center",
    marginTop:40
  },
  socialmediacont:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
  },
  icon:{
    backgroundColor:"white",
    elevation:20,
    marginInline:10,
    padding:5,
    borderRadius:50,
    marginTop:15
  }
})