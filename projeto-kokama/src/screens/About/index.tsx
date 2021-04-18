import {
    View, Text, TouchableWithoutFeedback, Image, ScrollView, SafeAreaView,
} from "react-native";
import React, {useState} from "react";
import aboutStyle from "./styles";

const andre='../../assets/img/team-UnB/Andre.png'
const leonardo='../../assets/img/team-UnB/Leonardo.png'
const lieverton='../../assets/img/team-UnB/Lieverton.png'
const welison='../../assets/img/team-UnB/Welison.jpeg'
const ana='../../assets/img/team-UnB/Ana.png'
const fernando='../../assets/img/team-UnB/Fernando.png'
const lais='../../assets/img/team-UnB/Lais.png'
const lucas='../../assets/img/team-UnB/Lucas.png'
const luis='../../assets/img/team-UnB/Luis.png'
const luiz='../../assets/img/team-UnB/Luiz.png'

export default function About({ navigation }) {
    const [shouldShow, setshouldShow] = useState(false);
    const [shouldShow1, setshouldShow1] = useState(false);
    const [shouldShow2, setshouldShow2] = useState(false);
    const [shouldShow3, setshouldShow3] = useState(false);
    const [shouldShow4, setshouldShow4] = useState(false);
    const [shouldShow5, setshouldShow5] = useState(false);
    const [shouldShow6, setshouldShow6] = useState(false);
    const [shouldShow7, setshouldShow7] = useState(false);
    const [shouldShow8, setshouldShow8] = useState(false);
    const [shouldShow9, setshouldShow9] = useState(false);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={aboutStyle.container}>
{/* ================EPS=============== */}
                    <Text style={aboutStyle.title}>Equipe de Gerência-UnB:</Text>
                    <View style={aboutStyle.EPS}>
                        <View style={aboutStyle.photo}>
                            <TouchableWithoutFeedback
                                onPress={() => setshouldShow(!shouldShow)}
                            >
                                <Image source={require(andre)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow ? (
                                    <Text style={aboutStyle.text}>Andre</Text>
                                ) : null
                            }
                        </View>
                        <View style={aboutStyle.photo}>
                            <TouchableWithoutFeedback
                                onPress={() => setshouldShow1(!shouldShow1)}
                            >
                                <Image source={require(leonardo)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow1 ? (
                                    <Text style={aboutStyle.text}>Leonardo</Text>
                                ) : null
                            }
                        </View>
                        <View style={aboutStyle.photo}>
                            <TouchableWithoutFeedback
                                onPress={() => setshouldShow2(!shouldShow2)}
                            >
                                <Image source={require(lieverton)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow2 ? (
                                    <Text style={aboutStyle.text}>Lieverton</Text>
                                ) : null
                            }
                        </View>
                        <View style={aboutStyle.photo}>
                        <TouchableWithoutFeedback
                                onPress={() => setshouldShow3(!shouldShow3)}
                            >
                                <Image source={require(welison)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow3 ? (
                                    <Text style={aboutStyle.text}>Welison</Text>
                                ) : null
                            }
                        </View>
                    </View>
{/* ================MDS=============== */}
                    <Text style={aboutStyle.title}>Equipe de Desenvolvimento-UnB:</Text>
                    <View style={aboutStyle.MDS}>
                        <View style={aboutStyle.photo}>
                            <TouchableWithoutFeedback
                                onPress={() => setshouldShow4(!shouldShow4)}
                            >
                                <Image source={require(ana)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow4 ? (
                                    <Text style={aboutStyle.text}>Ana</Text>
                                ) : null
                            }
                        </View>
                        <View style={aboutStyle.photo}>
                            <TouchableWithoutFeedback
                                onPress={() => setshouldShow5(!shouldShow5)}
                            >
                                <Image source={require(fernando)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow5 ? (
                                    <Text style={aboutStyle.text}>Fernando</Text>
                                ) : null
                            }
                        </View>
                        <View style={aboutStyle.photo}>
                            <TouchableWithoutFeedback
                                onPress={() => setshouldShow6(!shouldShow6)}
                            >
                                <Image source={require(lais)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow6 ? (
                                    <Text style={aboutStyle.text}>Lais</Text>
                                ) : null
                            }
                        </View>
                        <View style={aboutStyle.photo}>
                            <TouchableWithoutFeedback
                                onPress={() => setshouldShow7(!shouldShow7)}
                            >
                                <Image source={require(lucas)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow7 ? (
                                    <Text style={aboutStyle.text}>Lucas</Text>
                                ) : null
                            }
                        </View>
                        <View style={aboutStyle.photo}>
                            <TouchableWithoutFeedback
                                onPress={() => setshouldShow8(!shouldShow8)}
                            >
                                <Image source={require(luis)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow8 ? (
                                    <Text style={aboutStyle.text}>Luis</Text>
                                ) : null
                            }
                        </View>
                        <View style={aboutStyle.photo}>
                            <TouchableWithoutFeedback
                                onPress={() => setshouldShow9(!shouldShow9)}
                            >
                                <Image source={require(luiz)}style={aboutStyle.photos}/>
                            </TouchableWithoutFeedback>
                            {
                                shouldShow9 ? (
                                    <Text style={aboutStyle.text}>Luiz</Text>
                                ) : null
                            }
                        </View>
                    </View>

                    <Text style={aboutStyle.title}>Apoiadores</Text>
                    <View style={aboutStyle.apoiadores}>
                        <Image source={require('../../assets/img/UnB-Logo.png')} 
                            style={aboutStyle.UnB}
                        />
                        <Image source={require('../../assets/img/Nova-Cartografia.png')}
                            style={aboutStyle.NovaCartografia}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}