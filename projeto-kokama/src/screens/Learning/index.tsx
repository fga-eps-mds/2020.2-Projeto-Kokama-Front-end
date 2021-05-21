import {
    View,
    Text,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import cardsStyle from "./styles";


export default function Learning({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.push('Histórias do Povo Kokama')}>
                        <View>
                            <Text style={cardsStyle.cardTitle}>Histórias</Text>
                            <Image style={cardsStyle.cardImage} source={require("../../assets/img/story.jpg")} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.push('Atividades')}>
                        <View>
                            <Text style={cardsStyle.cardTitle}>Atividades</Text>
                            <Image style={cardsStyle.cardImage} source={require("../../assets/img/study.jpg")} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}