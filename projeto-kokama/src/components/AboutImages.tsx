import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";


const styles = StyleSheet.create({
 
    photo: {
        display: 'flex',
    },
    photos: {
        maxHeight: 80,
        maxWidth: 80,
        borderRadius: 250,
    },
});
const imagesEPS = [
    {
      name: "Andre Lucas",
      image: '../../assets/img/team-UnB/Andre.png'
    },
    {
      name: "Leonardo Medeiros",
      image: '../../assets/img/team-UnB/Leonardo.png'
    },
    {
      name: "Lieverton Santos",
      image: '../../assets/img/team-UnB/Lieverton.png'
    },
    {
      name: "Welison Almeida",
      image: '../../assets/img/team-UnB/Welison.png'
    }
];
const imagesMDS = [
    {
      name: "Ana Júlia",
      image: '../../assets/img/team-UnB/Ana.png'
    },
    {
      name: "Fernando Vargas",
      image: '../../assets/img/team-UnB/Fernando.png'
    },
    {
      name: "Lais Portela",
      image: '../../assets/img/team-UnB/Lais.png'
    },
    {
      name: "Lucas Rodrigues",
      image: '../../assets/img/team-UnB/Lucas.png'
    },
    {
      name: "Luís Guilherme",
      image: '../../assets/img/team-UnB/Luis.png'
    },
    {
      name: "Luiz Gustavo",
      image: '../../assets/img/team-UnB/Luiz.png'
    }
];

return (
    <div className="Index">
      {images.map(item => (
        <div key={item.id}>
          <img src={require(`${item.image}`)} alt="imagemMDS" />
        </div>
      ))}
    </div>