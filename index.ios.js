/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
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
    //AlertIOS.alert(data);
    this.props.navigator.pop();
  }
});

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onLaunchPressed() {
    this.props.navigator.push({
      title: "Barcode Scanner",
      component: ReactNativeBarcodeScanner,
      passProps: {}
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
        <TouchableHighlight style={styles.button}
            onPress={this.onLaunchPressed.bind(this)}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Launch Barcode Scanner</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var ReactNativeBarcodeScannerMain = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          title: 'Welcome Barcode Scanner',
          component: Welcome,
        }}
      />
    )
  }
});

var styles = StyleSheet.create({
  navigator: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  barcode:{
    justifyContent: 'center',
    alignSelf: 'center',
    height: 200,
    width: 200,
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

AppRegistry.registerComponent('ReactNativeBarcodeScanner', () => ReactNativeBarcodeScannerMain);
