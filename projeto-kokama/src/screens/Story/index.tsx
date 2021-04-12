import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
} from "react-native";
import React from "react";
import styles from "./styles";

export default function Story({ route, navigation }) {
    const { story } = route.params;

    return( 
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.textField}>
                        {story.titulo}
                    </Text>
                    <Text style={styles.textField}>
                        {story.texto}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}