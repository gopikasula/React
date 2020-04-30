import React from "react";
import { TextInput, StyleSheet, View , Text} from "react-native";
import {Feather}  from '@expo/vector-icons'
const SearchBar = ({searchText, onSearchTextChange, onSearchSubmit}) => {
  return <View> 
                    <View style = {styles.background}>
                            <Feather 
                                style = {styles.searchIcon}
                                name="search" 
                            />  
                            <TextInput 
                                style={styles.textInput}
                                placeholder = "Search"
                                vallue = {searchText}
                                onChangeText = {onSearchTextChange}
                                onEndEditing = {onSearchSubmit}
                            />
                        </View> 
                    <View><Text>{searchText}</Text></View>
             </View>
};

const styles = StyleSheet.create({
    background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 8,
    marginHorizontal: 15, 
    marginTop: 10,
    flexDirection: 'row'
  },
  textInput: {
      flex:1,
      fontSize: 18
  },
  searchIcon:{
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
    borderColor:'black'
   }
});

export default SearchBar;
