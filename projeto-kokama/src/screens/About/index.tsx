import { View, Text, Image, ScrollView, SafeAreaView, TouchableWithoutFeedback, Linking } from "react-native";
import React, { useCallback } from "react";
import aboutStyle from "./styles";
import UserPhoto from "../../components/MemberPhoto";
import { teachers, membersEPS, membersMDS, membersTranslation } from "./membersData";
import Colors from "../../assets/Colors";

export default function About() {

  const wikiURL = "https://fga-eps-mds.github.io/2020.2-Projeto-Kokama-Wiki/"
  const redirectTo = useCallback(async () => {
    await Linking.openURL(wikiURL);
  }, []);

  return (
    <SafeAreaView style={aboutStyle.container}>
      <ScrollView>
        <Text style={[aboutStyle.title, {fontSize: 25}]}>Sobre:</Text>
        <View style={aboutStyle.about_view}>
          <Text style={aboutStyle.about_text}>
            O novo aplicativo Kokama é resultado das parcerias: do movimento de vitalização da língua Kokama,
            coordenado por Altaci Corrêa Rubim, Kokama; da universidade de Brasília-UnB, por meio do Campus Gama
            com os estudantes do curso Engenharia de Software; do campus Darcy Ribeiro, com os estudantes do curso
            de licenciatura de Português do Brasil como Segunda Língua-PBSL; da Universidade do Estado do Amazonas-UEA,
            por meio do Projeto Nova Cartografia Social da Amazônia e demais colaboradores.
          </Text>
          <Text style={aboutStyle.about_text}>
            O App Kokama Kinkin-APKKK tem como referência: o dicionário Kukama-Kukamiria, elaborado por Rosa Vallejos e
            Rosa Amias, do Peru, além de dados coletados nas oficinas de ensino e aprendizagem da língua Kokama.
          </Text>
          <Text style={aboutStyle.about_text}>
            O APP Kokama Kinkin é um aplicativo para smartphone que contribuirá com a política de vitalização da língua
            Kokama. Apresenta vocabulário contextualizado, atividades pedagógicas, além de possibilitar a
            atualização de dados pelos próprios Kokama.
          </Text>
          <Text style={aboutStyle.about_text}>
            Nossos mais sinceros agradecimentos ao prof. Hilmer Rodrigues Neri (UnB), ao prof. Alfredo Wagner Berno
            de Almeida (UEA) e, também, aos estudantes e colaboradores do projeto.
          </Text>
          <TouchableWithoutFeedback onPress={redirectTo}>
            <Text style={aboutStyle.about_text}>
              Para saber mais, acesse a <Text style={{ color: Colors.RED }}>página do projeto</Text>.
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <Text style={aboutStyle.title}>Professores:</Text>

        <View style={aboutStyle.photoSection}>
          {teachers.map((teacher) => (
            <UserPhoto
              key={teacher.name}
              name={teacher.name}
              photo={teacher.photo}
            />
          ))}
        </View>

        <Text style={aboutStyle.title}>Equipe de Tradução:</Text>

        <View style={aboutStyle.photoSection}>
          {membersTranslation.map((memberTranslation) => (
            <UserPhoto
              key={memberTranslation.name}
              name={memberTranslation.name}
              photo={memberTranslation.photo}
            />
          ))}
        </View>

        <Text style={aboutStyle.title}>Equipe de Gerência - UnB:</Text>
        <View style={aboutStyle.photoSection}>
          {membersEPS.map((memberEPS) => (
            <UserPhoto
              key={memberEPS.name}
              name={memberEPS.name}
              photo={memberEPS.photo}
            />
          ))}
        </View>

        <Text style={aboutStyle.title}>Equipe de Desenvolvimento - UnB:</Text>
        <View style={aboutStyle.photoSection}>
          {membersMDS.map((memberMDS) => (
            <UserPhoto
              key={memberMDS.name}
              name={memberMDS.name}
              photo={memberMDS.photo}
            />
          ))}
        </View>

        <Text style={aboutStyle.title}>Apoiadores</Text>
        <View style={aboutStyle.photoSection}>
          <Image
            source={require("../../assets/img/UnB-Logo.png")}
            style={aboutStyle.UnB}
          />
          <Image
            source={require("../../assets/img/Nova-Cartografia.png")}
            style={aboutStyle.NovaCartografia}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
