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


const CardsMenu = () => {

    /*function storyCard(){
        <View style={{ alignItems: "flex-start" }}>
            <Text style={cardsStyle.historyText}>História</Text>
                <Button 
                title="go kokama story" 
                onPress={() => navigation.navigate('')} >
                    <Image style={cardsStyle.historyCard} source={require("../../assets/img/floresta.jpg")} />
                </Button>
        </View>
    }*/

    return(
        <SafeAreaView>    
            <ScrollView
                keyboardShouldPersistTaps={"always"}
            >

                <TopMenu name="Menu dos Cards" />
                <Text style={cardsStyle.historyText}>História</Text>
                <Image style={cardsStyle.historyCard} source={require("../../assets/img/floresta.jpg")} />

            </ScrollView>    
        </SafeAreaView>
    );
};
export default CardsMenu;
