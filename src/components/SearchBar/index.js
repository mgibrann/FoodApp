import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ onChangeTxt, val, onSubmit }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={30} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.input}
        onChangeText={onChangeTxt}
        value={val}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    width: "100%",
    flexDirection: "row",
    padding: 5,
    borderRadius: 10,
  },
  input: { marginLeft: 15, width: "90%" },
});
