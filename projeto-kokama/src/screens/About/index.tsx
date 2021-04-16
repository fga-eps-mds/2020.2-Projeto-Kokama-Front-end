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
                    
                    <Text style={aboutStyle.texts}>Equipe de Gerência-UnB:</Text>
                    <View style={aboutStyle.EPS}>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Andre.png')}
                                style={aboutStyle.photos}
                            />
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Leonardo.png')}
                                style={aboutStyle.photos}
                            />
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Lieverton.png')}
                                style={aboutStyle.photos}
                            />
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Welison.jpeg')}
                                style={aboutStyle.photos}
                            />
                        </View>
                    </View>

                    <Text style={aboutStyle.texts}>Equipe de Desenvolvimento UnB:</Text>
                    <View style={aboutStyle.MDS}>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Ana.png')}
                                style={aboutStyle.photos}
                            />
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Fernando.png')}
                                style={aboutStyle.photos}
                            />
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Lais.png')}
                                style={aboutStyle.photos}
                            />
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Lucas.png')}
                                style={aboutStyle.photos}
                            />
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Luis.png')}
                                style={aboutStyle.photos}
                            />
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Luiz.png')}
                                style={aboutStyle.photos}
                            />
                        </View>
                    </View>

                    <Text style={aboutStyle.texts}>Apoiadores</Text>
                    <View style={aboutStyle.teams}>
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