import {View, Text, TextInput, TouchableWithoutFeedback, ScrollView, SafeAreaView, Button,} from "react-native";
import React, { useState } from "react";
import storyStyle from "./styles";

export default function StoryScreen(){
    return(
        <View style={storyStyle.userInput}>
            <TextInput
                style={storyStyle.textBox}
                placeholder="Toque para pesquisar"
            />            
        </View>
    );
}