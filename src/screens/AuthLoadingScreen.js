import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  ImageBackground,
  View,
} from 'react-native';
import CustomButtom from '../components/CustomButtom';
import {styles} from '../screens/HomeStyle'
class Class extends Component {
  constructor(props) {
    super(props);
    console.log('[AuthLoadingScreen]');
  }

  componentDidMount() {
    this.props.navigation.navigate('MainMenu');
  }
  render() {
    return (
      <Fragment>
        <ImageBackground
          style={{ flex: 1 }}
          source={this.props.asset.images.splash}
          resizeMode='cover' >
          <View style={styles.styleViewAuth[0]}>
            <View style={styles.styleViewAuth[1]}>
            
            </View>
          </View>
        </ImageBackground>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state.GlobalReducer;
export default connect(mapStateToProps)(Class);