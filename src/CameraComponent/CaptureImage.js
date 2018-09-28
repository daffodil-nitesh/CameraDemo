import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './Style';

class CaptureImage extends Component {
 

  state = {
    base64Code: ''
  }


  /**
   * Async Function to capture image and display it on the next screen
   */
  takePicture = async function () {
    if (this.camera) {
      const options = { quality: 1.0, base64: true, mirrorImage: true };
      const data = await this.camera.takePictureAsync(options)
      console.warn(data);
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerstyle}>
          <Text style={styles.headerText} >Smile Please!!</Text>
          <Text style={styles.headerSubText} >Take a picture of yourself</Text>
        </View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          mirrorImage={true}
        >
          <View style={styles.buttonContainerStyle}>
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}
            >
             <Text>Capture</Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }
}

export default CaptureImage;