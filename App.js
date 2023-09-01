import React from "react";
import { StyleSheet, Text, View, Image, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ColorBox from "./components/colorBox";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some boxes of different colours</Text>
        <ColorBox ColorName="Cyan" hexCode="#2aa198" />
        <ColorBox ColorName="Blue" hexCode="#268bd2" />
        <ColorBox ColorName="Magenta" hexCode="#d33682" />
        <ColorBox ColorName="Orange" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
});


export default App;