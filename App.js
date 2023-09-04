import React from "react";
import { StyleSheet, Text, View, Image, FlatList, ToastAndroid, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ColorCircle from "./components/colorCircle";
import ColorPalette from "./screens/ColorPalette";
import ColorBox from "./components/colorBox";
import Home from "./screens/home";

const Stack = createStackNavigator();

//navigation.navigate('ColorPalette', { paletteName: 'Solarized', colors: COLORS });

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator >
    </NavigationContainer>
  );
};

export default App;