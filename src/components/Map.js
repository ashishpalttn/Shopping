import React from 'react';
import {SafeAreaView, StyleSheet, View, Text,ScrollView,ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export class Map extends React.Component {
  render() {
    // console.log('Map=', this.props.apiData);
    const data = this.props.apiData;
    console.log("data=",data)
    if(!data[0]){
        return (
            <View style={styles.indicator}>
              <ActivityIndicator size={'large'} color="green" />
            </View>
          );
    }
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>this.props.signOut()}>
        <View style={styles.buttonView}>
              <Text> Sign Out</Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          {data.map(item => (
            <View style={styles.item}>
              <Text>{item.storeId}</Text>
              <Text>{item.storeName}</Text>
              <Text>{item.city}</Text>
              <Text>{item.storeAddress}</Text>
              <Text>{item.zipCode}</Text>
              <Text>{item.concept.conceptId}</Text>
              <Text>{item.concept.conceptId}</Text>
              <Text>{item.retailer.retailerId}</Text>
              <Text>{item.retailer.retailerName}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        justifyContent: 'center',
      },
    buttonView:{
     alignItems:"center",
     padding:10,
     backgroundColor:"green",
     borderRadius:30,
     marginHorizontal:"30%"
    },
  item: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#cae0d0',
  },
});
