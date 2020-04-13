import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Storage extends React.Component {
  state = {
    value: '',
    txt: '',
  };

  storeData = () => { 
    AsyncStorage.setItem('Pal', this.state.txt)
    .then((res)=>{
      console.log(res)
    })
    console.log("getData")
  };

  getData = () => {
      // const value = await AsyncStorage.getItem('Pal');
      AsyncStorage.getItem('Pal').then((value)=>{
        console.log(value)
        this.setState({value});
      })
      console.log("done")
   
  };
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.storeData}>
          <Text>Click to save data</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.getData}>
          <Text>Click to display data</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputText}
          onChangeText={txt => this.setState({txt})}
        />
        <Text>{this.state.value}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  inputText: {
    height: 40,
    width: 150,
    backgroundColor: 'red',
    margin: 20,
  },
});

export default Storage