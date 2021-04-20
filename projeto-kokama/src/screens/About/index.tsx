import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import aboutStyle from "./styles";
import UserPhoto from "../../components/MemberPhoto";
import { membersEPS, membersMDS } from "./membersData";

export default function About() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={aboutStyle.container}>
          <Text style={aboutStyle.title}>Equipe de Gerência-UnB:</Text>
          <View style={aboutStyle.EPS}>
            {membersEPS.map((member) => (
              <UserPhoto
                key={member.name}
                name={member.name}
                photo={member.photo}
              />
            ))}
          </View>
          <Text style={aboutStyle.title}>Equipe de Desenvolvimento-UnB:</Text>
          <View style={aboutStyle.MDS}>
            {membersMDS.map((member) => (
              <UserPhoto
                key={member.name}
                name={member.name}
                photo={member.photo}
              />
            ))}
          </View>
          <Text style={aboutStyle.title}>Apoiadores</Text>
          <View style={aboutStyle.apoiadores}>
            <Image
              source={require("../../assets/img/UnB-Logo.png")}
              style={aboutStyle.UnB}
            />
            <Image
              source={require("../../assets/img/Nova-Cartografia.png")}
              style={aboutStyle.NovaCartografia}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
