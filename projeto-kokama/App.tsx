import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
import Icon5 from"react-native-vector-icons/FontAwesome5";
import { View, Image, Text, Platform, StatusBar } from "react-native";


import Translation from "./src/screens/Translation";
import CardsMenu from "./src/screens/CardsMenu";
import Stories from "./src/screens/KokamaStories";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";

const Tab = createBottomTabNavigator();
const TranslateStack = createStackNavigator();
const CardStack = createStackNavigator();

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

// Function to import image
function Logo(){
  return(
    <Image
      style={{ width: 50, height: 50, borderRadius: 100 }}
      source={require("./src/assets/img/logo.png")}
    />
  );
}

// Page Translate Relation
const TranslateStackScreen = () => (
  <TranslateStack.Navigator>
    <TranslateStack.Screen 
      name="Tradução"
      component={Translation}
      options={{
        title: "Tradução",
        headerTitle: props => <Logo {...props}/>,
        headerTitleAlign: 'center',
        headerStatusBarHeight: STATUSBAR_HEIGHT,
        headerStyle: {
          backgroundColor: "#f23232",
          borderBottomWidth: 0,
        },
      }} 
    />
  </TranslateStack.Navigator>
)

// Page Cards Relation
const CardStackScreen = () => (
  <CardStack.Navigator>
    <CardStack.Screen 
      name="Menu dos Cards" 
      component={CardsMenu}
      options={{
        title: "Tradução",
        headerTitle: props => <Logo {...props}/>,
        headerTitleAlign: 'center',
        headerStatusBarHeight: STATUSBAR_HEIGHT,
        headerStyle: {
          backgroundColor: "#f23232",
          borderBottomWidth: 0,
        },
      }} 
    />

    <CardStack.Screen 
      name="Histórias do Povo Kokama" 
      component={Stories}
      options={{
        title: "Tradução",
        headerTitle: props => <Logo {...props}/>,
        headerTitleAlign: 'center',
        headerStatusBarHeight: STATUSBAR_HEIGHT,
        headerStyle: {
          backgroundColor: "#f23232",
          borderBottomWidth: 0,
        },
      }} 
    />
  </CardStack.Navigator>
)

// Tabbar
export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ activeTintColor: "red" }} >
        <Tab.Screen name="Tradução" component={TranslateStackScreen} 
          options={{
            tabBarIcon: props => (
              <Icon name="translate" size={35} color={props.color} />
            )
          }}
        />
        <Tab.Screen name="Menu dos Cards" component={CardStackScreen}
          options={{
            tabBarIcon: props => (
              <Icon5 name="book" size={30} color={props.color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
