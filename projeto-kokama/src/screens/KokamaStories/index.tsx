import {View, Text, TextInput, TouchableWithoutFeedback, ScrollView, SafeAreaView, Button,} from "react-native";
import React, { useState } from "react";
import storyStyle from "./styles";
import TopMenu from "../../components/TopMenu";


export default function StoryScreen({ navigation }){
    return(
        <View>
            <TopMenu name="Histórias do Povo Kokama" />
            <View style={{ alignItems: "center" }}>
                <Text style={{ textAlign: "center" }}>Historia do Povo Kokama</Text>
                <Button 
                title="KokamaStories" 
                onPress={ () => navigation.navigate('KokamaStories')} >
                </Button>
            </View>
        </View>
    );
}