import React, { Component } from 'react';
 
import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
 
import QRCodeScanner from 'react-native-qrcode-scanner';
 
class ScanScreen extends Component {
  onSuccess(e) {
      console.log("scanned data",e)
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }
 
  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text style={styles.centerText}>
           Scan QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
        cameraType={'front'}
        showMarker={true}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
 

export default ScanScreen;