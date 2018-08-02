import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';

import Swiper from 'react-native-swiper';           //swipe modules url:  https://www.npmjs.com/package/react-native-swiper


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    var { height, width } = Dimensions.get('window');
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollcontainer}>
        <View style={styles.container}>
          <View style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Swiper showsButtons={false} autoplay={true} showsPagination={true} autoplayTimeout={5} >
              <View style={styles.slide1}>
                <Image style={{ flex: 1, alignSelf: 'stretch', width: '99%' }} source={require('../assets/images/intro3.png')} />
              </View>
              <View style={styles.slide2}>
                <Image style={{ flex: 1, alignSelf: 'stretch', width: '99%' }} source={require('../assets/images/intro2.png')} />
              </View>
            </Swiper>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Swiper showsButtons={false} autoplay={true} showsPagination={true} autoplayTimeout={5} >
              <View style={styles.slide1}>
                <Image style={{ flex: 1, alignSelf: 'stretch', width: '99%' }} source={require('../assets/images/intro3.png')} />
              </View>
              <View style={styles.slide2}>
                <Image style={{ flex: 1, alignSelf: 'stretch', width: '99%' }} source={require('../assets/images/intro2.png')} />
              </View>
            </Swiper>
          </View>
        </View>

      </ScrollView>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://www.sorez.co.kr/'
    );
  };
}

const styles = StyleSheet.create({
  scrollcontainer: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },

  helpLink: {
    paddingVertical: 15,
  },

});
