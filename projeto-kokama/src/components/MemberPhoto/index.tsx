import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./styles";
import { MemberPhotoProps } from "./interface";

export default function MemberPhoto(props: MemberPhotoProps) {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <View style={styles.photo}>
      <TouchableWithoutFeedback onPress={() => setShowPhoto(!showPhoto)}>
        <Image source={props.photo} style={styles.photos} />
      </TouchableWithoutFeedback>
      {showPhoto ? <Text style={styles.text}>{props.name}</Text> : null}
    </View>
  );
}
