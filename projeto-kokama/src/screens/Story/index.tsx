import {
    View,
    Text,
    ScrollView,
} from "react-native";
import React from "react";
import styles from "./styles";

export default function Story({ route }) {
    const { story } = route.params;

    return (
        <ScrollView style={styles.container}>
            {route.params.language == "Kokama" && (
                <View>
                    <Text style={styles.titleField}>
                        {story.title_kokama}
                    </Text>
                    <Text style={styles.textField}>
                        {story.text_kokama}
                    </Text>
                    <Text style={styles.titleField}>
                        {story.title_portuguese}
                    </Text>
                    <Text style={styles.textField}>
                        {story.text_portuguese}
                    </Text>
                </View>
            ) || (
                    <View>
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
                )}
        </ScrollView>
    );
}