import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
 

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon'
    }
  }

  componentDidMount() {
    this.getPokemon()
  }

  getPokemon = () => {
    this.setState({ loading: true })

    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {

        this.setState({ 
          pokemon: res.results,
          url: res.next,
          loading: false
        })

      })
  }

  render() {

    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>descarregando</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          
          <FlatList
            data={this.state.pokemon}
            renderItem={
              ({ item }) => <Text style={{color:'red', fontSize:18 , marginTop:25}}>{item.url}</Text>
            }
          />

        </View>
      );
    }


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
