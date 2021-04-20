import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import aboutStyle from "./styles";
import UserPhoto from "../../components/MemberPhoto";
import { membersEPS, membersMDS } from "./membersData";

export default function About() {
  return (
    <SafeAreaView style={aboutStyle.container}>
      <ScrollView>
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
