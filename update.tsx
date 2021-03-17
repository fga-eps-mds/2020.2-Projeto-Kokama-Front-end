import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import "http://demo4880447.mockable.io/api-contador";
import "./words.tsx";
    
    var a = "./words.tsx";
    var b = "http://demo4880447.mockable.io/api-contador";

    function arraysIdentical(a, b) {
    var i = a.length;
    if (i != b.length) return false;
    // while (i--) {
    //     if (a[i] !== b[i]) return false;
    // }
    return true;
    };

    function update(language:string) {
    
        if (arraysIdentical(a,b) == true){
            a=b;
        }

    
    }

// function update(language:string) {
//    if(Array.prototype.equals)
//     console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// // attach the .equals method to Array's prototype to call it on any array
// Array.prototype.equals = function (array) {
//     // if the other array is a falsy value, return
//     if (!a2)
//         return false;

//     // compare lengths - can save a lot of time 
//     if (a1.length != a2.length)
//         return false;

//     for (var i = 0, l=a1.length; i < l; i++) {
//         // Check if we have nested arrays
//         if (a1[i] instanceof Array && a2[i] instanceof Array) {
//             // recurse into the nested arrays
//             if (!a1[i].equals(a2[i]))
//                 return false;       
//         }           
//         else if (a1[i] != a2[i]) { 
//             // Warning - two different object instances will never be equal: {x:20} != {x:20}
//             return false;   
//         }           
//     }       
//     return true;
// }
// // Hide method from for-in loops
// Object.defineProperty(Array.prototype, "equals", {enumerable: false}); 
//     }
// }

