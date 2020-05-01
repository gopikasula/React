import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style = {styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.title}>{result.name}</Text>
     <Text>{result.rating} Stars, {result.review_count} Reviews </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      marginLeft: 15
  } , 
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  image:{
      width: 250,
      height:120,
      borderRadius: 4,
      marginBottom: 5
  }
});
