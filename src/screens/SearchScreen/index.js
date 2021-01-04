import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.page}>
      <SearchBar
        onChangeTxt={(event) => setSearch(event)}
        val={search}
        onSubmit={() => console.log("finish")}
      />
      <Text>wawdawdawd</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  page: {
    padding: 20,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
