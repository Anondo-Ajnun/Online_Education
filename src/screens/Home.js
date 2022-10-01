import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Buttons from '../components/Buttons';

const Home = props => {
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={require('../image/Home1.jpg')}
        />
        <Text style={styles.headerText}>Welcome to</Text>
        <Text
          style={[
            styles.headerText,
            {
              fontSize: 30,
              color: 'purple',
            },
          ]}>
          {/* Anondo Academy */}
          {props.websiteName}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.lineStyle}></View>
        <Buttons />
        <View style={[styles.lineStyle, {marginVertical: 20,}]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  image: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    // borderRadius: 30,
    // marginTop: 30,
    // marginBottom: 30,
    
    
  },
  headerText: {
    fontSize: 25,
    textTransform: 'uppercase',
    color: '#344055',
    marginTop:0,
  },
  description: {
    textAlign: 'justify',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 18,
    lineHeight: 25,
  },
  buttonContainer:{
    
  },
  lineStyle:{
    borderWidth:0.5,
    borderColor:'gray',
    marginBottom: 15,
  },
  imageStyle:{
    
  }
});

export default Home;
