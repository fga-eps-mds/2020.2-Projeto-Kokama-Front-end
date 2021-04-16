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
                    
                    <Text style={aboutStyle.title}>Equipe de Gerência-UnB:</Text>
                    <View style={aboutStyle.EPS}>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Andre.png')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Andre Lucas</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Leonardo.png')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Leonardo Medeiros</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Lieverton.png')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Lieverton Santos</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Welison.jpeg')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Welison Almeida</Text>
                        </View>
                    </View>

                    <Text style={aboutStyle.title}>Equipe de Desenvolvimento UnB:</Text>
                    <View style={aboutStyle.MDS}>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Ana.png')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Ana Júlia</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Fernando.png')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Fernando Vargas</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Lais.png')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Lais Portela</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Lucas.png')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Lucas Rodrigues</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Luis.png')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Luís Guilherme</Text>
                        </View>
                        <View style={aboutStyle.photo}>
                            <Image source={require('../../assets/img/team-UnB/Luiz.png')}
                                style={aboutStyle.photos}
                            />
                            <Text style={aboutStyle.text}>Luiz Gustavo</Text>
                        </View>
                    </View>

                    <Text style={aboutStyle.title}>Apoiadores</Text>
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