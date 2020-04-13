import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
export default class ApiFetch extends React.Component {
  state = {
    data: null,
  };

  fetch=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(responce => {
        return responce.json();
      })
      .then(data => {
        this.setState({data});
        // console.log(data)
      });
    };

  componentDidMount() {
      this.fetch()
  }
  Item = ({title}) => {
    // console.log('item= ',title)
    return (
      <View>
        <View style={styles.itemView}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20}}>User = </Text>
            <Text style={{fontSize: 20, marginRight: 50}}>
              {title.item.userId}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20}}> Id = </Text>
            <Text style={{fontSize: 20}}>{title.item.id}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20}}>Title = </Text>
            <Text style={{fontSize: 20, paddingRight: 65}}>
              {title.item.title}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20}}>Body = </Text>
            <Text style={{fontSize: 20, paddingRight: 60}}>
              {title.item.body}
            </Text>
          </View>
        </View>
        <View style={styles.line} />
      </View>
    );
  };
  render() {
    if (!this.state.data) {
      return (
        <View style={styles.indicator}>
          <ActivityIndicator size={'large'} color="red" />
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={(title)=> this.Item({title})}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d4cf',
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
  itemView:{
    backgroundColor: '#d0d4cf', 
    padding: 10
  },
  line:{width: '100%', 
  height: 2, 
  backgroundColor: '#a9aba9'
  }
});
