import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import aboutStyle from "./styles";
import UserPhoto from "../../components/MemberPhoto";
import { membersEPS, membersMDS, membersTranslation } from "./membersData";

export default function About() {
  return (
    <SafeAreaView style={aboutStyle.container}>
      <ScrollView>
        <Text style={aboutStyle.title}>Sobre:</Text>
        <View style={aboutStyle.about_view}>
          <Text style={aboutStyle.about_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>

        <Text style={aboutStyle.title}>Equipe de Tradução:</Text>
        <View style={aboutStyle.photoSection}>
          {membersTranslation.map((membersTranslation) => (
            <UserPhoto
              key={membersTranslation.name}
              name={membersTranslation.name}
              photo={membersTranslation.photo}
            />
          ))}
        </View>
        <Text style={aboutStyle.title}>Equipe de Gerência-UnB:</Text>
        <View style={aboutStyle.photoSection}>
          {membersEPS.map((memberEPS) => (
            <UserPhoto
              key={memberEPS.name}
              name={memberEPS.name}
              photo={memberEPS.photo}
            />
          ))}
        </View>
        <Text style={aboutStyle.title}>Equipe de Desenvolvimento-UnB:</Text>
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
