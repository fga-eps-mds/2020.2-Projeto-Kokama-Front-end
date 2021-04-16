import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
} from "react-native";
import React from "react";
import aboutStyle from "./styles";
import {AboutImages} from "../../components/AboutImages"

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
                            <Text>Andre Lucas</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Leonardo.png')}
                                style={aboutStyle.photos}
                            />
                            <Text>Leonardo Medeiros</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Lieverton.png')}
                                style={aboutStyle.photos}
                            />
                            <Text>Lieverton Santos</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Welison.jpeg')}
                                style={aboutStyle.photos}
                            />
                            <Text>Welison Almeida</Text>
                        </View>
                    </View>

                    <Text style={aboutStyle.texts}>Equipe de Desenvolvimento UnB:</Text>
                    <View style={aboutStyle.MDS}>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Ana.png')}
                                style={aboutStyle.photos}
                            />
                            <Text>Ana Júlia</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Fernando.png')}
                                style={aboutStyle.photos}
                            />
                            <Text>Fernando Vargas</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Lais.png')}
                                style={aboutStyle.photos}
                            />
                            <Text>Lais Portela</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Lucas.png')}
                                style={aboutStyle.photos}
                            />
                            <Text>Lucas Rodrigues</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Luis.png')}
                                style={aboutStyle.photos}
                            />
                            <Text>Luís Guilherme</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Luiz.png')}
                                style={aboutStyle.photos}
                            />
                            <Text>Luiz Gustavo</Text>
                        </View>
                    </View>

                    <Text style={aboutStyle.texts}>Apoiadores</Text>
                    <View style={aboutStyle.EPS}>
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