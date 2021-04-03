import React from "react";
import Learning from "./screens/Learning/index";
import Stories from "./screens/KokamaStories/index";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function  () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CardMenu" component={Learning} />
        <Stack.Screen name="Story" component={Stories} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}