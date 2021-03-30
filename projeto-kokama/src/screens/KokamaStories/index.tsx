import {View, Text, TextInput, TouchableWithoutFeedback, ScrollView, SafeAreaView,} from "react-native";
import React, { useState } from "react";
import storyStyle from "./styles";
import TopMenu from "../../components/TopMenu";

const Stories = () => {

    function StoryScreen(){



    }

    return(
        <SafeAreaView>    
            <ScrollView
                style={storyStyle.container}
                keyboardShouldPersistTaps={"always"}
            >

                <TopMenu name="Histórias do Povo Kokama" />

                <View style={{ alignItems: "center" }}>
                    <Text style={{ textAlign: "center" }}>Historia do Povo Kokama</Text>
                </View>
            </ScrollView>    
        </SafeAreaView>
    )
}
export default Stories;