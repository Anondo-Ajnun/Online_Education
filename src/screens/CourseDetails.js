import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Courses_Api from '../api/RealTimeApi_OwnApi'

const CourseDetails = ({navigation, route}) => {
    const ButtonID = route.params.CourseID;

    const SelectedCourse = Courses_Api.find((element) => {
        return ButtonID === element.id;
    });
    
    return (
        <ScrollView style = {styles.mainContainer}>
          <View style = {styles.courseContainer}>
            <View>
              <Image style={styles.CradImage}
              source={SelectedCourse.image}
              resizeMode = "contain"
              />
            </View>
            <Text style = {styles.cardTitle}> 
              {SelectedCourse.title}
            </Text>
            <Text style = {styles.cardDescription}>
              {SelectedCourse.description}
            </Text>
            <Text style = {styles.cardCourse}>
              {SelectedCourse.Courses1}
            </Text>
            <Text style = {styles.cardCourse}>
              {SelectedCourse.Courses2}
            </Text>
            <Text style = {styles.cardCourse}>
              {SelectedCourse.Courses3}
            </Text>

            <View style = {styles.buttonContainer}>
            <Text style = {styles.priceStyle}>
              {SelectedCourse.Price}
            </Text>
              <TouchableOpacity style = {styles.buttonStyle}
              onPress= {()=> navigation.navigate("Course")}
              >
                <Text style = {styles.textButton}>Join Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        )
}

const styles = StyleSheet.create({
    CradImage:{
      width: "100%",
      height: undefined,
      aspectRatio: 1,
  
    },
    mainContainer:{
      paddingHorizontal: 20,
    },
    courseContainer:{
      padding: 30,
      backgroundColor: "rgba(255, 255, 255, 0.90)",
      textAlign: "center",
      borderRadius: 5,
      shadowColor: "gray",
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
      marginVertical: 30,
    },
    cardTitle: {
      fontSize: 22,
      color: "#344055",
      textTransform: "uppercase",
      textAlign: "center",
      paddingBottom: 15,
  
    },
    cardDescription: {
      textAlign: 'justify',
      paddingBottom: 10,
      lineHeight: 20,
      fontSize: 16,
    },
    cardCourse: {
      textAlign: 'center',
      paddingBottom: 10,
      lineHeight: 20,
      fontSize: 16,
      color: 'black'
    },
    buttonContainer:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "#809fff",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 5,
    },
    buttonStyle:{
      justifyContent: "center",
      alignItems: "center",
    },
    priceStyle:{
     justifyContent: "center",
     alignItems: "center",
     paddingRight: 20,
     fontSize: 18,
     color: "black"
    },
    textButton:{
      fontSize: 18,
      color: "#eee",
      textTransform: 'uppercase'
    },
  })

export default CourseDetails