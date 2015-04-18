/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var BarcodeScanner = require('./BarcodeScanner');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var ReactNativeBarcodeScanner = React.createClass({
  render: function() {
    return (
      <View>
        <TouchableHighlight onPress={this._switchCamera}>
          <View>
            <BarcodeScanner
              ref="scanner"
              aspect="Fill"
              type="Back"
              orientation="Portrait"
              onScanned={this._onScannedResult}
              style={{height: 200, width: 200}}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._startScaning}>
          <Text>Start Scaning</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._stopScaning}>
          <Text>Stop Scaning</Text>
        </TouchableHighlight>
      </View>
    );
  },
  _switchCamera: function() {
    this.refs.scanner.switch();
  },
  _startScaning: function() {

  },
  _stopScaning: function() {
    this.refs.scanner.stopScanning();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeBarcodeScanner', () => ReactNativeBarcodeScanner);
