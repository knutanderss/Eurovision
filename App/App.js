import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       knappeting: "trykk her",
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Hei Knutegut!</Text>
        <Button title={this.state.knappeting} onPress={() => {this.setState({knappeting: "har trykket"})}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
