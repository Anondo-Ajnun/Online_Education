import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Enrole = () => {

  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try{
    const response = await fetch("https://raw.githubusercontent.com/Anondo-Ajnun/API/main/users.json");
    const realData = await response.json();
    setMyData(realData);
    //console.log(realData);
    setIsLoaded(false);
    }catch (error){
      console.log(error);
    }

  };

  useEffect(()=> getUserData(),[]);

  const showUsreData =({item}) =>{
    return <View style= {styles.card}>
      <View style= {styles.imgContainer}>
       <Image style= {styles.imgStyle}
        source = {{uri: item.image}}
       />
      </View>
      <View>
        <View style= {styles.boiDataContainer}>
          <Text style= {styles.bioData}> Bio-Data</Text>
          <Text style= {styles.idNumber}> 
          {item.id <10 ? `#0${item.id}` : `#{item.id}`}
          </Text>

        </View>
      </View>
      <View style= {styles.mainContain}>
        <Text style= {styles.myNmae}> Name: {item.name}</Text>
        <Text style= {styles.myNmae}> Email: {item.email}</Text>
        <Text style= {styles.myNmae}> Mobile: {item.mobile}</Text>
        <Text style= {styles.myNmae}> Des: {item.description}</Text>
      </View>
    </View>
  };
  return (
    <View>
      <Text style ={styles.mainHeader}>List of students</Text>
      <FlatList
      keyExtractor={(item) => item.id}
      data={myData}
      renderItem={ showUsreData }
      horizontal
      showsHorizontalScrollIndicator= {false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    width:"100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee"
  },
  card:{
    width: 250,
    height: 500,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
  },
  boiDataContainer:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
  },
  idNumber:{
    fontSize: 20,
    color: "#fff",
    paddingRight: 10,
  },
  bioData:{
    fontSize: 30,
    color: "fff",
  },
  imgContainer:{
    padding: 10,
  },
  imgStyle:{
    width: "100%",
    height: 180,
  },
  mainHeader:{
    fontSize: 30,
    color: "a18ec5",
    textAlign: "center",

  },
  mainContain:{
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myNmae:{
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  }
})

export default Enrole

