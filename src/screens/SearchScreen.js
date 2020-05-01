import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

const SearchScreen = ({navigation}) => {
  const [ searchText, setSearchText ] = useState('');
  const [ searchResults, error, searchApi ] = useResults()

  const filterResultsByPrice = (price) =>{
      return searchResults.slice().filter(result => result.price == price)
  }

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onSearchSubmit={() => searchApi(searchText)}
      />
      {error ? <Text>{error}</Text> : null}
    <ScrollView>
      <ResultList navigation = {navigation} results = {filterResultsByPrice("$")} title={"Cost Effective"}/>
      <ResultList navigation = {navigation} results = {filterResultsByPrice("$$")} title={"Bit Pricer"}/>
      <ResultList navigation = {navigation} results = {filterResultsByPrice("$$$")} title={"Big Spender"}/>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
});

export default SearchScreen;
