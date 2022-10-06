import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style ={styles.container}>
      <Text style = {styles.mainHeader}> Md. Anondo Biswas</Text>
      <Text style = {styles.headerDec}> I am a frontend developer</Text>
      <View>
        <Image
        style ={styles.imgStyle}
          //source={require('../image/Anondo.png')}
          source= {{uri: "https://images.pexels.com/photos/3919865/pexels-photo-3919865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
        />
      </View>

      <View style ={styles.aboutBody}>
        <Text style ={styles.aboutMe}>Abobt Me</Text>
        <Text style ={[styles.headerDec, styles.aboutDes]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </View>

      <Text style ={styles.mainHeader}>Follow me on Social media</Text>

      <View style ={styles.social}>

        <TouchableOpacity
        onPress={()=> Linking.openURL("https://github.com/Anondo-Ajnun")}
        >
          <Image
          style ={styles.iconStyle}
          source= {{uri: "https://img.icons8.com/fluency/344/facebook-new.png"}}
          />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> Linking.openURL("https://github.com/Anondo-Ajnun")}
        >
          <Image
          style ={styles.iconStyle}
          source= {{uri: "https://img.icons8.com/color/344/instagram-new--v1.png"}}
          />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> Linking.openURL("https://github.com/Anondo-Ajnun")}
        >
          <Image
          style ={styles.iconStyle}
          source= {{uri: "https://img.icons8.com/color-glass/344/github--v1.png"}}
          />
        </TouchableOpacity>

        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems: 'center',
  },
  imgStyle:{
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader:{
    fontSize: 18,
    color: "#344055",
    textTransform: 'uppercase',
    fontWeight: "500",
    marginTop: 30,
    marginBottom: 10,
    lineHeight: 30,
  },
  headerDec:{
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutBody: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  aboutMe:{
    fontSize: 18,
    color: "#fff",
    textTransform: 'uppercase',
    fontWeight: "500",
    marginVertical: 15,
    alignSelf: 'center',
  },
  aboutDes: {
    color: "#fff"
  },
  social:{
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconStyle:{
    width: "100%",
    height: 50,
    aspectRatio: 1,
  }
})

export default About

