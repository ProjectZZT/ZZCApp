import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    <View style={styles.container}>

        <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/icon.png')
                    : require('../assets/images/robot-prod.png')
                }
                style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>ZEROZONE CALCULATOR</Text>

              <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                <MonoText style={styles.codeHighlightText}>App building 2018</MonoText>
              </View>

              <Text style={styles.getStartedText}>
                이 앱은 제로존 이론에 기반하여 작성되었습니다.
              </Text>
              <Text style={styles.getStartedText}>
                This app is based on zero zone theory.
              </Text>
              <Text style={styles.getStartedText}>
                제로존 이론에 대한 자세한 정보는 아래 링크에서 확인 할 수 있습니다.
              </Text>
              <Text style={styles.getStartedText}>
                More information about Zero Zone theory can be found at the link below.
              </Text>
            </View>

            <View style={styles.helpContainer}>
              <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
                <Text style={styles.helpLinkText}>W과학문화연구소 제로존 이론 자세히 보기</Text>
              </TouchableOpacity>
            </View>
          
      
          <View style={styles.tabBarInfoContainer}> 
            <Text style={styles.tabBarInfoText}>인앱 광고 영역</Text>

            <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
              <MonoText style={styles.codeHighlightText}>AdMob by Google</MonoText>
            </View>
          </View>
        </View>
    );
  }
   
  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://www.sorez.co.kr/intro.php'
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

