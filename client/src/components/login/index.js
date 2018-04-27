import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
  View, 
  Text,
  Button
} from 'react-native'

import * as Actions from '../../actions'
import style from './style';

export class Login extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.loginText}>Login Page</Text>
        <Button color="#d40000" title="Login" onPress={() => {}} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
