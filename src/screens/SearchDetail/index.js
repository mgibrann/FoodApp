import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../../api";

const SearchDetail = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params;

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  if (!result) {
    console.log(result === null);
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.img} />;
        }}
      />
      <Text>{result.name}</Text>
    </View>
  );
};

export default SearchDetail;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 120,
  },
});
