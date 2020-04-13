import React from 'react';
import {SafeAreaView, StyleSheet, View, Text,ScrollView} from 'react-native';
export class Map extends React.Component {
  render() {
    // console.log('Map=', this.props.apiData);
    const data = this.props.apiData;
    console.log("data=",data)
    return (
      <SafeAreaView style={styles.container}>
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
