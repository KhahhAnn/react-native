import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import reactLogo from "../assets/react-1-logo-png-transparent.png";
const coures = [
   {
      headerText: "React Course",
      descriptionText: "Course about how to write the React Web framework",
   },
   {
      headerText: "React Native Course",
      descriptionText: "Course about how to write the Mobile App in IOS and Android by using React-Native",
   },
   {
      headerText: "Redux Course",
      descriptionText: "Course about a predictable state container for JavaScript app(aka Redux) which is help the application",
   }
]
const Ex = () => {
   return (
      <View style={styles.container}>
         {
            coures.map((coure, index) => (
               <View key={index} style={styles.row}>
                  <Image style={styles.image} source={reactLogo} />
                  <View style={styles.textContainer}>
                     <Text style={styles.headerText}>{coure.headerText}</Text>
                     <Text style={styles.descriptionText}>{coure.descriptionText}</Text>
                  </View>
               </View>
            ))
         }
      </View>

      // <View style={styles.container} >
      //    <View style={styles.row}>
      //       <Image style={styles.image} source={reactLogo} />
      //       <View style={styles.textContainer}>
      //          <Text style={styles.headerText}>React Course.</Text>
      //          <Text style={styles.descriptionText}>Course about how to write the React Web framework</Text>
      //       </View>
      //    </View>
      //    <View style={styles.row}>
      //       <Image style={styles.image} source={reactLogo} />
      //       <View style={styles.textContainer}>
      //          <Text style={styles.headerText}>React Course.</Text>
      //          <Text style={styles.descriptionText}>Course about how to write the React Web framework</Text>
      //       </View>
      //    </View>
      //    <View style={styles.row}>
      //       <Image style={styles.image} source={reactLogo} />
      //       <View style={styles.textContainer}>
      //          <Text style={styles.headerText}>React Course.</Text>
      //          <Text style={styles.descriptionText}>Course about how to write the React Web framework</Text>
      //       </View>
      //    </View>
      // </View>
   );
}

const styles = StyleSheet.create({
   container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      marginTop: 50
   },
   row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      flexWrap: "no-wrap",
      marginTop: 20
   },
   image: {
      width: 100,
      height: 100,
      marginRight: 10
   },
   textContainer: {
      marginTop: 10,
      flex: 1,
   },
   descriptionText: {
      flexShrink: 1,
      marginRight: 5
   },
   headerText: {
      fontSize: 20,
      fontWeight: "700"
   }
});
export default Ex