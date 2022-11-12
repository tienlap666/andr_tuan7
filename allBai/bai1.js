import * as React from 'react';
import {useRef,useEffect} from 'react';
import {  Animated, Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';


export default function Bai1() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000
    }).start();
  };

  useEffect(() => {
    fadeIn();
  },);


  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Welcome to Animated React native</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  fadingText:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue',
    textAlign:'center',
    fontSize:50,
    color:'white'
  }
});
