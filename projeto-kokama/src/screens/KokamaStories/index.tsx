import {View, Text, TextInput, TouchableWithoutFeedback, ScrollView, SafeAreaView, Button,} from "react-native";
import React, { useState } from "react";
import storyStyle from "./styles";
import TopMenu from "../../components/TopMenu";


export default function StoryScreen(){
    return(
        <View>
            <View style={{ alignItems: "center" }}>
                <Button 
                title="Adicionar Nova História" >
                </Button>
            </View>
        </View>
    );
}