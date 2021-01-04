import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ResultsList from "../../components/ResultsList";
import SearchBar from "../../components/SearchBar";
import useResults from "../../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  console.log(results);

  return (
    <View style={styles.page}>
      <SearchBar
        onChangeTxt={(event) => setTerm(event)}
        val={term}
        onSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
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
