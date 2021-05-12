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
                    <Text style={styles.titleField}>
                        {story.title_portuguese}
                    </Text>
                    <Text style={styles.textField}>
                        {story.text_portuguese}
                    </Text>
                    <Text style={styles.titleField}>
                        {story.title_kokama}
                    </Text>
                    <Text style={styles.textField}>
                        {story.text_kokama}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}