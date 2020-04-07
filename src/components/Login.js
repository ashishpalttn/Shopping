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
import {Dropdown} from 'react-native-material-dropdown';
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonName: 'Show',
      passwordShow: true,
      value: '',
    };
  }
  render() {
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
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            marginTop: 30,
          }}>
          <TextInput
            placeholder={'Your Email Address'}
            onChangeText={value => this.setState({value})}
            value={this.state.value}
            style={styles.inputEmail}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            placeholder="Password"
            secureTextEntry={this.state.passwordShow}
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
        <View
          style={{
            backgroundColor: 'black',
            paddingVertical: 17,
            marginHorizontal: 20,
            alignItems: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity>
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
              this.props.a(3);
            }}>
            <View style={styles.acount}>
              <Text style={{fontSize: 16, color: '#6e6e6e'}}>
                {' '}
                Don't have an account?
              </Text>
              <Text style={{fontSize: 18}}> Join</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export class SignIn extends React.Component {
  radioNot =
    'https://cdn3.iconfinder.com/data/icons/materia-interface-vol-2/24/008_083_radio_button_unchecked_control-128.png';
  radio =
    'https://cdn3.iconfinder.com/data/icons/materia-interface-vol-2/24/008_082_radio_button_checked_control-128.png';
  check =
    'https://cdn4.iconfinder.com/data/icons/social-productivity-line-art-4/128/checkbox-square-checked-128.png';
  notCheck =
    'https://cdn4.iconfinder.com/data/icons/social-productivity-line-art-4/128/checkbox-square-unchecked-128.png';
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      passwordShow: true,
      buttonName: 'Show',
      checkButton: this.notCheck,
      male: this.radioNot,
      female: this.radioNot,
    };
  }
  render() {
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
      <SafeAreaView style={[styles.loginModalParentView]}>
        <View style={styles.imageView}>
          <TouchableOpacity onPress={() => this.props.toggleScreen(1)}>
            <Image
              style={{width: 40, height: 40, marginRight: 15}}
              source={{uri: 'https://img.icons8.com/ios/2x/multiply.png'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.signInParentView}>
          <TouchableOpacity onPress={() => this.props.toggleScreen(2)}>
            <View style={{marginLeft: 13}}>
              <Text style={{fontSize: 22, color: '#bfbdb8'}}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.signInView}>
              <Text style={{fontSize: 22}}>Join</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.inputText}>
          <TextInput
            placeholder={'First Name'}
            style={styles.inputEmail}
            onChangeText={value => this.setState({value})}
            value={this.state.value}
          />
        </View>
        <View style={styles.inputText}>
          <TextInput placeholder={'Last Name'} style={styles.inputEmail} />
        </View>
        <View style={styles.inputText}>
          <TextInput placeholder={'Your Email'} style={styles.inputEmail} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            placeholder="Password"
            secureTextEntry={this.state.passwordShow}
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
        <View
          style={[styles.inputEmail, {marginTop: 15, flexDirection: 'row'}]}>
          <Image
            style={styles.country}
            source={{
              uri:
                'https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_India_-_Circle-128.png',
            }}
          />
          <Text style={{margin: 10, fontSize: 20}}>+91 | </Text>
          <Dropdown
            fontSize={22}
            label={87}
            data={data}
            containerStyle={styles.drop}
          />
          <Text style={{margin: 10, fontSize: 20}}> | 1234567</Text>
        </View>
        <View style={styles.maleParentView}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              this.state.male == this.radioNot
                ? this.setState({male: this.radio, female: this.radioNot})
                : this.setState({male: this.radioNot});
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={{uri: this.state.male}}
            />
            <Text style={{margin: 8}}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              this.state.female == this.radioNot
                ? this.setState({female: this.radio, male: this.radioNot})
                : this.setState({female: this.radioNot});
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={{uri: this.state.female}}
            />
            <Text style={{margin: 8}}>Female</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkButtons}>
          <TouchableOpacity
            onPress={() => {
              this.state.checkButton == this.notCheck
                ? this.setState({checkButton: this.check})
                : this.setState({checkButton: this.notCheck});
            }}>
            <Image
              style={styles.checks}
              source={{uri: this.state.checkButton}}
            />
          </TouchableOpacity>
          <View style={{marginRight: 20}}>
            <Text style={{marginRight: 20, fontSize: 15}}>
              Be the first to know about new arrivals, and promos by submitting
              your email you can opt at any time.
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'black',
            paddingVertical: 17,
            marginHorizontal: 20,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, color: 'white'}}>Join Now</Text>
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
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
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
