###Deprecated, please refer to https://github.com/lwansbrough/react-native-camera for barcode/QRcode scanner

# ReactNativeBarcodeScanner
Implemented a barcode scanner with support of react native technology

## Some screen shots here:

![React Native Barcode Scanner - Launcher](http://i.imgur.com/6ddBIde.png)
![React Native Barcode Scanner - Scanning](http://i.imgur.com/6Effmbr.png)

## Getting started (TBV)
1. `npm install ReactNativeBarcodeScanner@latest --save`
2. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
3. Go to `node_modules` ➜ `ReactNativeBarcodeScanner` and add `ReactNativeBarcodeScanner.xcodeproj`
4. In XCode, in the project navigator, select your project. Add `libReactNativeBarcodeScanner.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
5. Click `ReactNativeBarcodeScanner.xcodeproj` in the project navigator and go the `Build Settings` tab. Make sure 'All' is toggled on (instead of 'Basic'). Look for `Header Search Paths` and make sure it contains both `$(SRCROOT)/../react-native/React` and `$(SRCROOT)/../../React` - mark both as `recursive`.
5. Run your project (`Cmd+R`)

## Usage
All you need is to `require` the `BarcodeScanner` module and then use the `<BarcodeScanner/>` tag.

```javascript
var BarcodeScanner = require('./BarcodeScanner');
var {
  AlertIOS,
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var ReactNativeBarcodeScanner = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._switchCamera}>
          <View>
            <BarcodeScanner
              ref="scanner"
              aspect="Fill"
              type="Back"
              orientation="Portrait"
              onScanned={this._onScannedResult}
              style={styles.barcode}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._stopScaning}>
          <Text>Stop Scaning</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._startScaning}>
          <Text>Start Scaning</Text>
        </TouchableHighlight>
      </View>
    );
  },
  _switchCamera: function() {
    this.refs.scanner.switch();
  },
  _stopScaning: function() {
    this.refs.scanner.stopScanning();
  },
  _startScaning: function() {
    this.refs.scanner.startScanning();
  },
  _onScannedResult: function(data) {
    console.log(data);
    if (this.state.value === '') {
      this.setState({value: data});
      AlertIOS.alert(this.state.value);
    }
    this.props.navigator.pop();
  }
});
```

------------
Thanks to Loch Wansbrough (@lwansbrough) for the `react-native-camera` module which provided me with a great example of how to set up this module.
