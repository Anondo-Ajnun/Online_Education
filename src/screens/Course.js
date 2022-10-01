import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses_Api from "../api/RealTimeApi_OwnApi";

const Course = ({navigation}) => {
  
  const courseCard =({item})=>{
    return (
    <View style = {styles.mainContainer}>
      <View style = {styles.courseContainer}>
        <View>
          <Image style={styles.CradImage}
          source={item.image}
          resizeMode = "contain"
          />
        </View>
        <Text style = {styles.cardTitle}> 
          {item.title}
        </Text>
        <Text style = {styles.cardDescription}>
          {item.description}
        </Text>
        <View style = {styles.buttonContainer}>
          <TouchableOpacity style = {styles.buttonStyle}
          onPress= {()=> navigation.navigate("Course-Details", {CourseID: item.id})}
          >
            <Text style = {styles.textButton}>Course Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
  
  return (
    <FlatList 
    keyExtractor={(item) => item.id}
    data={Courses_Api}
    renderItem={courseCard}
    />
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
    paddingBottom: 20,
    lineHeight: 20,
    fontSize: 16,
  },
  buttonContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonStyle:{
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  textButton:{
    fontSize: 18,
    color: "#eee"
  }
})

export default Course

