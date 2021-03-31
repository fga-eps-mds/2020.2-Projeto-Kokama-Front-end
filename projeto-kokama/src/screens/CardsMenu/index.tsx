import {View, 
    Button,
    Text,  
    Image, 
    ScrollView, 
    SafeAreaView,
    TouchableWithoutFeedback,} from "react-native";
import React, { useState } from "react";
import cardsStyle from "./styles";
import TopMenu from "../../components/TopMenu";


export default function storyCard({ navigation }){
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ alignItems: "flex-start" }}>
                    <Text style={cardsStyle.historyText}>História</Text>
                    <TouchableWithoutFeedback 
                    onPress={() => navigation.push('Histórias do Povo Kokama')}>
                        <Image style={cardsStyle.historyCard} source={require("../../assets/img/floresta.jpg")} />
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </SafeAreaView> 
    );

}