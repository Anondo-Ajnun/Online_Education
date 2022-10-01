import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import Enrole from './src/screens/Enrole';
import CourseDetails from './src/screens/CourseDetails'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Home} /> */}

        <Stack.Screen name="Home" 
          options={{headerShown: false}}>
          {props => <Home {...props} websiteName={'Anondo Academy'} />}
        </Stack.Screen>

        <Stack.Screen name="About" component={About} />

        <Stack.Screen name="Contact" component={Contact} />

        <Stack.Screen name="Course" component={Course}
        options={
          {
            headerTitleStyle:{
              fontSize: 25,
              color: 'green',
            },
            headerTitle: "Courses",
            headerTitleAlign:"center",
            headerTintColor: 'red',
            headerStyle:{
              backgroundColor: 'purple',
            },
          }
        }
        />

        <Stack.Screen name="Enrole" component={Enrole} />
        <Stack.Screen name="Course-Details" component={CourseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
