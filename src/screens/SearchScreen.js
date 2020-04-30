import React, {useState} from "react";
import { Text, StyleSheet } from "react-native";
import SearchBar from '../components/SearchBar'
const SearchScreen = () => {
  const [searchText, setSearchText] = useState('')
  const onSearchSubmit = () => console.log('submit')
  return <SearchBar 
                searchText = {searchText}
                onSearchTextChange = {setSearchText}
                onSearchSubmit = {onSearchSubmit}
            />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
