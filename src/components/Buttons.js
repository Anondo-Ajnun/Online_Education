import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Buttons = () => {
  const navigation = useNavigation(); //this is a property of reactnavogation native
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate("Course")}>
        <Image
          style={styles.image}
          source={require('../image/Icons/online-class.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate("Enrole")}>
        <Image
          style={styles.image}
          source={require('../image/Icons/students.png')}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}>
        <Image
          style={styles.image}
          source={require('../image/Icons/phone.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}>
        <Image
          style={styles.image}
          source={require('../image/Icons/about.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonStyle:{
        
    },
    image:{
        width:'100%',
        height: 50,
        aspectRatio:1,
    }
})

export default Buttons;
