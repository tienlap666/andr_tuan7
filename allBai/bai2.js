import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import {
  Animated,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Bai2() {
  const hvuongAnimated = useRef(new Animated.Value(0)).current;

  const movehvuong = () => {
    Animated.timing(hvuongAnimated, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const backhvuong = () => {
    Animated.timing(hvuongAnimated, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const xVal = hvuongAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 350],
  });

  const yVal = hvuongAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 350],
  });

  const animStyle = {
    transform: [
      {
        // translateX: xVal,
        translateY: yVal,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.hvuong, animStyle]}>
        <Text style={styles.text}></Text>
      </Animated.View>
      <View style={{flexDirection:'row', justifyContent:'center',marginTop:550,marginLeft:80,position:'absolute'}}>
        <TouchableOpacity
        onPress={movehvuong}
        style={{ alignItems: "center", marginTop: 20 }}
      >
        <View style={{ backgroundColor: "green", width: 100 }}>
          <Text style={styles.text}>Move</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={backhvuong}
        style={{ alignItems: "center", marginTop: 20 }}
      >
        <View style={{ backgroundColor: "green", width: 100 }}>
          <Text style={styles.text}>Back</Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hvuong: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
});