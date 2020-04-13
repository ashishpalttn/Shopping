import React from 'react';
import {
  ScrollView,
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {DATA, ABOUT_DATA, IMAGE_DATA} from './flateListData';
import {Login} from './Login';
import SignIn from './SignIn'
class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 1,
    };
  }
  updateState = ScreenNumber => {
    this.setState({toggle: ScreenNumber});
  };
  toogleTabs = () => {
    switch (this.state.toggle) {
      case 1:
        return <Main toggleScreen={this.updateState} />;
      case 2:
        return <Login toggleScreen={this.updateState} />;
      case 3:
        return <SignIn toggleScreen={this.updateState} />;
    }
  };
  render() {
    return <View style={{flex: 1}}>{this.toogleTabs()}</View>;
  }
}
export default Head;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      value: require('./assets/dp.png'),
      passwordShow: true,
      buttonName: 'Show',
      value: '',
    };
  }
  Item({title, id}) {
    return (
      <TouchableOpacity>
        <View style={styles.track}>
          <View style={styles.trackItem}>
            <Image style={styles.icon} source={{uri: id}} />
            <Text style={styles.trackText}>{title}</Text>
          </View>
          <View>
            <Image
              style={[styles.icon, {marginRight: 15}]}
              source={{uri: 'https://img.icons8.com/ios/2x/more-than.png'}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    console.log(this.props);
    let data = [
      {
        value: 10,
      },
      {
        value: 20,
      },
      {
        value: 40,
      },
    ];
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{width: '100%', backgroundColor: '#dbdbd9'}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Select profile pic!</Text>
                <FlatList
                  data={IMAGE_DATA}
                  renderItem={({item}) => {
                    return (
                      <View style={{flexDirection: 'row', margin: 10}}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({
                              value: item.imageId,
                              modalVisible: false,
                            });
                          }}>
                          <Image
                            style={{width: 80, height: 80}}
                            source={item.imageId}
                          />
                        </TouchableOpacity>
                        <Text style={{alignSelf: 'center', marginLeft: 20}}>
                          {item.name}
                        </Text>
                      </View>
                    );
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.setState({modalVisible: false});
                  }}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={styles.welcomeParentContainer}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcome}>Welcome!</Text>
              <TouchableOpacity onPress={() => this.props.toggleScreen(2)}>
                <Text style={styles.sign}>SIGN IN | JOIN</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({modalVisible: true});
                }}>
                <Image style={styles.profileImage} source={this.state.value} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gap} />
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <this.Item title={item.title} id={item.id} />
            )}
            keyExtractor={item => item.id}
          />
          <View style={styles.gap} />
          <TouchableOpacity>
            <View style={styles.track}>
              <View style={styles.trackItem}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: 'https://img.icons8.com/ios/2x/order-on-the-way.png',
                  }}
                />
                <Text style={styles.trackText}>Country</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={[styles.icon, {marginRight: 15}]}
                  source={{uri: 'https://img.icons8.com/color/2x/kuwait.png'}}
                />
                <Text style={styles.trackText}>AED</Text>
                <Image
                  style={[styles.icon, {marginRight: 15}]}
                  source={{uri: 'https://img.icons8.com/ios/2x/more-than.png'}}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.track}>
              <View style={styles.trackItem}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: 'https://img.icons8.com/ios/2x/translation.png',
                  }}
                />
                <Text style={styles.trackText}>Language</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.trackText}>ENG</Text>
                <Image
                  style={[styles.icon, {marginRight: 15}]}
                  source={{uri: 'https://img.icons8.com/ios/2x/more-than.png'}}
                />
              </View>
            </View>
          </TouchableOpacity>
          <FlatList
            data={ABOUT_DATA}
            renderItem={({item}) => (
              <this.Item title={item.title} id={item.id} />
            )}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  acount: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
    borderTopWidth: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
  },
  buttonView: {
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 50,
    marginRight: 20,
    paddingTop: 15,
    paddingRight: 18,
    paddingLeft: 0,
    marginTop: 20,
  },
  inputPass: {
    height: 50,
    width: 320.5,
    borderColor: 'gray',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginLeft: 20,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  inputEmail: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 15,
  },
  signInParentView: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  signInView: {
    borderBottomWidth: 3.5,
    paddingHorizontal: 10,
    paddingBottom: 16,
    borderColor: '#ffd78c',
  },
  loginModalParentView: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageView: {
    width: '100%',
    backgroundColor: 'white',
    height: 40,
    flexDirection: 'row-reverse',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcomeParentContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    height: 135,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  welcome: {
    marginLeft: 20,
    fontSize: 20,
  },
  imageContainer: {flex: 1, backgroundColor: 'white', justifyContent: 'center'},
  sign: {
    backgroundColor: '#ffffd4',
    marginLeft: 20,
    marginTop: 10,
    width: 120,
    padding: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    alignSelf: 'flex-end',
    marginRight: 30,
    borderRadius: 30,
  },
  track: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderBottomColor: '#dbdbd9',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  trackItem: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  trackText: {
    marginLeft: 20,
    marginTop: 3,
    fontSize: 20,
  },
  gap: {
    width: '100%',
    height: 18,
    backgroundColor: '#dbdbd9',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 80,
    backgroundColor: '#d7d9d7',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowOpacity: 0.25,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
