import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import useResults from "../../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.page}>
      <SearchBar
        onChangeTxt={(event) => setTerm(event)}
        val={term}
        onSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
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
