import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

class ExampleApp extends PureComponent {
  state={
    img:''
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
        />
        <View>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.getPhotosFromGallery.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> Albums </Text>
          </TouchableOpacity>
          <Image style={{with:20,height:300}} 
                  source={{uri:this.state.img}}
          ></Image>
        </View>
      </View>
    );
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data);
      CameraRoll.saveToCameraRoll(data.uri);
      this.setState({img:data.uri})
      console.log('hello Camera Button');
    }
  };

  getPhotosFromGallery=()=> {
    CameraRoll.getPhotos({first:100,assetType:'All'})
      .then(res => {
        console.log(res.edges)
    
        console.log('hello Album Button')
        // console.log(CameraRoll)
      })
      CameraRoll.getAlbums({first:100,after:"res",groupType:"Album"});

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
    backgroundColor: 'red',
  },
  preview: {
    flex: .9,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default ExampleApp;