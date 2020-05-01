import React, { useState, useEffect } from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import yelp from "../api/yelp";

const ResultShow = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [{ name, images }, setImages] = useState({ name: "", images: [] });
  const getResturantDetails = async (id) => {
    const response = await yelp.get("/" + id);
    setImages({ name: response.data.name, images: response.data.photos });
  };

  useEffect(() => {
    getResturantDetails(id);
  }, []);

  return (
    <>
      <Text>{name}</Text>
      <View>
        {images.slice().map((imageURL, idx) => (
          <Image style={styles.image} key={idx} source={{ uri: imageURL }} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  image: {
    height: 150,
    marginVertical: 10,
    width: 250,
  },
});

export default ResultShow;
