import {
    View, 
    Text, 
    ScrollView, 
    SafeAreaView
} from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { KokamaStories } from "../KokamaStories/interface"

export default function Story(props:KokamaStories){
    return(
        <SafeAreaView>
            <ScrollView
            style={styles.container}
            >
                <Text style={styles.textField}>
                    Mito nº 01 do povo Kokama
                </Text>
                <Text style={styles.textField}>
                    Descrição do mito nº 01 do povo Kokama, Descrição do mito nº 01 do povo Kokama, Descrição do mito nº 01 do povo Kokama, Descrição do mito nº 01 do povo Kokama.
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
}