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
                <View style={{ alignItems: "flex-start" }}>
                    <Text style={cardsStyle.cardTitle}>Histórias</Text>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.push('Histórias do Povo Kokama')}>
                        <Image style={cardsStyle.historyCard} source={require("../../assets/img/floresta.jpg")} />
                    </TouchableWithoutFeedback>
                    <Text style={cardsStyle.cardTitle}>Atividades</Text>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.push('Atividades')}>
                        <Image style={cardsStyle.historyCard} source={require("../../assets/img/floresta.jpg")} />
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}