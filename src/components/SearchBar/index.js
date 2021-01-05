import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ onChangeTxt, val, onSubmit }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" style={styles.iconStyle} />
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
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  input: { fontSize: 16, flex: 1 },
  iconStyle: {
    fontSize: 35,
    color: "black",
    marginRight: 10,
  },
});
