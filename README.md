# ReactNativeBarcodeScanner
Implemented a barcode scanner with support of react native technology

### Some screen shots here:

![React Native Barcode Scanner - Launcher](http://i.imgur.com/6ddBIde.png)
![React Native Barcode Scanner - Scanning](http://i.imgur.com/6Effmbr.png)

### Usage
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
