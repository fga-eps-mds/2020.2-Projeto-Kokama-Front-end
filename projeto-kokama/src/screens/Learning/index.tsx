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
                    <TouchableWithoutFeedback testID = 'history'
                        onPress={() => navigation.push('Histórias do Povo Kokama')}>
                        <Image style={cardsStyle.historyCard} source={require("../../assets/img/floresta.jpg")} />
                    </TouchableWithoutFeedback>
                    <Text style={cardsStyle.cardTitle}>Atividades</Text>
                    <TouchableWithoutFeedback testID = 'activity'
                        onPress={() => navigation.push('Atividades')}>
                        <Image style={cardsStyle.historyCard} source={require("../../assets/img/study.jpg")} />
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}