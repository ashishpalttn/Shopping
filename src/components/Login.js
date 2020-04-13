import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Map} from './Map';
export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonName: 'Show',
      passwordShow: true,
      username: '',
      password: '',
      responce: 403,
      token: '',
      data: [],
    };
  }
  storeData = token => {
    AsyncStorage.setItem('token', token).then(res => {
      console.log('token stored', token);
    });
  };
  getData = () => {
    // const value = await AsyncStorage.getItem('token');
    AsyncStorage.getItem('token').then(storeToken => {
      this.setState({token: storeToken});
      console.log('Token got', this.state.token);
      this.dataApi();
    });
  };

  authenticationApi = () => {
    fetch(
      'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-security/login',

      {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      },
    ).then(responce => {
      // console.log("Token=",responce.headers.map.authorization);
      // this.setState({token:responce.headers.map.authorization})
      let token = responce.headers.map.authorization;
      token = token.slice(7);
      this.storeData(token);
      this.setState({responce: responce.status});
      this.getData();

      return responce.json();
    });
    // .then((data)=>{
    //   this.setState({data})
    // })
  };

  dataApi = () => {
    fetch(
      'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
      {
        method: 'GET',
        headers: {
          authorization: this.state.token,
        },
      },
    )
      .then(responce => {
        // console.log("DATA Api= ",responce)
        return responce.json();
      })
      .then(data => {
        this.setState({data});
        // console.log('Api Data=',data)
      });
  };

  render() {
    console.log('storedToken=', this.state.token);
    if (this.state.responce == 403) {
      return (
        <SafeAreaView style={styles.loginModalParentView}>
          <View style={styles.imageView}>
            <TouchableOpacity onPress={() => this.props.toggleScreen(1)}>
              <Image
                style={styles.cross}
                source={{uri: 'https://img.icons8.com/ios/2x/multiply.png'}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.signInParentView}>
            <TouchableOpacity>
              <View style={styles.signInView}>
                <Text style={{fontSize: 22}}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.toggleScreen(3)}>
              <Text style={styles.join}>Join</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder={'Your Email Address'}
              autoCompleteType="username"
              onChangeText={username => this.setState({username})}
              value={this.state.username}
              style={styles.inputEmail}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              placeholder="Password"
              onChangeText={password => this.setState({password})}
              secureTextEntry={this.state.passwordShow}
              value={this.state.password}
              style={[styles.inputPass]}
            />
            <View style={styles.buttonView}>
              <Text
                style={[styles.passButton]}
                onPress={() => {
                  this.state.passwordShow == false
                    ? this.setState({passwordShow: true, buttonName: 'Show'})
                    : this.setState({passwordShow: false, buttonName: 'Hide '});
                }}>
                {this.state.buttonName}
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Text>Forget Passords?</Text>
          </View>
          <View style={styles.signInButtonView}>
            <TouchableOpacity onPress={this.authenticationApi}>
              <Text style={{fontSize: 20, color: 'white'}}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Text>Or Sign In via</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: 10,
              marginTop: 20,
            }}>
            <View>
              <TouchableOpacity>
                <View style={styles.facebook}>
                  <Image
                    style={styles.facebookImage}
                    source={{
                      uri:
                        'https://cdn1.iconfinder.com/data/icons/logotypes/32/facebook-128.png',
                    }}
                  />
                  <Text style={{margin: 10, fontSize: 20}}>Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={styles.facebook}>
                  <Image
                    style={{width: 40, height: 40}}
                    source={{
                      uri:
                        'https://cdn0.iconfinder.com/data/icons/social-network-7/50/2-128.png',
                    }}
                  />
                  <Text style={{margin: 10, fontSize: 20}}>Google</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end', flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                this.props.toggleScreen(3);
              }}>
              <View style={styles.acount}>
                <Text style={{fontSize: 16, color: '#6e6e6e'}}>
                  {/* {' '} */}
                  Don't have an account?
                </Text>
                <Text style={{fontSize: 18}}> Join</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    } else if (this.state.responce == 200) {
      // console.log('LoginData=',this.state.data)
      return <Map apiData={this.state.data} />;
    }
  }
}

const styles = StyleSheet.create({
  joinNowView: {
    backgroundColor: 'black',
    paddingVertical: 17,
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonView: {
    backgroundColor: 'black',
    paddingVertical: 17,
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  inputView: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    marginTop: 30,
  },
  drop: {marginTop: -27, width: 60, margin: 2},
  checks: {width: 22, height: 22, marginRight: 10},
  country: {width: 25, height: 25, marginVertical: 10},
  facebookImage: {width: 30, height: 30, marginTop: 7},
  facebook: {flexDirection: 'row', borderWidth: 1, paddingLeft: 30},
  cross: {width: 40, height: 40, marginRight: 15},
  checkButtons: {marginHorizontal: 23, flexDirection: 'row', marginTop: 20},
  maleParentView: {marginHorizontal: 20, flexDirection: 'row', marginTop: 15},
  inputText: {
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    marginTop: 20,
  },
  join: {fontSize: 22, color: '#bfbdb8', marginRight: 10},
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
    // alignItems:'center',
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
