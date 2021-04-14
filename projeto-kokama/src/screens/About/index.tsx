import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
} from "react-native";
import React from "react";
import aboutStyle from "./styles";

export default function About({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={aboutStyle.container}>

                    <View style={aboutStyle.apoiadores}>
                        <Text style={aboutStyle.texts}>Apoiadores</Text>
                        <Image source={require('../../assets/img/UnB.jpg')} 
                            style={aboutStyle.UnB}
                        />
                        <Image source={require('../../assets/img/Nova-Cartografia.jpeg')}
                            style={aboutStyle.NovaCartografia}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}