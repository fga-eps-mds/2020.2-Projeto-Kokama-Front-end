import {View, 
    Button,
    Text,  
    Image, 
    ScrollView, 
    SafeAreaView,} from "react-native";
import React, { useState } from "react";
import cardsStyle from "./styles";
import TopMenu from "../../components/TopMenu";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const MyStack = () => {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Home"
//             component={CardsMenu}
//             options={{ title: 'Welcome' }}
//           />
//           <Stack.Screen name="Profile" component={ProfileScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
// };
  

const CardsMenu = ({ navigation }: {navigation: any}) => {



        return(
            <SafeAreaView>    
                <ScrollView
                    keyboardShouldPersistTaps={"always"}
                >

                    <TopMenu name="Menu dos Cards" />
                    <Text style={cardsStyle.historyText}>História</Text>
                    <Button 
                         title="go kokama story" 
                         onPress={() => navigation.navigate('Stories')} >
                             <Image style={cardsStyle.historyCard} source={require("../../assets/img/floresta.jpg")} />
                    </Button>
        
                </ScrollView>    
            </SafeAreaView>
        );        

};

CardsMenu.navigationOptions = {
    title: 'CardMenu',
}


export default function storyCard({ navigation }){
    return (
        <View style={{ alignItems: "flex-start" }}>
            <Text style={cardsStyle.historyText}>História</Text>
            <Button 
                title="go kokama story" 
                onPress={() => navigation.navigate('KokamaStories')} >
                <Image style={cardsStyle.historyCard} source={require("../../assets/img/floresta.jpg")} />
            </Button>
        </View>
    );

}